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
console.log(reload);

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
                reload.style.opacity = '1';
                reload.classList.add('fading-out-image');
                setTimeout(() => {
                    reload.classList.remove('fading-out-image');
                    reload.classList.add('fading-in-product');
                    setTimeout(() => {
                        reload.classList.remove('fading-in-product');
                        reload.style.opacity = '0';
                    },100)

                }, 1000);
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
                questionContainer.innerHTML = question.question;
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

                        answerContainer.appendChild(button);
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




