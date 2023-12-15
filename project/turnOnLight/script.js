let moontime=document.querySelector('#moontime');
let suntime=document.querySelector('#suntime');
let moon=document.querySelector('#moon');
let sun=document.querySelector('#sun');
let body=document.querySelector('#body');

suntime.addEventListener('click', ()=>{
    sun.style.transform="scale(1)";
    moon.style.transform="scale(0)";
    body.style.background="white";
    body.style.transition="0.5s all ease-in-out";
})

moontime.addEventListener('click', ()=>{
    moon.style.transform="scale(1)";
    sun.style.transform="scale(0)";
    body.style.background="#1d1d1d";
})