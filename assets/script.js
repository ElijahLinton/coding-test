//variables for the seconds the quiz last elements of the webpage and points
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
    //Math random to display every random question everytime the user takes the quiz
     questionAmount = questions.sort(() => Math.random() - .4)
     questionIndex = 0
    //quizBegan starts the quiz and timer as soons as the user clicks the "start quiz button"
    var quizBegan = setInterval(function(){
        countDown--;
    //displaying the amount of time the user has until the game ends
        document.getElementById("timer").innerHTML = countDown;
    //after the countdown happends all options and next buttons are hidden your score is save and you name in the prompt window
    if(countDown===0){
        clearInterval(quizBegan);
        window.prompt("all questions have been answered would you live to save your score?")
        $('#next-btn').hide()
        $('.optionbtn').hide()
        storeCorrect()
        storeIncorrect()
        location.reload()}
    //every 1000 milliseconds the timer will deduct the numbers in countDown so in total the user has 72 seconds to complete the quiz
}, 1000,);



    displayEachQuestion()
    //the event listener can only be called once to prevent any bugs or acceleration of the time
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


//function used to show the options of the question in button form
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
// after a question is answered it will hide the next button until the user selects the answer again
function defaultStructure(){
    while (optionButtonsEl.firstChild){
        $('#next-btn').hide()
        optionButtonsEl.removeChild(optionButtonsEl.firstChild)
    }
}
//function option selected will allow the user to click on the option of his choice but afterwards
//all the options will disappear to prevent the userr for selecting the other option
function optionSelected(e){
    const buttonOfchoice = (e).target
    answer = buttonOfchoice.dataset.answer
    //the loop allows the webpage to sum up the amount of correct and incorrect answers the user will have 
    for (let i = 0; i < questions.length; i++){
        if(answer) {
        correctAnswer++;
        corrects.innerHTML = correctAnswer
        
    } else if(!answer){incorrectAnswer++;
        incorrects.innerHTML = incorrectAnswer
    }
    $('.optionbtn').hide()
}


//if else statement will check if there is any other question left if not it will allow 
//the user to save their points and their initials 
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
//storeCorrect automatically saves the users score into the local storage
function storeCorrect(){
    corrects.textContent = correctAnswer
    localStorage.setItem('correct points', correctAnswer);
}
//storeIncorrect does the same thing storeCorrect does but it saves the incorrect points 
//both will be automatically saved once the user finishes 
function storeIncorrect(){
    incorrects.textContent = incorrectAnswer
    localStorage.setItem('incorrect points', incorrectAnswer);
}


