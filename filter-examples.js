const students = [
    {
        id: 1,
        name: 'Mark',
        profession: 'Developer',
        skills: [
            {name:'Javascript', exp:1},
            {name:'html', exp:5},
            {name:'css', exp:3},
        ]
    },
    {
        id: 2,
        name: 'Maria',
        profession: 'Developer',
        skills: [
            {name:'Javascript', exp:0},
            {name:'html', exp:4},
            {name:'css', exp:2},
        ]
    },
    {
        id: 2,
        name: 'Barry',
        profession: 'Engineer',
        skills: [
            {name:'Javascript', exp:1},
            {name:'html', exp:1},
            {name:'css', exp:5},
            {name:'django', exp:6},
        ]
    },
];

const has5YearsExp = skill => skill.exp >=5;
const has6YearsExp = skill => skill.exp >=6;
const has7YearsExp = skill => skill.exp >=7;
const hasStrongSkills = students => {
    strongSkills = students.skills.filter(has5YearsExp);
    return strongSkills.length >0;
    //return strongSkills;
}

let expStudents = students.filter(hasStrongSkills);
//console.log(expStudents);

let expStudentsNameID = expStudents.map(student =>[student.name, student.id]);
console.log(expStudentsNameID);