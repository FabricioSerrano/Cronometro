const minuteElement         = document.querySelector('#minutes')        
const secondsElement        = document.querySelector('#seconds')        
const milisecondsElement    = document.querySelector('#miliseconds')    
const startBtn              = document.querySelector('#startBtn')       
const pauseBtn              = document.querySelector('#pauseBtn')       
const resumeBtn             = document.querySelector('#resumeBtn')      
const resetBtn              = document.querySelector('#resetBtn')       

let interval;
let minutes = 0;
let seconds = 0;
let miliseconds = 0;
let isPaused = false;



startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseResumeTimer);
resumeBtn.addEventListener('click', pauseResumeTimer)
resetBtn.addEventListener('click', resetTimer);


function startTimer(){

    interval = setInterval(() =>{

        if (!isPaused){

            miliseconds += 10;

            if (miliseconds === 1000){
                seconds++;
                miliseconds = 0;
            }

            if (seconds === 60){
                minutes++;
                seconds = 0;
            }

            minuteElement.textContent = formatTime(minutes);
            secondsElement.textContent = formatTime(seconds);
            milisecondsElement.textContent = formatMiliseconds(miliseconds);

        }

    }, 10)

    startBtn.style.display = 'none';
    pauseBtn.style.display = 'block';
}


function pauseResumeTimer(){

    if (isPaused === false){
        isPaused = true;
        pauseBtn.style.display = 'none';
        resumeBtn.style.display = 'block';
    }else{
        isPaused = false;
        resumeBtn.style.display = 'none';
        pauseBtn.style.display = 'block';
    }

}


function resetTimer(){
    clearInterval(interval);
    miliseconds = 0;
    seconds = 0;
    minutes = 0;

    minuteElement.textContent = '00';
    secondsElement.textContent = '00';
    milisecondsElement.textContent = '000'

    isPaused = true;

    
    startBtn.style.display = 'block';
    pauseBtn.style.display = 'none';
    resumeBtn.style.display = 'none';
}

function formatTime(time){
    return time < 10 ? `0${time}` : time;
}



function formatMiliseconds(time){
    return time < 100 ? `${time}`.padStart(3, "0") : time;
}