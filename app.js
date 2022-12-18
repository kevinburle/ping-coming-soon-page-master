const email = document.getElementById('email');
const form = document.querySelector('.form');
const mailValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


form.addEventListener('submit', function(e){
    e.preventDefault()
    if(email.value === "" || !email.value.match(mailValid)){
        email.parentElement.classList.add('active');
        email.placeholder = "example@email.com"
    } else {
        email.parentElement.classList.remove('active');
        email.value = "";
        email.placeholder = "Your email address..."
    }

})