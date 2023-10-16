// window.onload = function(){
//     window.setInterval(function(){
//     let now = new Date();
//     let clock = document.getElementById("clock");
//     clock.innerHTML = now.toLocaleTimeString();
//     },1);
//   };
//    class DateTime {
//   constructor() {

//   }
//  }
//  new DateTime();
let inter1= document.querySelector('inter1');
let inter2= document.querySelector('inter2');
let inter3= document.querySelector('inter3');
let btnstart= document.querySelector('btn start minuts');
let btnstop= document.querySelector('btn stop');
let btnreset= document.querySelector('btn reset');

let  interval;
let minutes = 0;
let seconds=0;
let milseconds=0;
let starttimer=()=>{
  milseconds+=10;
}

btnstart.addEventListener('click',()=>{
  interval=setInterval(starttimer,10);
});