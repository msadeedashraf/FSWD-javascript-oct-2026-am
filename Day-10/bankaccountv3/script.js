// alert("Testing the bank account V3")

let myBalance = 4000;
document.getElementById("balance").innerHTML = myBalance;


function makeTransaction()
{

// alert("test submit")

}





function toggleTransactionFields()
{
     let myTransactionType = document.getElementById("transactionType").value;
     
document.getElementById('amount').placeholder = 
   myTransactionType == 'd'
?  "Enter the deposit amount"
: "Enter the withdrawal amount"

}

function toggleCustomDescription() {
  let description = document.getElementById("transactionDescription").value;
  let customDestrictionField = document.getElementById("customDescription");

   description == "other"
    ? customDestrictionField.classList.remove("hidden")
    : customDestrictionField.classList.add("hidden");
}



