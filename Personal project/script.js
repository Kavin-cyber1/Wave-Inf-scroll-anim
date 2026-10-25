const button = document.getElementById("tryButton");
const message = document.getElementById("message");
const resetButton = document.getElementById("resetButton");
let clicks=0;


function showCount(){
    if (clicks === 10) {
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
const pauseButton = document.getElementById("pauseButton");
const track = document.querySelector(".track");
let isPaused = false;

pauseButton.addEventListener("click",() => {
 isPaused =!isPaused;
if (isPaused) {
    track.style.animationPlayState = "paused";
    pauseButton.textContent = "resume cards";
   
} else {
    track.style.animationPlayState = "running";
    pauseButton.textContent = "pause cards";
    
}
});
