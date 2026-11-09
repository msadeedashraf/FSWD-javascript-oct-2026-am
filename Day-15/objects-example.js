const student = {

    id: 101,
    name:"Faith",
    course:"Javascript",
    marks : { 
                assignment: 40,
                midterm : 50,
                finalExam: 40
            },
    calCulateAverage: function()
                {
                    return (this.marks.assignment + this.marks.midterm + this.marks.finalExam )/3;
                },
    getResult : function ()
                {
                    return this.calCulateAverage() >= 50 
                    ? "Pass"
                    : "Fail"
                }
    
}

console.log(student.name)
console.log(student.marks)
console.log(student.marks.assignment)
console.log(student.marks.midterm)
console.log(student.marks.finalExam)
console.log(student.calCulateAverage())
console.log(student.getResult())


