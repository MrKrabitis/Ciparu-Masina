let number = 0;
let numberSelector = document.getElementById("number");

function increase() {
   number++;
   numberSelector.innerText = number;
   color();
}

function down() {
    number--;
    numberSelector.innerText = number;
color();
 }

 function zero() {
    number = 0;
    numberSelector.innerText = number;
    color();
 }

 function color() {
    if(number>0){
        numberSelector.style.color = "green"
    }
    else if(number<0){
        numberSelector.style.color = "red"
    }
    else {
        numberSelector.style.color = "black"
    }
 }