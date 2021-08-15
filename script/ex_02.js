document.addEventListener('DOMContentLoaded', (event) => {
    let count = 0;
    let whiteSquare = document.getElementsByTagName('footer');

     whiteSquare[0].onclick = function(){
         count++;
         whiteSquare[0].firstElementChild.innerText = count;
     };
   
    
});
