const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')

function showSuccess(input){
    const formControl = input.parentElement
    formControl.classList.remove('error')
     formControl.classList.add('success')
}
function showError(input,message){
    const formControl = input.parentElement
    formControl.querySelector('small').innerText = message 
    formControl.classList.remove('success')
    formControl.classList.add('error')
    
}

function checkRequired(inputs){
    inputs.forEach(input => {
        if(input.value.trim() === '') showError(input,`${input.id} is required`)
    })
}
function checkLength(fieldName,min,max){
    if(fieldName.value.length < min){
        showError(fieldName,`${fieldName.id} must be at least ${min} characters`)
    }else if(fieldName.value.length > max){
        showError(fieldName,`${fieldName.id} must be less than ${max} characters`)
    }else showSuccess(fieldName)
}

function checkEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if(re.test(email.value)) showSuccess(email)
    else showError(email,'email is not valid')
}

function checkPasswordsMatch(password1,password2){
    if(password1.value !== password2.value) showError(password2,'passwords do not match')
    else showSuccess(password2)
}

form.addEventListener('submit',e => {
    e.preventDefault()
    checkLength(username,3,15)
    checkLength(password,6,20)
    checkEmail(email)
    checkPasswordsMatch(password,password2)
    checkRequired([username,email,password,password2])
})
