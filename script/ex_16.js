document.addEventListener('DOMContentLoaded', (event) => {

    let whiteSquare = document.getElementsByTagName('footer');
    let mainDiv = whiteSquare[0].firstElementChild;

    let myForm = mainDiv.firstElementChild;
    let input = myForm.firstElementChild;

    myForm.addEventListener('submit', e => {
        e.preventDefault();

        //const endpoint = ;
        const formData = new FormData();


        formData.append('SelectedFile', input.files[0]);

        fetch("http://localhost:8000/index.php",{
            method:"POST",
            body:formData
        }).catch(console.error);
    })
   

});