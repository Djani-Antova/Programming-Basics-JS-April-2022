function exam(input) {
    let index = 0;
    let students = Number(input[index]);
    index++;

    
    let gradeMore5 = 0;
    let grade4To5 = 0;
    let grade3To4 = 0;
    let gardeLess3 = 0;
    let allGrades = 0;
    

for(let i = 1 ; i <= students; i++) {
    let currentGrade = Number(input[index]);
    index++;
    if (currentGrade >= 5) {
        gradeMore5++;
    } else if (currentGrade >= 4 && currentGrade <= 4.99) {
        grade4To5++;
    } else if (currentGrade >= 3 && currentGrade <= 3.99) {
        grade3To4++;
    } else if (currentGrade < 3) {
        gardeLess3++;
    }
    allGrades+=currentGrade;
}


let gradeMore5InPercent = gradeMore5 * 100 / students;
let grade4To5InPercent = grade4To5 * 100 /students;
let grade3To4InPercent = grade3To4 * 100 / students;
let gardeLess3InPerceny = gardeLess3 * 100 / students;
let averGrade = allGrades / students;

console.log(`Top students: ${gradeMore5InPercent.toFixed(2)}%`);
console.log(`Between 4.00 and 4.99: ${grade4To5InPercent.toFixed(2)}%`);
console.log(`Between 3.00 and 3.99: ${grade3To4InPercent.toFixed(2)}%`);
console.log(`Fail: ${gardeLess3InPerceny.toFixed(2)}%`);
console.log(`Average: ${averGrade.toFixed(2)}`);
    
}

exam (["10",
"3.00",
"2.99",
"5.68",
"3.01",
"4",
"4",
"6.00",
"4.50",
"2.44",
"5"])
