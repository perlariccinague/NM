const questionsUrl = 'files/assets/js/questions.json';
const productsUrl = 'files/assets/js/products.json';
const questionContainer = document.getElementById('question');
const answerContainer = document.querySelector('.answers');
const backButton = document.querySelector('.back-button');
const contactButton = document.querySelector('.contact-button');
const allProductElements = document.querySelectorAll('.product');
let questionId;
let allAnswers = [];
let allProductsToShow = [];
let previousId = 0;
let targetId;
let allProducts;

const showProducts = () => {
    if(allProductsToShow.length > 0) {
        allProductElements.forEach(product => {
            product.style.display = 'none';
            if(allProductsToShow.includes(parseInt(product.id))) {
                product.style.display = 'block';
            }
        })
    }
}

const findAllRelatedProducts = (data, answer) => {
    targetId = answer.target;
    data.questions.forEach(newId => {
        if(newId.id === targetId) {
            if(newId.products) {
                allProductsToShow = allProductsToShow.concat(newId.products);
            }
            else {
                newId.answers.forEach(answer => {
                    findAllRelatedProducts(data, answer)
                })
            }
        }
    })
    showProducts();
}


const startFilter = (data) => {

    const showCurrentQuestion = (id) => {
        data.questions.forEach(question => {
            questionId = question.id;

            if(questionId === id ) {

                let hasProduct = false;
                questionContainer.innerHTML = question.question;
                previousId = question.previousId ;
                hasProduct = question.products;

                if(hasProduct) {
                    allProductsToShow = question.products;
                    showProducts();
                    contactButton.style.display = 'inline-block';
                }

                if(allAnswers.length > 0) {
                    allAnswers.forEach(child => child.remove())
                }

                question.answers.forEach(answer => {

                    if(!hasProduct) {
                        findAllRelatedProducts(data, answer);
                    }

                    const button = document.createElement('div');
                    button.innerHTML = answer.text;
                    button.addEventListener('click', function() {
                        allProductsToShow = [];
                        showCurrentQuestion(answer.target);
                        backButton.style.display = 'inline-block';
                    })

                    answerContainer.appendChild(button);
                })

               allAnswers = document.querySelectorAll('.answers div');

            }
        })
    }

    showCurrentQuestion(1);

    backButton.addEventListener('click', () => {
        showCurrentQuestion(previousId);
        contactButton.style.display = 'none';
        if(previousId === 0) {
            backButton.style.display = 'none';
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
