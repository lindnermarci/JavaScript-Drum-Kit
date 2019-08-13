const keys = document.querySelectorAll(".key")

function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    if(!audio){
        return
    }
    audio.currentTime = 0; //rewind to the start
    audio.play();
    key.classList.add("playing")
    setTimeout(function(){
    }, 0.07)
}

function removeTransition(e){
    if(e.propertyName !== 'transform') return;
    this.classList.remove("playing")
}

keys.forEach(key => {
    key.addEventListener('transitionend', removeTransition)
})

document.addEventListener("keydown", playSound);