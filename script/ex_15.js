document.addEventListener('DOMContentLoaded', (event) => {

    let whiteSquare = document.getElementsByTagName('footer');
    let mainDiv = whiteSquare[0].firstElementChild;

const hexNumbers = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

function changeColor(){
      let hexCol = "#";
      for(let i = 0; i<6;i++){
            let random = Math.floor(Math.random()*hexNumbers.length);
            hexCol += hexNumbers[random];
      }  
      
      mainDiv.style.backgroundColor = hexCol;
      
}
    mainDiv.addEventListener('click',changeColor);


});