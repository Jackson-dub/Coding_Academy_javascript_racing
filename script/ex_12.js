document.addEventListener('DOMContentLoaded', (event) => {

    let image = 'https://www.coding-academy.fr/wp-content/uploads/2017/10/CODING_LOGO_CMJN.png';

    localStorage.setItem('ex12_img', image);

    function displayImage(){
        let imageStorage = localStorage.getItem('ex12_img');
        
    }

    let whiteSquare = document.getElementsByTagName('footer');
    
    let mainDiv = whiteSquare[0].firstElementChild;
    
    mainDiv.innerHTML = `<img src="${image}" style="width:100%"/>`

});