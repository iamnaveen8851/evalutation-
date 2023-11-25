

function StudentDetails(name, roll_no, classes , section, marks)
{
    this.studentName = name
    this.roll_no = roll_no;
    this.class = classes
    this.section = section
    this.marks_of_5_subjects = marks


    this.printTop3Subjects = function(){
        let subjectArr = Object.keys(this.marks_of_5_subjects);
        
        subjectArr.sort((a, b) => this.marks_of_5_subjects[b] - this.marks_of_5_subjects[a]);


       let  top3SubjectsNames = subjectArr.slice(0, 3);

       console.log(`Top 3 Subjects: ${top3SubjectsNames.join(', ')}`);
    }
}


let student1 = new StudentDetails('suraj', 1, 'VI', 'A', {
    
        science: 72,
        maths: 75,
        social_science: 79,
        english: 80,
        hindi: 67
    
} )

console.log(student1)

student1.printTop3Subjects()



