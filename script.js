var pw1 = document.getElementById("psw1");  
var pw2 = document.getElementById("psw2");
pw2.addEventListener('focusout', checkPassword)
pw1.addEventListener('focusout', checkPassword)

console.log(pw2)

function checkPassword() {
    console.log(pw1.value)
    if (pw1.value == pw2.value)
    pw1.setAttribute('style', 'border: #11635d solid 2px;'),
    pw2.setAttribute('style', 'border: #11635d solid 2px;')

    else
    pw1.setAttribute('style', 'border: orange solid 2px'),
    pw2.setAttribute('style', 'border: solid orange 2px')

}
console.log('hi')

pw2.oninput