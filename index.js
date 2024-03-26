
let rukoEl= document.getElementById("ruko");
let taiyarEl= document.getElementById("taiyar");
let bhagEl= document.getElementById("bhag");
let redEl= document.getElementById("red");
let orangeEl= document.getElementById("orange");
let greenEl= document.getElementById("green");
let massageEl=document.getElementById("massage");



function stopbtn(){
    rukoEl.style.background="red"
    taiyarEl.style.background="navy"
    bhagEl.style.background="navy"
    redEl.style.background="red"
    orangeEl.style.background="grey"
    greenEl.style.background="grey"
    massageEl.textContent="Please Stop! ✋"


}


function readybtn(){
    rukoEl.style.background="navy"
    taiyarEl.style.background="orange"
    bhagEl.style.background="navy"
    redEl.style.background="grey"
    orangeEl.style.background="orange"
    greenEl.style.background="grey"
    massageEl.textContent="Be Ready! ✅"

    
}


function gobtn(){
    rukoEl.style.background="navy"
    taiyarEl.style.background="navy"
    bhagEl.style.background="green"
    redEl.style.background="grey"
    orangeEl.style.background="grey"
    greenEl.style.background="green"
    massageEl.textContent="Go!... ➡️";
    
}