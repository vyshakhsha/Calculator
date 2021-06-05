
function dis(val)
{
  document.getElementById("screen").value+=val;
}

function clear_screen()
{
  document.getElementById("screen").value=""
}

function result()
{
  var question=document.getElementById("screen").value
  var res=eval(question)
  document.getElementById("screen").value=res
}













/*
function dis(value) {

  document.getElementById("screen").value = document.getElementById("screen").value + value;

}
var num1 =0;
function clear() {
  document.getElementById("screen").value = "";
}

function sum() {
   num1 = document.getElementById("screen").value;
	document.getElementById("screen").value = "";

}

function equals() {
	console.log("enter")
  var num2 = document.getElementById("screen").value;
	console.log(num2)
	console.log(num1)


	clear();
	var sum=parseInt(num1)+parseInt(num2);
	document.getElementById("screen").value =sum;

}
*/
