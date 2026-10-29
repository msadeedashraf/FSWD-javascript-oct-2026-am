// alert("Testing bank account")

let myBalance = 2000

document.getElementById('balance').innerHTML = myBalance

function makeDeposit()
{
// alert("Testing Deposit")

let dAmount = parseFloat(document.getElementById('depositAmount').value);

//myBalance = myBalance + dAmount
myBalance += dAmount

document.getElementById('balance').innerHTML = myBalance


const transactionList  = document.getElementById('transaction')
const transactionItem = document.createElement('li')

transactionItem.textContent = 'Credit : $' + dAmount +' | Balance : $' + myBalance;

transactionList.appendChild(transactionItem)

// console.log(dAmount,typeof(dAmount) )



}

function makeWithdraw()
{
// alert("Testing Withdraw")

let wAmount = parseFloat(document.getElementById('withdrawAmount').value);
console.log(wAmount)

//myBalance = myBalance-wAmount
myBalance -= wAmount

document.getElementById('balance').innerHTML = myBalance


const transactionList  = document.getElementById('transaction')
const transactionItem = document.createElement('li')

transactionItem.textContent = 'Debit : $' + wAmount +' | Balance : $' + myBalance;

transactionList.appendChild(transactionItem)


}