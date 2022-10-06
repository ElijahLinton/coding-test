var timeCount = document.getElementById("start")
var countDown = 72


timeCount.addEventListener("click",function startTheGame(){
    var quizBegan = setInterval(function(){
        countDown--;

        document.getElementById("timer").innerHTML = countDown;

        if(countDown===0){
    clearInterval(quizBegan);}
    
}, 1000,);

},{once:true})

