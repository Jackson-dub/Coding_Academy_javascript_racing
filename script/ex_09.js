document.addEventListener('DOMContentLoaded', (event) => {

    let whiteSquare = document.getElementsByTagName('footer');
    let mainDiv = whiteSquare[0].children[0];
    let canvas = mainDiv.firstElementChild;
    let secondDiv = whiteSquare[0].children[1];
    
    mainDiv.style.position = "relative";

    let dragValue;
    
    canvas.onmousedown =function(e){
        canvas.style.position = "absolute";
        dragValue = canvas;
    }

   mainDiv.onmouseup = function(){
      dragValue = null;
   }

    mainDiv.onmousemove = function(e){
        let x = e.layerX;
        let y = e.layerY;
        dragValue.style.left = x +"px";
        dragValue.style.top = y + "px";
        secondDiv.innerHTML = `New coordonates => { x : ${x}, y : ${y}}`;
    }
 



   

});