/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

const students = [
    {
        id: 1,
        name: 'Mark',
        profession: 'Developer',
        skill: 'Javascript'
    },
    {
        id: 2,
        name: 'Maria',
        profession: 'Developer',
        skill: 'Django'
    },
    {
        id: 2,
        name: 'Barry',
        profession: 'Engineer',
        skill: 'Cisco'
    },
];

const studentsWithIds = students.map(student => [student.id, student.name]);
//console.log(studentsWithIds);

const studentOjb = students.map(student => ({id: student['id'], name: student['name']}));
//console.log(studentOjb);

const ages = [32, 26, 28];
//console.log(age);
const studObjwAge = students.map((student, age) => ({...student,age:ages[age]}));
console.log(studObjwAge);
