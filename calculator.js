console.log("calculator.js");
 /*
  Create a function that multiplies two numbers
  passed in as arguments. Return the product.
*/

function multiplyNum (){
  let a = document.getElementById("numA").value;
  let b = document.getElementById("numB").value;
  let calcMulti = a * b;
  document.getElementById("calcAnswer").innerHTML = calcMulti;
}
 
function divNum (){
  let a = document.getElementById("numA").value;
  let b = document.getElementById("numB").value;
  let calcMulti = a / b;
  document.getElementById("calcAnswer").innerHTML = calcMulti;
}

function subNum (){
  let a = document.getElementById("numA").value;
  let b = document.getElementById("numB").value;
  let calcMulti = a - b;
  document.getElementById("calcAnswer").innerHTML = calcMulti;
}

function addNum (){
  let a = document.getElementById("numA").value;
  let b = document.getElementById("numB").value;
  let calcMulti = parseInt(a) + parseInt(b);
  document.getElementById("calcAnswer").innerHTML = calcMulti;
}

document.getElementById("btn-multi").addEventListener("click", multiplyNum);
document.getElementById("btn-divi").addEventListener("click", divNum);
document.getElementById("btn-sub").addEventListener("click", subNum);
document.getElementById("btn-add").addEventListener("click", addNum);

 


