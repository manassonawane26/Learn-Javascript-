let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2
resultEl=document.getElementById("result-el")

function add(){
	resultEl.textContent=("Addition = "+ (num1+num2))
}

function subtract(){
	resultEl.textContent=("Subtraction = "+ (num1-num2))
}

function multiply(){
	resultEl.textContent=("Multiplication = "+ (num1*num2))
}

function divide(){
	resultEl.textContent=("Division = "+ (num1/num2))
}