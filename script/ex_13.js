document.addEventListener('DOMContentLoaded', (event) => {

    let image = localStorage.getItem("ex12_img");
    let whiteSquare = document.getElementsByTagName('footer');
    let mainDiv = whiteSquare[0].firstElementChild;

    mainDiv.innerHTML = `<img class="displayedImage" src="${image}" style="width:500px"/>`;
    let displayedImage = document.querySelector('.displayedImage');

    mainDiv.addEventListener('mouseenter', function () {
        let decreaseImage = setInterval(function () {
            width = displayedImage.width;
            displayedImage.style.width = (width - ((width * 5) / 100)) + "px";
        }, 1000)

        mainDiv.addEventListener('mouseleave', function () {
            clearInterval(decreaseImage);
            displayedImage.style.width = 500 + "px";

        });
    });

    displayedImage.onclick = function(){
        localStorage.removeItem("ex12_img");
    }

})