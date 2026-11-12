//Array of Monkey Objects
fetch("https://raw.githubusercontent.com/jamesmontemagno/app-monkeys/master/MonkeysApp/monkeydata.json")
.then ((response) => response.json())
.then ((data) => {   

    console.log(data)
    const monkeyData = data
    getMonkeys(monkeyData)
})



function getMonkeys(monkeys)
{



let myHTML = "";


for(i= 0 ; i < monkeys.length; i++)
{
console.log(monkeys[i].Name)

myHTML += `
 <div class="card">

    <img src="${monkeys[i].Image}">

    <h2>${monkeys[i].Name}</h2>

    <p>${monkeys[i].Details}</p>

    <p>Location: ${monkeys[i].Location}</p>

    <p>Population: ${monkeys[i].Population}</p>

    <button>Details</button>

</div>
`



}

document.getElementById('demo').innerHTML = myHTML

}


getMonkeys()



