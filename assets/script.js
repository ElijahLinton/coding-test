//variables for the basic structure of the quiz
var timeCount = document.getElementById("start")
var countDown = 72
var corrects = document.getElementById("correct")
var incorrects = document.getElementById("incorrect")
var correctAnswer = 0;
var incorrectanswer = 0;
let questionBox = document.getElementsByClassName('question')

let questionAmount, questionIndex 
 const sumbitBtn = document.getElementById('submit-btn')
 
questionHolder = $()
const questions = [
    {
        question:"what programming language is use to build basic elements of a webpage?",
        option1:"Python",
        option2:"html",
        option3:"stylesheet",
        option4:"javascript",
        rightAnswer:1
    },

    {
        question:"what is one way you can make your webpage fit phones and tablets",
        option1:"background-size",
        option2:"align-items",
        option3:"media-queries",
        option4:"font-family",
        rightAnswer:1
    },

    {
        question:"what are one of javascript keywords that can be declared ONCE but not again.",
        option1:"var",
        option2:"boolean",
        option3:"let",
        option4:"string",
        rightAnswer:2
    },
        
    {
        question:"what is an element inside another element is called",
        option1:"<p>",
        option2:"viewport",
        option3:"local storage",
        option4:"children",
        rightAnswer:4
    },
]

timeCount.addEventListener("click",function startTheGame(){
    
     questionAmount = questions.sort(() => Math.random() - .5)
    questionIndex = 0

    var quizBegan = setInterval(function(){
        countDown--;

        document.getElementById("timer").innerHTML = countDown;

if(countDown===0){
    clearInterval(quizBegan);}
    
}, 1000,);



displayEachQuestion()
},{once:true})

// used to have only one selected answer
function displayEachQuestion() {
 setQuestion(questionAmount[questionIndex])
}
function revealOption(question) {
 questionBox.innerText = question.question
}
