//variables for the basic structure of the quiz
var timeCount = document.getElementById("start")
var countDown = 72
var corrects = document.getElementById("correct")
var incorrects = document.getElementById("incorrect")
var correctAnswer = 0;
var incorrectAnswer = 0;
var questionRandom = document.getElementById('random-questions')
const optionButtonsEl = document.getElementById('option-Button')
const nextButton = document.getElementById('next-btn')
let questionAmount, questionIndex 
 
 //an object of questions that are to be selected one of the text are correct
const questions = [
    {
        question:"what programming language is use to build basic elements of a webpage?",
        options: [
        {text:"Python"},
        {text:"html", answer:true},
        {text:"stylesheet"},
        {text:"javascript"}
        ]
    },

    {
        question:"what is one way you can make your webpage fit phones and tablets",
        options: [
            {text:"background-size"},
            {text:"align-items"},
            {text:"media-queries", answer:true},
            {text:"font-family"}
        ]
    },

    {
        question:"what are one of javascript keywords that can be declared ONCE but not again.",
        options: [
            {text:"var"},
            {text:"boolean"},
            {text:"const", answer:true},
            {text:"string"}
    ]
        
    },
        
    {
        question:"what is an element inside another element is called",
        options: [
            {text:"<p>"},
            {text:"viewport",},
            {text:"local storage"},
            {text:"children", answer:true}
        ]
    },
]
//event listener used to activate the game the moment the "start quiz" button is completed
timeCount.addEventListener("click",function startTheGame(){
    
     questionAmount = questions.sort(() => Math.random() - .4)
     questionIndex = 0

    var quizBegan = setInterval(function(){
        countDown--;

        document.getElementById("timer").innerHTML = countDown;

if(countDown===0){
    clearInterval(quizBegan);
    window.prompt("all questions have been answered would you live to save your score?")
    $('#next-btn').hide()
    $('.optionbtn').hide()
    storeCorrect()
    storeIncorrect()
    location.reload()}
    
}, 1000,);



displayEachQuestion()
},{once:true})

nextButton.addEventListener("click", () =>{
    questionIndex++
    displayEachQuestion()
})
// used to have only one selected answer
function displayEachQuestion() {
    defaultStructure()
    revealOption(questionAmount[questionIndex])
}


function revealOption(question) {
    questionRandom.innerText = question.question
    question.options.forEach(options =>{
        const button = document.createElement('button')
        button.innerText = options.text
        button.classList.add('optionbtn')
        if (options.answer){
            button.dataset.answer = options.answer
        }
        button.addEventListener('click', optionSelected)
        optionButtonsEl.appendChild(button)
    })
}

function defaultStructure(){
    while (optionButtonsEl.firstChild){
        $('#next-btn').hide()
        optionButtonsEl.removeChild(optionButtonsEl.firstChild)
    }
}

function optionSelected(e){
const buttonOfchoice = (e).target
 answer = buttonOfchoice.dataset.answer
for (let i = 0; i < questions.length; i++){
     if(answer) {
        correctAnswer++;
        corrects.innerHTML = correctAnswer
        
    } else if(!answer){incorrectAnswer++;
        incorrects.innerHTML = incorrectAnswer
    }
    $('.optionbtn').hide()
}
if (questionAmount.length > questionIndex + 1){
    $('#next-btn').show()
}else{
    var userInitials = localStorage.getItem('userInitials') 
     userInitials = prompt("all questions have been answered would you like to save your name and score?")
    localStorage.setItem('userScore&Initials',userInitials)
    storeCorrect()
    storeIncorrect()
    location.reload()
    
}


}

function storeCorrect(){
    corrects.textContent = correctAnswer
    localStorage.setItem('correct points', correctAnswer);
}
    
function storeIncorrect(){
    incorrects.textContent = incorrectAnswer
    localStorage.setItem('incorrect points', incorrectAnswer);
}


