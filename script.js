const timer = document.getElementById('timerWatch');

var hr = 0;
var min = 0;
var sec = 0;
var stop_Timer = true;
// to stop the watch
function stopTimer(){    
    if(stop_Timer == false) {
        stop_Timer = true;
        
    }
}
// to start the watch

function startTimer() {
    if(stop_Timer == true) {
        stop_Timer = false;
        timerCycle();
    }
}
// timer function 

function timerCycle() {
    if(stop_Timer == false) {
        sec = parseInt(sec);
        min = parseInt(min);
        hr = parseInt(hr);

        sec = sec + 1;

        if(sec == 60) {
            min = min + 1;
            sec = 0; 
        }

        if(min == 60) {
            hr = hr+1;
            min = 0;
            sec=0
        }

        if(sec < 10) {
            sec = "0" + sec;
        }

        if(min < 10) {
            min = "0" + min;
        }

        if(hr < 10) {
            hr = "0" + hr;
        }
        

        timer.innerHTML = hr + ":" + min + ":" + sec;
        // recall function
        setTimeout("timerCycle()", 1000);
    }
}
    function resetTimer() {
        timer.innerHTML = "00:00:00";
        stop_Timer = true;
        
        hr=0;
        min=0;
        sec=0;
    
}