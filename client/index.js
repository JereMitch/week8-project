// const { default: axios } = require("axios")

let email = document.getElementById('email')
let subBtn = document.getElementById('submit-button')


let emailArr = []

function emailStuff(e){
    e.preventDefault()
    emailArr.push(email.value)
    email.value = ''
    console.log("This is the email array: ", emailArr)
}

subBtn.addEventListener('click', emailStuff)




// const baseUrl = `http://localhost:${port}/`

// axios.post(`${baseUrl}email/`, {
//     email: email.value,
// })
// .then(function (r) {
//     emailList.push(email.value)
// })
// .catch()


