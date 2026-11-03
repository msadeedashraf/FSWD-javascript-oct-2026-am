
const student = {
fname : 'Faith',
program : 'Fullstack Web Developement',
email : 'abc@gmail.com',
gpa : 3.5
}

document.getElementById('demo').innerHTML = `${student.fname} has ${student.gpa} in ${student.program} `

console.log(student.fname)
console.log(student.phone)


student.fname = "Clarke"

console.log(student.fname)


