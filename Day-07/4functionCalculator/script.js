// alert('Test my javascript')

function calculate() {
  // alert('Hello from calculate function')

  var num1 = document.getElementById("num1").value;
//   console.log(num1);
  var num2 = document.getElementById("num2").value;
//   console.log(num2);
  var opt = document.getElementById("operator").value;
//   console.log(opt);

  if (opt == "A") {
    result = parseFloat(num1) + parseFloat(num2);
    document.getElementById("result").innerHTML = result;
  } else if (opt == "M") {
    result = parseFloat(num1) * parseFloat(num2);
    document.getElementById("result").innerHTML = result;
  } else if (opt == "D") {
    result = parseFloat(num1) / parseFloat(num2);
    document.getElementById("result").innerHTML = result;
  } else if (opt == "S") {
    result = parseFloat(num1) - parseFloat(num2);
    document.getElementById("result").innerHTML = result;
  }
}
