
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

    console.log(data)

})


















function getJobs()
{

 let myHTML =""

    //Array of Objects

    let jobs = [

    {
        "title":"Data Scientist",
        "company":"XYZ Corp.",
        "location":"San Francisco, CA",
        "jobdesc":"We are looking for a skilled and experienced Software Developer to join our team. The ideal candidate should have strong programming skills in Java and experience with web development technologies such as HTML, CSS, and JavaScript. Familiarity with databases and version control systems is a plus."
    
    },
    {
        "title":"Software Developer",
        "company":"ABC Inc.",
        "location":"New York, NY",
        "jobdesc":"We are looking for a skilled and experienced Software Developer to join our team. The ideal candidate should have strong programming skills in Java and experience with web development technologies such as HTML, CSS, and JavaScript. Familiarity with databases and version control systems is a plus."
    },
    {
        "title":"Full Stack Developer",
        "company":"TecZila",
        "location":"Mississauga, ON",
        "jobdesc":"We are looking for a skilled and experienced Software Developer to join our team. The ideal candidate should have strong programming skills in Java and experience with web development technologies such as HTML, CSS, and JavaScript. Familiarity with databases and version control systems is a plus."
    
    },
    {
        "title":"Full Stack Developer",
        "company":"TecZila",
        "location":"Mississauga, ON",
        "jobdesc":"We are looking for a skilled and experienced Software Developer to join our team. The ideal candidate should have strong programming skills in Java and experience with web development technologies such as HTML, CSS, and JavaScript. Familiarity with databases and version control systems is a plus."
    
    },
    {
        "title":"Software Developer",
        "company":"ABC Inc.",
        "location":"New York, NY",
        "jobdesc":"We are looking for a skilled and experienced Software Developer to join our team. The ideal candidate should have strong programming skills in Java and experience with web development technologies such as HTML, CSS, and JavaScript. Familiarity with databases and version control systems is a plus."
    }

    ]

//console.log(jobs.length)


for(i=0;i<jobs.length;i++)
{
  //  console.log(jobs[i])
    
    //console.log(jobs[i].company)
     myHTML += `<div class="jobs-listing">
                    <h3>${jobs[i].title}</h3>
                  <p>${jobs[i].company}</p>
                  <p>${jobs[i].location}</p>
                  <p>
                    ${jobs[i].jobdesc}
                  </p>
    
                </div>`
}
      //console.log(myHTML)
    document.getElementById('job').innerHTML = myHTML

}


getJobs()

