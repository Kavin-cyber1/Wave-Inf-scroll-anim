const button = document.getElementById("tryButton");
const message = document.getElementById("message");
const resetButton = document.getElementById("resetButton");
let clicks=0;


function showCount(){
    if (clicks === 5) {
        message.textContent = "you reached five"
    } else {
        message.textContent="clicks:" + clicks;
    }
    
};
button.addEventListener("click", () =>{
    clicks = clicks + 1;
    showCount()
});
resetButton.addEventListener("click", () =>{
    clicks = 0;
    showCount();
});
showCount();
