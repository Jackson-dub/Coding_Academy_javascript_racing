document.addEventListener('DOMContentLoaded', (event) => {
    
    let whiteSquare = document.getElementsByTagName('footer');
    
       let mainDiv = whiteSquare[0].firstElementChild;
       let plusBtn = mainDiv.children[0];
       let minusBtn = mainDiv.children[1];
       let select = mainDiv.children[2];
       let body = document.querySelector('body');
        let count = 1;

       plusBtn.onclick=function(){
        count = (count + 0.5);
        body.style.fontSize = count+'rem';
       }

       minusBtn.onclick=function(){
        count = (count - 0.5);
        body.style.fontSize = count+'rem';
       }

      // let options = Array.from(select.children);
      // options.forEach(function(option){
           
       // if(option.value){
            
        select.addEventListener('change', function() {
                    console.log(select.options[select.selectedIndex].value)
            body.style.backgroundColor = select.options[select.selectedIndex].value;
            //}
});
           
      // });


    });