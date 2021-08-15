document.addEventListener('DOMContentLoaded', (event) => {

    let whiteSquare = document.getElementsByTagName('footer');
    let mainDiv = whiteSquare[0].firstElementChild;
    let canvas = mainDiv.firstElementChild;
    let ctx = canvas.getContext("2d");
    ctx.fillStyle =" white";
    
    ctx.beginPath();
    ctx.moveTo(6,6);
    ctx.lineTo(14,10);
    ctx.lineTo(6,14);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();  

    let audio = document.querySelector('audio');
    let buttons = document.querySelectorAll('button');
    let pause = buttons[0];
    let stop = buttons[1];
    let mute = buttons[2];
    console.dir(audio);
    let count = 0;
   canvas.onclick=function(){
       if(count == 0){
           count = 1;
           audio.play();
       }  
   }


   pause.onclick = function(){

        if(count == 1){
            count = 0
            audio.pause();
        }
   }

   stop.onclick=function(){
       audio.pause();
       audio.currentTime = 0;
       count = 0;
   }

   mute.onclick = function(){
       if(audio.muted){
        audio.muted = false;
       }else{
        audio.muted = true;
       }  
   }

   

});