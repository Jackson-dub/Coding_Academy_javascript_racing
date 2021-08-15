document.addEventListener('DOMContentLoaded', (event) => {

    let whiteSquare = document.getElementsByTagName('footer');
    let mainDiv = whiteSquare[0].firstElementChild;
    let link = mainDiv.firstElementChild;

    link.onclick = function(){
        document.cookie = 'name=acceptsCookies; SameSite=Lax; expires='+ new Date().setDate(new Date().getDate()+1);
    }
    
    cookies = document.cookie.split(';').map(cookie=>cookie.split('=')).reduce((accumulator,[key,value])=>({...accumulator,[key.trim()]: decodeURIComponent(value)}),{});
     cookie = cookies.name;
    console.log(cookie);
    if(cookie){
        mainDiv.innerHTML = "";
        newDiv = document.createElement('div');
        newDiv.classList.add('delete')
        newDiv.innerHTML = `<button>Delete cookie</button>`;
        whiteSquare[0].appendChild(newDiv);
        let button = document.querySelector('.delete button');
         button.onclick = function(){
            document.cookie = 'name=acceptsCookies; SameSite=Lax; expires='+ new Date(0);
             let parent = document.querySelector('.delete');
             parent.style.display='none';
             //mainDiv.innerHTML = `This website use cookies, click OK to accept it. <a href="#">OK</a>`;
         };
     }

})