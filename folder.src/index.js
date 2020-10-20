const form = document.getElementById('form');
const username = document.getElementById('username')
const email = document.getElementById('email');
const password = document.getElementById('password')
const password2 = document.getElementById('password2');

// show input error message
function showError(input, message) {
    const formControl = input.parent.Element;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

// show success outline
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

//Check email is valid
function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
        showSuccess(input);

    } else {
        showError(input, 'Email is not valid');
    }
}
// Check required fields
function checkrequired(inputArr) {
    inputArr.forEach(function (input) {
        if (input.value.trim() === '') {
            showError(imput, '${getFieldName(input)} is required');
        } else {
            showSuccess(input);
        }
    });
}

//Check input Length
function checkLength(input, min, max){
    if (input.value.length < min) {
        showError(
            input,
            '${getFieldName(input)} must be less than ${max} characters'
        );
    } else {
        showSuccess(input);
    }
}


//Check passwords match
function checkPasswordsMatch(input1, input2) {
    if (input1.value !== input2.value) {
        showError(input2, 'Passwords do not match');
    }
}

// Get fieldname
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Event Listners
form,addEventListener('submit', function(e) {
    e.preventDefault();

    checkrequired([username, email, password, password2]);
    checkLength(username, 3, 15);
    checkLength(password, 6, 25);
    checkEmail(email);
    checkPasswordsMatch(password, password2);   
});


















