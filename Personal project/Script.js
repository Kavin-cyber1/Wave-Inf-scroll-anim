const button = document.getElementById("tryButton");
const message = document.getElementById("message");
let clicks=0;

button.addEventListener("click", ()=> {
    clicks= clicks+1;
    message.textContent="clicks:" + clicks;
});
