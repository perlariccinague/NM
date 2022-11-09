const url = 'files/assets/js/data.json';
let currentQuestion = 0;
const questionContainer = document.getElementById('question');
const answerContainer = document.querySelector('.answers');
let  allAnswers = [];
const backButton = document.querySelector('.back-button');
const newButton = document.querySelector('.new-button');
const allProductList = document.querySelector('#product-finder-article1');
let previewQuestion = 0;
let previewId = 0;
let allShowProduct = [];

const allProduct = document.querySelectorAll('.product');


allProductList.style.display = 'none';

const startFilter = (data) => {
    const showCurrentQuestion = (id) => {
        data.questions.forEach(question => {
            if(question.id === id ) {
                questionContainer.innerHTML = question.question;
                previewId = question.previewId ;
                if(question.products ) {
                   allShowProduct = question.products;
                   console.log(allShowProduct)
                }
                if(allAnswers.length > 0) {
                    allAnswers.forEach(child => child.remove())
                }
                question.answers.forEach(answer => {
                    const button = document.createElement('div');
                    button.innerHTML = answer.text;
                    button.addEventListener('click', function() {
                        showCurrentQuestion(answer.target);
                        if(answer.text === "Brauen" || answer.text === "Mühle") {
                            allProductList.style.display = 'block';
                            backButton.style.display = 'none';
                            newButton.style.display = 'block';
                        } else {
                            backButton.style.display = 'block';
                        }

                    })
                    answerContainer.appendChild(button);
                })
                allAnswers = document.querySelectorAll('.answers div');
            }
        })
    }
    showCurrentQuestion(1, 0);

    backButton.addEventListener('click', () => {
        showCurrentQuestion(previewId);
          if(previewQuestion === 1) {
            backButton.style.display = 'none';
        }
    })

    newButton.addEventListener('click', () => {
        showCurrentQuestion(1)
        newButton.style.display = 'none';
        allProductList.style.display = 'none';
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