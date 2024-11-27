const form = document.getElementById("form")
const input = document.getElementById("input")
const btnAge = document.getElementById("btn-age")
const msgText = document.getElementById("msg-text")
const error = document.getElementById("error")
const bgChange = document.getElementById("bgChange")
const form2 = document.getElementById("form2")
const inputColor = document.getElementById("color")
const img = document.getElementById("img")
const loading = document.getElementById("loading")
const foto = document.querySelector(".foto")
const colorMsg = document.getElementById("color-msg")
const displayInfo = document.getElementById("displayInfo")


let isSubmitted = false

inputColor.addEventListener("mouseenter", ()=>{
        colorMsg.textContent = "Change background"
})

form.addEventListener("submit", (e)=>{
e.preventDefault()

if(isSubmitted){
    error.textContent ="-- Please enter your age --"
    displayInfo.textContent = ""
    img.style.display = "none"
    input.value = ""
    msgText.innerHTML = ""
   return isSubmitted = false
}


let inputValue = input.value
const date = new Date(inputValue).toDateString()

if(inputValue === ""){
    error.textContent = `-- Error...please choose your date --`
}

else {
    isSubmitted = true

    setTimeout(()=>{
        loading.style.display = "block"
        return error.textContent = null
    }, 1000)
    setTimeout(()=>{
        msgText.innerHTML = `You were born on :<span class='span'>${date}</span>`
        img.style.display = "block"
        loading.style.display = "none" 

    },4000)
    
}
displayInfo.textContent = ""
})


form2.addEventListener("submit",(e)=>{
e.preventDefault()
foto.style.display = "block"
let colorValue = inputColor.value
document.body.style.backgroundColor = colorValue 
colorMsg.style.display = "none"
displayInfo.textContent = "By Fassou Mathias Kolie"
})