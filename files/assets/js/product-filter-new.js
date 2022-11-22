const url = 'files/assets/js/data.json';
const questionContainer = document.getElementById('question');
const answerContainer = document.querySelector('.answers');
let  allAnswers = [];
const backButton = document.querySelector('.back-button');
const newButton = document.querySelector('.new-button');
let allShowProduct = [];
let previousId = 0;
const allProduct = document.querySelectorAll('.product');
let questionId;


const showProduct = () => {
    if(allShowProduct.length > 0) {
            allProduct.forEach(product => {
                product.style.display = 'none';
                if(allShowProduct.includes(parseInt(product.id))) {
                    product.style.display = 'block';
                }
            })
    }
}


let targetId;
const findAllProducts = (data, answer) => {
    targetId = answer.target;
    data.questions.forEach(newId => {
        if(newId.id === targetId) {
            if(newId.products) {
                allShowProduct = allShowProduct.concat(newId.products);

            }
            else {
                newId.answers.forEach(answer => {
                    findAllProducts(data, answer)
                    console.log(allShowProduct);
                })
            }
        }
    })
    showProduct();
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
                   allShowProduct = question.products;
                   showProduct();
                    newButton.style.display = 'block';
                }
                if(allAnswers.length > 0) {
                    allAnswers.forEach(child => child.remove())
                }
                question.answers.forEach(answer => {
                    if(!hasProduct) {
                        findAllProducts(data, answer);
                    }
                    const button = document.createElement('div');
                    button.innerHTML = answer.text;
                    button.addEventListener('click', function() {
                        allShowProduct = [];
                        showCurrentQuestion(answer.target);
                        backButton.style.display = 'block';
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
        /*allProduct.forEach(product => {
            product.style.display = 'block';
            newButton.style.display = 'none';

        })*/
        newButton.style.display = 'none';
        if(previousId === 0) {
            backButton.style.display = 'none';
        }

    })

    newButton.addEventListener('click', () => {
        showCurrentQuestion(1)
        newButton.style.display = 'none';
         backButton.style.display = 'none';
         allProduct.forEach(product => {
             product.style.display = 'block';
         })
        if(previousId === 0) {
            backButton.style.display = 'none';
        }
    })
}

fetch(url)
    .then((response) => response.json())
    .then((data) => {
        startFilter(data);
    })
    .catch((error) => {
        console.log(error);
    })