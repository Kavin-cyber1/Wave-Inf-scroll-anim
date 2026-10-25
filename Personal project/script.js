const button = document.getElementById("tryButton");
const message = document.getElementById("message");
let clicks=0;

button.addEventListener("click", ()=> {
    clicks= clicks+1;
    if (clicks >= 5) {
        message.textContent = "you reached five"
    } else {
        message.textContent="clicks:" + clicks;
    }
    
});
