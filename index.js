const box1= document.querySelector(".boxOne");
const box2= document.querySelector(".boxTwo");
const box3= document.querySelector(".boxThree");
const chkButton= document.querySelector(".checkButton");
const result= document.querySelector(".resultBox");

function profitOrLoss(){
var cp=box1.value*box2.value;
var sp=box3.value*box2.value;
var profit = box3.value*box2.value-box1.value*box2.value;
var loss= box1.value*box2.value-box3.value*box2.value;
var profitPercentage=  box3.value*100/box1.value  - 100     ;  
var lossPercentage=  100 - box3.value*100/box1.value ;                
if(sp>cp){

result.innerText="YAY! your profit is Rs "+ profit + " and your profit percentage is "+profitPercentage+"%";
}
else if(sp===cp){
  result.innerText="Should have gone for the option of FD";
}
else {
    result.innerText="You lost Rs"+loss  + " and your loss percentage is "+lossPercentage+"%";
  };  
}



chkButton.addEventListener("click",profitOrLoss)