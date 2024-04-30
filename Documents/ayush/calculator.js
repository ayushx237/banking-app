window.onload = function()
{
    // add event listeners to buttons
    document.getElementById('add_btn').addEventListener('click',addition);
    document.getElementById('sub_btn').addEventListener('click',subtraction);
    document.getElementById('mul_btn').addEventListener('click',multiplication);
    document.getElementById('div_btn').addEventListener('click',division);

 

}

 

function addition()
{
    // console.log("I am in addition block");
    var x = document.getElementById('num1').value;
    var y = document.getElementById('num2').value;
    var z;
    z = parseFloat(x)+parseFloat(y);
    document.getElementById('result').innerHTML = z;
    
}

 

function subtraction()
{
    // console.log("I am in subtraction block");
    var x = document.getElementById('num1').value;
    var y = document.getElementById('num2').value;
    var z;
    z = parseFloat(x)-parseFloat(y);
    document.getElementById('result').innerHTML = z;
}

 

function multiplication()
{
    //console.log("I am in multiplication block");
    var x = document.getElementById('num1').value;
    var y = document.getElementById('num2').value;
    var z;
    z = parseFloat(x)*parseFloat(y);
    document.getElementById('result').innerHTML = z;
}

 

function division()
{
    //console.log("I am in division block");
    var x = document.getElementById('num1').value;
    var y = document.getElementById('num2').value;
    var z;
    z = parseFloat(x)/parseFloat(y);
    document.getElementById('result').innerHTML = z;
}