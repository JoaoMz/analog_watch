//Detectando Elementos

let p_seg = document.querySelector('.p_seg');
let p_min = document.querySelector('.p_min');
let p_hour = document.querySelector('.p_hour');
let digital = document.querySelector('.digital');
function UpdateHour(){
    let new_date = new Date();
    let seconds = new_date.getSeconds();
    let minutes = new_date.getMinutes();
    let hours = new_date.getHours();

    digital.innerHTML = `${fixZero(hours)}:${fixZero(minutes)}:${fixZero(seconds)}`;
}

function fixZero(time){
    return time < 10 ? `0${time}` : time; 

}

setInterval(UpdateHour, 1000);