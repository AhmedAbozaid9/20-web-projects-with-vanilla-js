const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')

function showSuccess(input){
    const formControl = input.parentElement
     formControl.classList.add('success')
}
function showError(input){
    const formControl = input.parentElement
     formControl.classList.add('error')
}

form.addEventListener('submit',e => {
    e.preventDefault()
})
