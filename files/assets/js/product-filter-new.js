const allProductElements = document.querySelectorAll('.product');
const questionContainer = document.getElementById('question');
const answerContainer = document.querySelector('.answers');
const contactButton = document.querySelector('.contact-button');
const backButton = document.querySelector('.back-button');
const reload = document.querySelector('.reload');
const questionsUrl = 'files/assets/js/questions.json';
const productsUrl = 'files/assets/js/products.json';
let allProductsToShowClean = [];
let allProductsToShow = [];
let relatedProducts = [];
let allAnswers = [];
let previousId = 0;
let allProducts;
let questionId;
let targetId;


backButton.classList.add('invisible');
contactButton.classList.add('invisible');

const showProducts = (products) => {
    if(products.length > 0) {
        allProductElements.forEach(product => {
            product.classList.add('fading-out-product');
            product.classList.remove('visible-product');
            setTimeout(() => {
                product.classList.remove('fading-out-product');
                product.classList.add('invisible-product');
                if(products.includes(parseInt(product.id))) {
                    product.classList.add('fading-in-product')
                    product.classList.remove('invisible-product');
                    setTimeout(() => {
                        product.classList.remove('fading-in-product');
                        product.classList.add('visible-product');
                    },300)
                }
            }, 300);

            if(product.classList.contains("fading-out-product") || product.classList.contains("fading-in-product")) {
                reload.classList.add('fading-in-reload');
                reload.classList.remove('invisible-reload');
                setTimeout(() => {
                    reload.classList.remove('fading-in-reload');
                    reload.classList.add('visible-reload');
                    setTimeout(() => {
                        reload.classList.remove('fading-out-reload');
                        reload.classList.add('invisible-reload');
                    },200)

                }, 300);
            }
        })
    }
}

const findAllRelatedProducts = (data, answer) => {
    relatedProducts = [];
    targetId = answer.target;
    data.questions.forEach(newId => {
        if(newId.id === targetId) {
            if(newId.products) {
                relatedProducts = relatedProducts.concat(newId.products);
            }
            else {
                newId.answers.forEach(answer => {
                    findAllRelatedProducts(data, answer)
                })
            }
        }
    })
    allProductsToShow = allProductsToShow.concat(relatedProducts);
}

const startFilter = (data) => {

    const showCurrentQuestion = (id) => {
        allProductsToShow = [];
        data.questions.forEach(question => {
            questionId = question.id;

            if(questionId === id ) {

                let hasProduct = false;
                questionContainer.classList.add('fading-out-question');
                setTimeout(() => {
                    questionContainer.innerHTML = question.question;
                    questionContainer.classList.add('fading-in-question');
                    questionContainer.classList.remove('fading-out-question');
                    setTimeout(() => {
                        questionContainer.classList.remove('fading-in-question');
                    }, 100)
                }, 100)
                previousId = question.previousId;
                hasProduct = question.products;
                if(allAnswers.length > 0) {
                    allAnswers.forEach(child => child.remove())
                }

                if(hasProduct) {
                    showProducts(question.products);
                    contactButton.classList.remove('invisible');
                } else {
                    question.answers.forEach(answer => {

                        if(!hasProduct) {
                            findAllRelatedProducts(data, answer);
                            allProductsToShow.forEach((c) => {
                                if (!allProductsToShowClean.includes(c)) {
                                    allProductsToShowClean.push(c);
                                }
                            });
                        }

                        const button = document.createElement('div');
                        button.innerHTML = answer.text;
                        button.addEventListener('click', function() {
                            allProductsToShowClean = [];
                            showCurrentQuestion(answer.target);
                            backButton.classList.remove('invisible');
                        })
                        answerContainer.classList.add('fading-out-question');
                        setTimeout(() => {
                            answerContainer.appendChild(button);
                            answerContainer.classList.add('fading-in-question');
                            answerContainer.classList.remove('fading-out-question');
                            setTimeout(() => {
                                answerContainer.classList.remove('fading-in-question');
                            }, 100)
                        }, 100)
                       /* answerContainer.appendChild(button);*/
                        console.log(answerContainer.appendChild(button).innerHTML);
                    })
                }

                showProducts(allProductsToShowClean);
                allAnswers = document.querySelectorAll('.answers div');
            }
        })
    }

    backButton.addEventListener('click', () => {
        showCurrentQuestion(previousId);
        contactButton.classList.add('invisible');
        if(previousId === 0) {
            backButton.classList.add('invisible');
        }
    })

    contactButton.addEventListener('click', () => {
        let allNames = [];
        allProducts.forEach(product => {
            if(allProductsToShowClean.includes(product.id)) {
                allNames.push(product.name);
            }
        })
        window.location.href = `mailto:c.koenig@bindewald.de?subject=Anfrage zu ${allNames}`
    })

    showCurrentQuestion(1);
}

Promise.all([
    fetch(questionsUrl).then(value => value.json()),
    fetch(productsUrl).then(value => value.json())
])
  .then((allResponses) => {
      startFilter(allResponses[0]);
      allProducts = allResponses[1].products;
  })
  .catch((err) => {
      console.log(err);
  });




