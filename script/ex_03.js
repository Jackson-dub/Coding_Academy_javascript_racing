document.addEventListener('DOMContentLoaded', (event) => {
    
    let whiteSquare = document.getElementsByTagName('footer');
    let popUp = document.querySelector('.pop');

     whiteSquare[0].onclick = function(){
        
        whiteSquare[0].style.position = "relative";
        popUp.style.position ="absolute";
        popUp.style.top ="0";
        popUp.style.display = "block";
        if(popUp.style.visibility == "hidden"){
        }
     };

     let button = document.querySelector('.pop button');
     button.onclick=function(){
        let input = document.querySelector('.pop input');
        let text = input.value;
        if(text){

            popUp.style.visibility ="hidden";
            alert(`Are you sure ${text} is your name ?`);
            alert(`Hello ${text} !`);
            whiteSquare[0].innerHTML = `Hello ${text} !`
        }

     }
     
     
   
    
});