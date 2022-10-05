var timeCount = document.getElementById("start")
var countDown = 72


timeCount.addEventListener("click",function startTheGame(){
    setInterval(function(){
        countDown--;

        document.getElementById("timer").innerHTML = countDown;
        
}, 1000,);
    if(countDown <= 0){
    return(timeCount)};
},{once:true})
