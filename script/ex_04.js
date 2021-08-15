document.addEventListener('DOMContentLoaded', (event) => {
    
let whiteSquare = document.getElementsByTagName('footer');

document.addEventListener('keyup', logKey);

let tapedKeys = '';
function logKey(e) {  
    tapedKeys += `${e.key}`;
    whiteSquare[0].firstElementChild.innerText = `${tapedKeys.slice(-42)}`;
}

});
