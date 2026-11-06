const student = {

    id: 101,
    name:"Faith",
    course:"Javascript",
    marks : { 
                assignment: 80,
                midterm : 75,
                finalExam: 90
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

