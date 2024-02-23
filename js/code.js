function sum(){
	let n1 = document.getElementById("num1").value;
	let n2 = document.getElementById("num2").value;
	let resp = parseFloat(n1) + parseFloat(n2);
	document.getElementById("res").innerHTML = resp; 
}

function sub(){	
	let n1 = document.getElementById("num1").value;
	let n2 = document.getElementById("num2").value;
	let resp = parseFloat(n1) - parseFloat(n2);
	document.getElementById("res").innerHTML = resp; 
}

function mult(){	
	let n1 = document.getElementById("num1").value;
	let n2 = document.getElementById("num2").value;
	let resp = parseFloat(n1) * parseFloat(n2);
	document.getElementById("res").innerHTML = resp; 
}

function div(){	
	let n1 = document.getElementById("num1").value;
	let n2 = document.getElementById("num2").value;
	let resp = parseFloat(n1) / parseFloat(n2);
	document.getElementById("res").innerHTML = resp; 
}

function changeColor(){
	let cg = document.getElementById("texto");
	cg.style.color = "blue";		
}

function originalColor(){
	let og = document.getElementById("texto");
	og.style.color = "black";	
}

function bigImg(x) {
  x.style.height = "500px";
  x.style.width = "500px";
}

function normalImg(x) {
  x.style.height = "150px";
  x.style.width = "150px";
}