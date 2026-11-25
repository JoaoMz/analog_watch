//Detectando Elementos

let p_seg = document.querySelector('.p_seg');
let p_min = document.querySelector('.p_min');
let p_hour = document.querySelector('.p_hour');
let digital = document.querySelector('.digital');
function updateClock(){
    let new_date = new Date();
    let seconds = new_date.getSeconds();
    let minutes = new_date.getMinutes();
    let hours = new_date.getHours();

    digital.innerHTML = `${fixZero(hours)}:${fixZero(minutes)}:${fixZero(seconds)}`;

    let sDeg = ((360 / 60) * seconds)-90;
    let mDeg = ((360 / 60) * minutes)-90;
    let hDeg = ((360 / 12) * hours)-90;

    p_seg.style.transform = `rotate(${sDeg}deg)`;
    p_min.style.transform = `rotate(${mDeg}deg)`;
    p_hour.style.transform = `rotate(${hDeg}deg)`;
}

function fixZero(time){
    return time < 10 ? `0${time}` : time; 

}

setInterval(updateClock, 1000);
updateHour();
