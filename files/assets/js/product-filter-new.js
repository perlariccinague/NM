const allProductElements = document.querySelectorAll('.product');
const questionContainer = document.getElementById('question');
const answerContainer = document.querySelector('.answers');
const contactButton = document.querySelector('.contact-button');
const backButton = document.querySelector('.back-button');
const questionsUrl = 'files/assets/js/questions.json';
const productsUrl = 'files/assets/js/products.json';
let relatedProducts = [];
let allProductsToShow = [];
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
            product.classList.add('invisible-product');
            product.classList.remove('visible-product');
            if(products.includes(parseInt(product.id))) {
                setTimeout(() => {
                    product.classList.remove('invisible-product');
                    product.classList.add('visible-product');
                },500)
            }
        })
    }
}

const findAllRelatedProducts = (data, answer) => {
    console.log('Finding all related products');
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
    console.log('returning: ', relatedProducts);
    return relatedProducts;
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
                            console.log('No Products found for this Question');
                            allProductsToShow = allProductsToShow.concat(findAllRelatedProducts(data, answer));
                            console.log('All Products to Show: ', allProductsToShow);
                        }

                        const button = document.createElement('div');
                        button.innerHTML = answer.text;
                        button.addEventListener('click', function() {
                            allProductsToShow = [];
                            showCurrentQuestion(answer.target);
                            backButton.classList.remove('invisible');
                        })

                        answerContainer.appendChild(button);
                    })
                }

                showProducts(allProductsToShow);
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
            if(allProductsToShow.includes(product.id)) {
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
