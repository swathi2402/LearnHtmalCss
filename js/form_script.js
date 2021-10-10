const text = document.querySelector('#text');
const textError = document.querySelector('.text-error');
text.addEventListener('input', function(){
    let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
    if(nameRegex.test(text.value))
        textError.textContent = "";
    else
        textError.textContent ="Name is incorrect";
});
            
const email = document.querySelector('#email');
const email_error = document.querySelector('.email-error');
email.addEventListener('input', function() {
    let emailRegex = RegExp('^[a-z]+([\.\+\_\-][a-z]+)?@[a-z]+.[a-z]+(\.[a-z]{2})?$');
    if(emailRegex.test(email.value))
        email_error.textContent = "";
    else 
        email_error.textContent = "Email is incorrect"
});