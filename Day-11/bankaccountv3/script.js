// alert("Testing the bank account V3")

let myBalance = 4000;
document.getElementById("balance").innerHTML = myBalance;

function makeTransaction() {
  // alert("test submit")
  let myTransactionType = document.getElementById("transactionType").value;
  let myAmount = parseFloat(document.getElementById("amount").value);
  let myDesc = document.getElementById("transactionDescription").value;

  if (myDesc == "other") {
    myDesc = document.getElementById("customDescription").value;
  }

  console.log(myDesc);

  let myTranClass = "debit";

  if (myTransactionType == "d") {
    deposit(myAmount);
    myTranClass = "credit";
  } else {
    withdraw(myAmount);
  }

  addTransaction(myTranClass, myDesc, myAmount);
}

function addTransaction(tranClass, desc, amount) {
  const transactionList = document.getElementById("transaction");
  const myDate = new Date().toLocaleString();
  const transactionRow = document.createElement("tr");

  transactionRow.innerHTML = `<tr>
                <td>${myDate}</td>                
                <td>${desc}</td>
                <td class = "${tranClass}"  >${amount}</td>
                <td>${myBalance}</td>
            </tr>`;
  transactionList.appendChild(transactionRow);
}

function deposit(amount) {
  myBalance += amount;
  document.getElementById("balance").innerHTML = myBalance;
}

function withdraw(amount) {
  myBalance -= amount;
  document.getElementById("balance").innerHTML = myBalance;
}

function toggleTransactionFields() {
  let myTransactionType = document.getElementById("transactionType").value;

  //      if (myTransactionType == 'd')
  //      {
  //       document.getElementById('amount').placeholder = "Enter the deposit amount"
  //      }
  //      else
  //      {
  // document.getElementById('amount').placeholder ="Enter the withdrawal amount"
  //      }
  document.getElementById("amount").placeholder =
    myTransactionType == "d"
      ? "Enter the deposit amount"
      : "Enter the withdrawal amount";
}

function toggleCustomDescription() {
  let description = document.getElementById("transactionDescription").value;
  let customDestrictionField = document.getElementById("customDescription");

  description == "other"
    ? customDestrictionField.classList.remove("hidden")
    : customDestrictionField.classList.add("hidden");
}
