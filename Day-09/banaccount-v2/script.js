// alert('Testing bank account v2')
let myBalance = 5000;

document.getElementById("balance").innerHTML = myBalance;

function makeDeposit() {
  // alert('Checking deposit function')
  const amount = parseFloat(document.getElementById("depositAmount").value);
  if (amount > 0) {
    // alert("You are good to deposit");
     myBalance += amount
     document.getElementById('balance').innerHTML = myBalance   

     addTransaction('Debit',amount)


  } else {
    alert("Enter the valid amount for deposit");
  }

  // console.log(amount)
}

function makeWithdrawal() {
  const amount = parseFloat(document.getElementById("withdrawAmount").value);
  // console.log(amount)

  if (amount > 0 && amount <= myBalance) {
    // alert("You are good to withdraw");
    myBalance -= amount
    document.getElementById('balance').innerHTML = myBalance  
    addTransaction('Credit', amount) 
  } else {
    alert("Enter the valid amount for withdraw");
  }

  // alert('Checking withdraw function')
}



function addTransaction(type,amount)
{

const transactionList  = document.getElementById('transaction')
const myDate = new Date().toLocaleString();
const transactionRow = document.createElement('tr')

// transactionRow.innerHTML = "<tr><td>"+myDate+"</td><td>"+ type + "</td><td>"+ amount +"</td><td>"+myBalance +"</td></tr>"

//https://www.w3schools.com/js/js_string_templates.asp
//Interpolation ${...}
transactionRow.innerHTML =  `<tr>
                <td>${myDate}</td>
                <td>${type}</td>
                <td>${amount}</td>
                <td>${myBalance}</td>
            </tr>`
transactionList.appendChild(transactionRow)

}