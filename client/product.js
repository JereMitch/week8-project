let email = document.getElementById('email')
let product = document.getElementById('review')
let subBtn = document.getElementById('submit-button')
let subBtn1 = document.getElementById('submit-btn')


let emailArr = []
let productArr = []

function emailStuff(e){
    e.preventDefault()
    emailArr.push(email.value)
    email.value = ''
    console.log("This is the email array: ", emailArr)
}

subBtn.addEventListener('click', emailStuff)

function productReview(e){
    e.preventDefault()
    productArr.push(product.value)
    product.value = ''
    console.log("This is the product array: ", productArr)
}

subBtn1.addEventListener('click', productReview)