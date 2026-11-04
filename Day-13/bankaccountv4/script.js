// alert("Testing the bank account V3")

let myBalance = 4000;
document.getElementById("balance").innerHTML = myBalance;

function makeTransaction() {
  // alert("test submit")
  let myTransactionType = document.getElementById("transactionType").value;
  let myAmount = parseFloat(document.getElementById("amount")?.value) || 0;
  let myDesc = document.getElementById("transactionDescription").value;

  if (myDesc == "other") {
    myDesc = document.getElementById("customDescription").value;
  }

  
  if(Number.isNaN(myAmount) || myAmount <= 0)
  {
    myAmount = 0
  }
  console.log(myDesc);

  let myTranClass = "debit";

  if (myTransactionType == "d") {
    deposit(myAmount);
    myTranClass = "credit";
  } else {
    withdraw(myAmount);
  }

  if (myAmount != 0)
  {
    addTransaction(myTranClass, myDesc, myAmount);
  }
  else
  {
    alert('Enter the valid amount')
  }
  
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


// https://www.w3schools.com/js/js_arrow_function.asp

function handleFileUpload(event)
{
    // alert('Testing File upload')

    const file = event.target.files[0];

    if(!file)
    {
        showMessage("No file selected. Please choose a file.", "error");
        return;
    }

    const isCSV = file.type == 'text/csv' || file.name.toLowerCase().endswith(".csv")

    if (!isCSV)
    {
        showMessage("Unsupported file type. PLease select a csv file", "error");
        return;
    }

    const reader = new FileReader();
    reader.onload = (e) =>  {

      const rows = e.target.result.split("\n");
      rows.forEach( 

        (row) => {  

          //Array Destructuring
          //https://www.w3schools.com/js/js_destructuring.asp
          const [date, description, type, amount] = row.split(',')
          const amountNum = parseFloat(amount)
          if ( type.trim() == 'Debit' && amountNum <= myBalance )
          {

            withdraw(amountNum)
            addTransaction('Debit', description.trim(), amountNum)

          }
          else if (type.trim() == 'Credit')
          {
            deposit(amountNum)
            addTransaction('Credit', description.trim(), amountNum)

          }

        }



        )


    }

reader.onerror = () => {
    showMessage("Error reading the file. Please try again.", "error");
  };
  reader.readAsText(file);


    // reader.onload = 

}