const playButton=document.getElementsByClassName("start")[0];
const lapButton=document.getElementsByClassName("lap")[0];
const resetButton=document.getElementsByClassName("reset")[0];
const clearButton=document.getElementsByClassName("lap-clear-button")[0];
const minute=document.getElementsByClassName("minute")[0];
const second=document.getElementsByClassName("sec")[0];
const centiSecond=document.getElementsByClassName("msec")[0];
const laps=document.getElementsByClassName("laps")[0];
const bg=document.getElementsByClassName("outercirc")[0];

let isPlay=false;
let secCounter=0;
let min;
let sec;
let centiSec;
let centiCounter =0;
let minCounter =0;
let lapItem=0;
let isReset=false;

const toggleButton = () => {

    lapButton.classList.remove("hidden");
    resetButton.classList.remove("hidden");
}

const play = () =>{
    if(!isPlay&&!isReset){
        playButton.innerHTML='Pause';
        bg.classList.add("animation-bg");
        min = setInterval(() => {
            minute.innerHTML=`${++minCounter} :`;
        },60*1000);
        sec=setInterval(() => {
            if(secCounter==60){
                secCounter=0;
            }
            second.innerHTML=` ${++secCounter} :`;
        },1000);
        centiSec=setInterval(() => {
            if(centiCounter==100){
                centiCounter=0;
            }
            centiSecond.innerHTML=`&nbsp;${++centiCounter}`; // corrected here
        },100);
        isPlay=true;
        isReset=true;
    }
    
        
        else{
            playButton.innerHTML='Start';
            clearInterval(min);
            clearInterval(sec);
            clearInterval(centiSec);
            isPlay=false;
            isReset=false;
            bg.classList.remove("animation-bg");
        }
        toggleButton();
}
const reset = () => {
    /*  isReset = true;
        play();
        lapButton.classList.add("hidden");
        resetButton.classList.add("hidden");
        second.innerHTML = '&nbsp;0 :';
        centiSec.innerHTML = '&nbsp;0';
        minute.innerHTML='0 : ';
    */
        playButton.innerHTML = 'Play';
        clearInterval(min);
        clearInterval(sec);
        clearInterval(centiSec);
        isPlay = false;
        isReset = false;
        bg.classList.remove("animation-bg")
    
        lapButton.classList.add("hidden");
        resetButton.classList.add("hidden");
        
        // reset the minCounter, secCounter, and centiCounter to zero.
        minCounter = 0;
        secCounter = 0;
        centiCounter = 0;
        
        /*reset the innerHTML of the minute, 
        second, and centiSecond elements to show zero values. */
        minute.innerHTML = '0 :';
        second.innerHTML = '&nbsp 0 :';
        centiSecond.innerHTML = '&nbsp; 0';
        
        
        // also hide the lap-clear-button since there are no laps to clear.
        clearButton.classList.remove("hidden");
        
        // clear the laps and set lapItem back to zero.
        laps.innerHTML = '';
        lapItem = 0;
    }
const lap = () => {
    const li = document.createElement("li");
    const number = document.createElement("span");
    const timestamp = document.createElement("span");
    li.setAttribute("class", "lap-item");
    number.setAttribute("class", "number");
    timestamp.setAttribute("class", "time-stamp");

    number.innerText = `#${++lapItem}`; // corrected here
    timestamp.innerHTML = `${minCounter} : ${secCounter} : ${centiCounter}`; // corrected here
    li.append(number, timestamp);
    laps.append(li);

    clearButton.classList.remove("hidden");
}

const clearALL = () => {
    laps.innerHTML ='';
    laps.append(clearButton);
    clearButton.classList.add("hidden");
    lapItem=0;
}
playButton.addEventListener("click",play);
resetButton.addEventListener("click",reset);
lapButton.addEventListener("click",lap);
clearButton.addEventListener("click",clearALL);


