
//Classic Function
/*
function add(num1, num2)
{
    result = num1 + num2
    return result
}
*/
//Arrow function
//const add = (num1,num2) => num1+ num2
//() => {}
//let myAddition = add(5,6)



fetch("data/job_listing.json")
.then ((response) => response.json())
.then ((data) => {   

    console.log("Getting data from the local json file")
    console.log(data)
    console.log("received data from local json file ")
    const jobData = data;

    getJobs(jobData)

})



function getJobs(myJobData)
{

 let myHTML =""



console.log("Recieved jobData inside getJobs " )
console.log(myJobData)



for(i=0;i<myJobData.length;i++)
{
  //  console.log(jobs[i])
    
    //console.log(jobs[i].company)
     myHTML += `<div class="jobs-listing">
                    <h3>${myJobData[i].title}</h3>
                  <p>${myJobData[i].company}</p>
                  <p>${myJobData[i].location}</p>
                  <p>
                    ${myJobData[i].jobdesc}
                  </p>
    
                </div>`
}
      //console.log(myHTML)
    document.getElementById('job').innerHTML = myHTML

}


getJobs()

