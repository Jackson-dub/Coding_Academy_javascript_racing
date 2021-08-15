document.addEventListener('DOMContentLoaded', (event) => {

    let canvas = document.querySelectorAll('canvas');
        canvas = Array.from(canvas);

    canvas.forEach(function(canva){

        if(canvas.indexOf(canva) <= 3){
            canva.style.backgroundColor = "orange";
        }else if(canvas.indexOf(canva)>3 && (canvas.indexOf(canva))<=6){

            canva.style.backgroundColor = "purple";

        }else if(canvas.indexOf(canva)>7){

            canva.style.backgroundColor = "green";

        }else{
            canva.style.backgroundColor = "#000";
        }

    })
  
    
});