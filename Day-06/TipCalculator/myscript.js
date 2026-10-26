// alert("Testing my javascript")


function tipCalculator()
{
    // alert('Testing my Calculate Button')

    var myBillAmount = document.getElementById('bill').value;
    //console.log(myBillAmount)
    var myTip =  document.getElementById('tip').value;
    //console.log(myTip)
    var myTotalAmount = myBillAmount * (1 +myTip/100)

    document.getElementById('total').innerHTML = myTotalAmount.toFixed(2)


}