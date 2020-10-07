/*
HackerLand University has the following grading policy:

 - Every student recieves a 'grade' in the inclusive range of 0 to 100
 - any 'grade' less than 40 is failing

 Sam is a professor and like to round students grades according to these rules:

    - If the difference between the grade and the next multiple of 5 is less than 3, 
    round the grade up to the next multiple of 5
    - if the value of the grade is less than 38, no rounding as the result is still failing

    examples:
    - grade = 84, round to 85 (85-84 is less than 3)
    - grade =  29 do not round (its less than 40)
    - grade = 57 do not round (60 -57 is 3 or higher)

Given the initial value of 'grade' for each of Sam's  'n' students. write code to automate the rounding process

function takes in an n number students & array of scores and returns an array of rounded or non rounded values

sample input and output
input 4, 73, 67, 38, 33
returns 75, 67, 40, 33
*/ 

function gradingStudents(grades) { 

    let roundedGrades = [];

    for (let i = 0; i < grades.length; i++){
        if(grades[i] < 38 ){
            roundedgrades.push(grades[i])
        }else if(grades[i])
    }

}