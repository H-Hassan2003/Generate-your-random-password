const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const passwordContainerEl1 = document.getElementById("password-container1")
const passwordContainerEl2 = document.getElementById("password-container2")
const passwordLength = 15

function firstFunction() {
    let randomChar1 = Math.floor( Math.random() * characters.length)
    return characters[randomChar1]
}
function secondFunction() {
    let randomChar2 = Math.floor( Math.random() * characters.length)
    return characters[randomChar2]
}

function generatePassword() {
    let randomPassword1 = ""
    let randomPassword2 = ""
    for ( let i = 0; i < passwordLength; i++) {
        randomPassword1 += firstFunction()
    }
    for ( let i = 0; i < passwordLength; i++) {
        randomPassword2 += secondFunction()
    }
    passwordContainerEl1.textContent = randomPassword1
    passwordContainerEl2.textContent = randomPassword2
}
function resetPassword() {
    passwordContainerEl1.textContent = ""
    passwordContainerEl2.textContent = ""
}

