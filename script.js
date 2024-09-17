var hole = document.getElementById("hole");
var game = document.getElementById("game");
var result = documentFragment.getElementById("result");
var text = document.getElementById("text");
var score = 0;
var jumping = 0;

hole.addEventListener("animationiteration" ,RanHole) 
// #so here the RanHole is the fuction  


function RanHole(){  
    // #here the fuction declare which is known as ranhole
    var random = -((math,random()*350)+150)
    hole.style.top = random+"px";
    score++;
}

var fall = setInterval(function(){
    var birdTop = parseInt(window.getComputedStyle(bird).getPropertyValue("top"))
    if(jumping == 0)
    {
        bird.style.top = (birdTop+2)+"px";

    }

    var blockleft = parseint(window.getComputedStyle(block).getPropertyValue("left"));
    var holeTop = parseint(window.getComputedStyle(hole).getPropertyValue("top"));
    var hTop = (500+holeTop);
    if((birdTop >450) || ((blockleft <50)&&(blockleft> -50)&&((birdTop <hTop) || (birdTop > hTop + 100))))
     {
      result.style.display = "block";
      text.innertext = "your final score is : ${score}";
      game.style.display = "none";
      score = 0;

     }
},10)

window.addEventListener("keyword",hop)

function hop()
{
    jumping = 1;


    var birdTop = parseint(window.getcomputedstyle(bird).getPropertyValue("top"));
    if (birdTop > 6)
    {
        bird.style.top =  (birdTop - 60) + "px";
    }

    setTimeout(function(){

        jumping = 0
    },100)
    


}