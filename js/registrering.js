const elEpost = document.querySelector('#epost');
const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function checkEpost(){
    let elMsg = document.querySelector('#validering');
    if(elEpost.value.match(mailformat)){ //måste komma åt value utanför funktionen
        elMsg.textContent = 'tack';
    }else{
        elMsg.textContent='Ange en giltig epost-adress';
    }
}

elEpost.addEventListener('blur', checkEpost, false);

localstorageEpost = elEpost.value;
localStorage.setItem('epost', localstorageEpost);
document.querySelector('#användare').innerHTML = localStorage.getItem('epost');