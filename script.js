const display = document.getElementById("result");
const displayUp = document.getElementById("afterOp");
var num1 = null;
var num2 = null;
var operator = null;
var upContent = null;
var downContent = null;
var decimalFlag = 0;


function clean() {
  
  num1 = null;
  num2 = null;
  operator = null;
  result = null;
  decimalFlag = 0;
  display.textContent = 0;
  displayUp.textContent= null;
}

function displayScreen(num){

  if(!(decimalFlag==1 && num ==".")){
    if(operator==null){
      if(num1==null && num!="."){
        num1=num;
      }
      else if(num=="."){
        num1=num1+num;
      }
      else{
        num1=num1+num;
      }
      
      displayUp.textContent = num1;
    }
    else{
      
      if(num2==null && num!="."){
        num2=num;
      }
      else if(num=="."){
        num2=num2+".";
      }
      else{
        num2=num2+num;
      }
      display.textContent = num2;
    }
  }
  if(num=="."){
    decimalFlag=1;
  }
}



function operatorClick(op) {
  if(num2==null){
    operator=op;
    displayUp.textContent = num1+operator;
  }
  else{
    handleEqualClick();
    operator=op;
    displayUp.textContent = num1+operator;
  }
}

function square() {

  
  if (displayUp.textContent !== null) {
    num1 = displayUp.textContent;
    num1 = parseFloat(num1)*parseFloat(num1);
    displayUp.textContent = num1;
  }
  
}

function handleEqualClick() {
  if (num1 !== null && num2 !== null && operator !== null) {
    
    switch (operator) {
      case "+":
        num1 = parseFloat(num1) + parseFloat(num2); 
        break;
      case "-":
        num1 = parseFloat(num1) - parseFloat(num2);
        break;
      case "*":
        num1 = parseFloat(num1) * parseFloat(num2);
        break;
      case "/":
        num1 = parseFloat(num1) / parseFloat(num2);
        break;
      case "%":
        num1 = parseFloat(num1) % parseFloat(num2);
        break;
      default:
        displayUp.textContent = "error";
    }
    displayUp.textContent = num1.toString();
    display.textContent = null;
    num2=null;
    operator=null;

    
  }
}

