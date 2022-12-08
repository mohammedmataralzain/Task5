// -- stopwatch --

let stopwatch = document.getElementById("stopwatch");
let timer = document.getElementById("timer");
let output = document.querySelector(".output");
let btn =  document.querySelector(".btn");
let btnTimer =  document.querySelector(".btnTimer");

let outputStopwatch = document.querySelector(".output-stopwatch")
let outputTimer = document.querySelector(".output-timer")

let outputMinutes = document.getElementById("minutes")
let outputSeconds = document.getElementById("seconds")
let outputTens = document.getElementById("tens")
let btnStart = document.getElementById("btn-start")
let btnStop = document.getElementById("btn-stop")
let btnReset = document.getElementById("btn-reset")
let seconds = 00;
let tens = 00;
let minutes = 00;
let Interval2;
//-----------------------------------------------------

//-- Timer -- 

let startTimer = document.getElementById("btn-startTimer")
let stopTimer = document.getElementById("btn-stopTimer")
let resetTimer = document.getElementById("btn-resetTimer")
let secondsTimers = document.getElementById("secondsTimers")
let minutesTimer = document.getElementById("minutesTimer")
let hoursTimer = document.getElementById("hoursTimer")


//-------------------------------------------------------------
// -- stopwatch --

stopwatch.addEventListener("click", () => {
    timer.style.borderBottomColor = "#80868b";
    stopwatch.style.borderBottomColor = "#8ab4f8";
    outputTimer.style.display= "none";    
    outputStopwatch.style.display= "block";    
    btn.style.display= "flex";    
    btn.style.justifyContent= "end";  
    btnTimer.style.display= "none";    

})
timer.addEventListener("click", () => {
    stopwatch.style.borderBottomColor = "#80868b";
    timer.style.borderBottomColor = "#8ab4f8";
    outputStopwatch.style.display= "none";    
    btn.style.display= "none";    
    outputTimer.style.display= "block";
    btnTimer.style.display = "flex"; 
    btnTimer.style.justifyContent= "end";    
})

btnStart.addEventListener("click",()=> {
    clearInterval(Interval2)
    Interval2 =  setInterval(startTime,10)

})
btnStop.addEventListener("click",()=> {
    clearInterval(Interval2)
})
btnReset.addEventListener("click",()=> {
    clearInterval(Interval2);
     seconds = "00";
     tens = "00";
     minutes = "00";
     outputSeconds.innerHTML = seconds;
     outputTens.innerHTML = tens;
     outputMinutes.innerHTML = minutes;
})


function startTime () {
    tens++;
    if (tens <= 9 ) {
        outputTens.innerHTML = "0" + tens;
    }
    if (tens > 9 ) {
        outputTens.innerHTML =  tens;
    }
    if (tens > 99 ) {
        seconds++;
        outputSeconds.innerHTML =  "0" + seconds;
        tens = 0;
        outputTens.innerHTML =  "0" + tens;
    }
    if (seconds > 9 ) {
        outputSeconds.innerHTML =  seconds;
    }
    if (seconds == 60 ) {
        minutes++;
        outputMinutes.innerHTML = "0" + minutes ;
        tens = 0;
        seconds = 0;
        outputTens.innerHTML =  "0" + tens;
    }
    if (minutes > 9) {
        outputMinutes.innerHTML = minutes ;
    }
}
// -------------------------------------------------------------
// -- Timer 

let starTimer = null;

function timer2() {
    if (secondsTimers.value  == 0 && minutesTimer.value == 0 && hoursTimer == 0) {
        secondsTimers.value = "00";
        minutesTimer.value = "00";
        hoursTimer.value = "00";
    }
    else if(secondsTimers.value != 0) {
    secondsTimers.value--;
    }
    else if(minutesTimer.value != 0 && secondsTimers.value == 0) {
        secondsTimers.value = 59;
        minutesTimer.value--;
    }
    else if(hoursTimer.value != 0 && minutesTimer.value == 0) {
        minutesTimer.value = 60;
        hoursTimer.value--;
    }
    return;
}

function stopTimer2() {
    clearInterval(starTimer)
}
startTimer.addEventListener("click",function () {
    function startInterval(){
        startTimer = setInterval(function () {
            timer2();
        },1000)
    }
    startInterval()
})

resetTimer.addEventListener("click",()=>{
    secondsTimers.value = "00";
    minutesTimer.value = "00";
    hoursTimer.value = "00";
    stopTimer2 ();
})

stopTimer.addEventListener("click",()=> {
    clearInterval(startTimer)
})