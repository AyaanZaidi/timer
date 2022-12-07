var Input = document.getElementById("timerInput")
var intervel;
var countimer;

function start(){
    intervel = setInterval(timer , 1000)
    document.getElementById("count").innerHTML = Input.value;
    countimer = Input.value
    Input.value = ""
}

function timer(){
    countimer--
    document.getElementById("count").innerHTML = countimer
    if(countimer == 0){
        stopbutton()
    }
}

function stopbutton(){
    clearInterval(intervel)
}

function clearbtn(){
    stopbutton()
    document.getElementById("count").innerHTML = "0"
}

