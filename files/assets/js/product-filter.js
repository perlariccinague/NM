// FILTER

const selfTestContainer = document.getElementById('self-test');
const question = document.getElementById('question');
const answerContainer = document.querySelector('.answers');
const allAnswers = document.querySelectorAll('.answers div');
const backButton = document.querySelector('.back-button');
const newButton = document.querySelector('.new-button');
const progressBar = document.querySelector('.progress-bar-fill');
let currentQuestion = 0;
let score = 0;
let amounts = [];
const answerContainer1 = document.querySelector('.answers1');
const answerContainer2 = document.querySelector('.answers2');
const answerContainerB1 = document.querySelector('.answersB1');
const answerContainerB13 = document.querySelector('.answersB13');
const allProductList = document.querySelector('#product-finder-article1');

const questions = [
    "Welche Kategorie",
    "Welche Brot und Kleingebäck",
    "Welche weiteren Anwendungen",
    "Welche Malze",
    "Welche Getreidesorte",
    "Question 5",
    "Question 6"
];

const outcomes = [
    "lorem",
    "lorem lorem lorem ipsum text ",
    "Test Test Test Test"
]

question.innerHTML = questions[currentQuestion];
answerContainer1.style.display = 'none';
answerContainer2.style.display = 'none';
answerContainerB1.style.display = 'none';
answerContainerB13.style.display = 'none';
allProductList.style.display = 'none';


const finishQuestionnaire = () => {
    answerContainer.style.display = 'none';
    backButton.style.display = 'none';
    newButton.style.display = 'block';
    if( score === 0) {
        question.innerHTML = outcomes[0];
    } else if(score > 1 && score <= 7) {
        question.innerHTML = outcomes[1];
    } else if( score >= 0 && score <= 7) {
        question.innerHTML = outcomes[1];
    } else {
        question.innerHTML = outcomes[2];
    }
}

newButton.addEventListener('click', function() {
    answerContainer.style.display = 'flex';
    newButton.style.display = 'none';
    answerContainer1.style.display = 'none';
    answerContainer2.style.display = 'none';
    allProductList.style.display = 'none';
    question.innerHTML = "Welche Kategorie.";
    currentQuestion = 0;
    score = 0;
    amounts = [];
    /*progressBar.style.width = '0%';*/
})

backButton.addEventListener('click', function() {
    answerContainer.style.display = 'flex';
    answerContainer1.style.display = 'none';
    answerContainer2.style.display = 'none';
    answerContainerB1.style.display = 'none';
    answerContainerB13.style.display = 'none'
    score = score-amounts[currentQuestion-1];
    currentQuestion--;
   /* amounts.splice(-1);*/
    console.log(amounts.splice(-1));
    if(currentQuestion === 0) {
        backButton.style.display = 'none';
    }
   /* progressBar.style.width = currentQuestion * 100 / 7 + '%';*/
    question.innerHTML = questions[currentQuestion];
})

allAnswers.forEach(answer => {
    answer.addEventListener('click', function() {
    if(answer.innerHTML=== "Mühle") {
        finishQuestionnaire();
        allProductList.style.display = '';
    } else if(answer.innerHTML === "Weitere Anwendungen") {
        answerContainer.style.display = 'none';
        answerContainer1.style.display = 'flex';
        currentQuestion++;
        question.innerHTML = questions[currentQuestion + 1];
        backButton.style.display = 'block';
        const allAnswer1 =  document.querySelectorAll('.answers1 div');
        allAnswer1.forEach(answer1 => {
            answer1.addEventListener('click', () => {
                if(answer1.innerHTML === "Feine Backwaren") {
                    answerContainer1.style.display = 'none';
                    finishQuestionnaire();
                } else if(answer1.innerHTML === "Petfood") {
                    answerContainer1.style.display = 'none';
                    finishQuestionnaire();
                } else if(answer1.innerHTML === "Teigwaren") {
                    answerContainer1.style.display = 'none';
                    finishQuestionnaire();
                } else if(answer1.innerHTML === "Weitere Anwendungen") {
                    answerContainer1.style.display = 'none';
                    finishQuestionnaire();
                } else {
                    finishQuestionnaire();
                }
            })
        })
    } else if(answer.innerHTML === "Brot und Kleingebäck") {
        answerContainer.style.display = 'none';
        answerContainer2.style.display = 'flex';
        currentQuestion++;
        question.innerHTML = questions[currentQuestion];
        backButton.style.display = 'block';
        const allAnswer2 =  document.querySelectorAll('.answers2 div');
        allAnswer2.forEach(answer1 => {
            answer1.addEventListener('click', () => {
                if(answer1.innerHTML === "Enzymaktive Malze") {
                    answerContainer2.style.display = 'none';
                    /*backButton.style.display = 'none';*/
                    finishQuestionnaire();
                } else if(answer1.innerHTML === "Aromamalz") {
                    answerContainer2.style.display = 'none';
                    backButton.style.display = 'none';
                    answerContainerB1.style.display = 'flex';
                    currentQuestion++;
                    question.innerHTML = questions[currentQuestion + 1];
                    backButton.style.display = 'block';
                    const allB1Answer =  document.querySelectorAll('.answersB1 div');
                    allB1Answer.forEach(b1Answer => {
                        b1Answer.addEventListener('click', () => {
                            if(b1Answer.innerHTML === "Helle Malze") {
                                answerContainerB1.style.display = 'none';
                                finishQuestionnaire();
                              /*  backButton.style.display = 'none';*/
                            } else if(b1Answer.innerHTML === "Dunklere Malze") {
                                answerContainerB1.style.display = 'none';
                                finishQuestionnaire();
                            }
                        })
                    })

                } else if(answer1.innerHTML === "Röstmalz") {
                    answerContainer2.style.display = 'none';
                    backButton.style.display = 'none';
                    answerContainerB13.style.display = 'flex';
                    currentQuestion++;
                    question.innerHTML = questions[currentQuestion + 2];
                    console.log(question.innerHTML);
                    const allB13Answer =  document.querySelectorAll('.answersB13 div');
                   allB13Answer.forEach(b13Answer => {
                       b13Answer.addEventListener('click', () => {
                           if(b13Answer.innerHTML === 'Gerste'){
                               answerContainerB13.style.display = 'none';
                               finishQuestionnaire();
                           } else if(b13Answer.innerHTML === 'Weizen'){
                               answerContainerB13.style.display = 'none';
                               finishQuestionnaire();
                           } else if(b13Answer.innerHTML === 'Roggen'){
                               answerContainerB13.style.display = 'none';
                               finishQuestionnaire();
                           }
                       })
                   })
                } else if(answer1.innerHTML === "Malzflocken") {
                    answerContainer2.style.display = 'none';
                  /*  backButton.style.display = 'none';*/
                    finishQuestionnaire();
                } else {
                    finishQuestionnaire();
                }
            })
        })
    }  else {
        finishQuestionnaire();
    }
        /*const amount = parseInt(answer.dataset.amount);
        backButton.style.display = 'blocK';
        score = score+amount;
        currentQuestion++;
        amounts.push(amount);
        if(currentQuestion <= 6) {
            question.innerHTML = questions[currentQuestion];
        } else {
            finishQuestionnaire();
        }
        progressBar.style.width = currentQuestion * 100 / 7 + '%';*/
    })
})

