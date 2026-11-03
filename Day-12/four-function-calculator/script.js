//alert('Hello from calculator')

function calculate()
{
   // alert("Click from a calculate button");
   //functions
   //if-else
   //Switch
   
   

   let num1 = document.getElementById('num1').value;
   let num2 = document.getElementById('num2').value;
   let method = document.getElementById('operator').value;

   //console.log(num1 , num2 , method);

   //Functions for add() subtract() multiply() divide()

  switch (method)
    {
        case "A" : 
        document.getElementById('result').innerHTML =  add(num1, num2); //Invoking add() function
        break;

        case "S": 
        document.getElementById('result').innerHTML =  subtract(num1, num2);
        break;
        
        case "M" : 
        document.getElementById('result').innerHTML =  multiply(num1, num2);
        break;
        
        case "D": 
               document.getElementById('result').innerHTML =  divide(num1, num2);
        break;
        
        
    }





   /*
//Switch Statement
    switch (method)
    {
        case "A" : 
        document.getElementById('result').innerHTML =   parseInt(num1)  +  parseInt(num2);
        break;

        case "S": 
        document.getElementById('result').innerHTML =   parseInt(num1)  -  parseInt(num2);
        
        break;
        
        case "M" : 
        document.getElementById('result').innerHTML =   parseInt(num1)  *  parseInt(num2);
        
        break;
        
        case "D": 
               document.getElementById('result').innerHTML =   (parseInt(num1)  /  parseInt(num2)).toFixed(2);

        break;
        
        
    }
*/



    //IF-Else
    /*
    if (method == "A")
    {
            document.getElementById('result').innerHTML =   parseInt(num1)  +  parseInt(num2);

    }
    else if (method == "M")
        {
            document.getElementById('result').innerHTML =   parseInt(num1)  *  parseInt(num2);

    }
    else if (method == "S")
        {
            document.getElementById('result').innerHTML =   parseInt(num1) -  parseInt(num2);

    }
    else if (method == "D")
        {
            document.getElementById('result').innerHTML =   (parseInt(num1)  /  parseInt(num2)).toFixed(2);

    }
        
            */

    }


//Declaring Function
    function add(a , b)
    {
        return parseInt(a) + parseInt(b);
    }

     function subtract(a , b)
    {
        return parseInt(a) - parseInt(b);
    }

     function multiply(a , b)
    {
        return parseInt(a) * parseInt(b);
    }

     function divide(a , b)
    {
        return (parseInt(a)  /  parseInt(b)).toFixed(2);

    }

