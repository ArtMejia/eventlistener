let messageElement = document.getElementById('message'); // linking variable to html element
let counterElement = document.getElementById('counter'); // linking variable to html element
const button = document.getElementById("btn")

messageElement.addEventListener('input', function (e) {
    let target = e.target; // 
    let currentLength = target.value.length;
    counterElement.innerHTML = currentLength;
    }
)

function alertButton() {
    alert("This button does nothing")
}

function winnerButton() {
    alert('Congratulations!')
}

button.addEventListener("click", alertButton, false)
button.addEventListener('click', winnerButton, false )
// messageElement.addEventListener('keypress', countCharacter)

// function countCharacter() {
//     let currentLength = messageElement.value.length;
//     counterElement.innerHTML += `${currentLength}`
// }