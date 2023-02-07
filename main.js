//validação de confirmação de senha

var password = document.getElementById("password")
    , confirm_password = document.getElementById("confirm_password");

function validatePassword(){
    if(password.value != confirm_password.value) {
    confirm_password.setCustomValidity("Senhas diferentes!");
    } else {
    confirm_password.setCustomValidity('');
    }
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;

// esconder senha

function togglePassword() {
    const inputPassword = document.querySelector('#password')
    const iconTogglePassword = document.querySelector('#togglePassword')
    
    const type = inputPassword.getAttribute('type') === 'password' ? 'text' : 'password'
    
    inputPassword.setAttribute('type', type)
    
    iconTogglePassword.classList.remove(type === 'text' ? 'bi-eye-slash' : 'bi-eye')
    iconTogglePassword.classList.add(type === 'text' ? 'bi-eye' : 'bi-eye-slash')
    }

    function toggleConfirmPassword() {
        const inputPassword = document.querySelector('#confirm_password')
        const iconTogglePassword = document.querySelector('#toggleConfirmPassword')
        
        const type = inputPassword.getAttribute('type') === 'password' ? 'text' : 'password'
        
        inputPassword.setAttribute('type', type)
        
        iconTogglePassword.classList.remove(type === 'text' ? 'bi-eye-slash' : 'bi-eye')
        iconTogglePassword.classList.add(type === 'text' ? 'bi-eye' : 'bi-eye-slash')
        }

