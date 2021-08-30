const nums = [0,1,2,3,4];
let sum = nums.reduce((acc, curr) => {
    console.log(
        "accumulator:", acc,
        "current value:", curr,
        "total:", acc + curr
    );
    return acc + curr;
},0);
let sums2 = nums.reduce((acc, curr) => acc + curr, 10);
console.log(sums2);

const students = [
    {
        name: 'Mark',
        profession: 'Developer',
        yrsExperience: 7
    },
    {
        name: 'Maria',
        profession: 'Developer',
        yrsExperience: 2
    },
    {
        name: 'Barry',
        profession: 'Engineer',
        yrsExperience: 4
    },
];
//totalling a specific object property
theTotal = students.reduce((acc,curr) => acc + curr.yrsExperience,0);
console.log(theTotal);

//grouping by a property and totalling the group:
//decide first what the output result should look like:
// { Developer: 9, Engineer: 4 }
//create with 'longer-form' arrow function because this will be more than one line 
//and will need a return statement
//note that the first set of {} signifies the bountary of the call-back function and  
//that the second set it setting the initial value as an empty object {}
let experienceByProfession = students.reduce((acc, curr) => {
    let key = curr.profession;
    //first time we get this key we will add it into the return object
    //if it comes up again, we will not add it
    if(!acc[key]){
        acc[key] = curr.yrsExperience;
    }else{
        acc[key] += curr.yrsExperience;
    }
    return acc;
},{});
console.log(experienceByProfession);

//grouping by profession and listing an array of employees per group:
//{ Developer: ['Mark', 'Maria'], Engineer: ['Barry']} <--- want this to be the result

let professionArray = students.reduce((acc, curr) => {

    let key = curr.profession;

    if(!acc[key]){
        acc[key] = [curr.name]
    }else{
        console.log("before:", acc[key]);
        acc[key].push(curr.name);
        console.log("after:", acc[key]);
    }

    return acc;

},{});
console.log(professionArray);

//return student name with highest maths score
let students2 = [
    {
        name: 'John',
        subjects: ['maths', 'english', 'cad'],
        teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
        results: {maths: 90, english: 75, cad: 87},
    },
    {
        name: 'Emily',
        subjects: ['science', 'english', 'art'],
        teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
        results: {science: 93, english: 73, art: 95},
    },
    {
        name: 'Adam',
        subjects: ['science', 'maths', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
        results: {science: 93, english: 88, maths: 97, art: 95},
    },
    {
        name: 'Fran',
        subjects: ['science', 'english', 'art'],
        teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
        results: {science: 93, english: 87, art: 95},
    }
];
//in this example, the inital acc is an object with keys
const biggest = students2.reduce((acc, cur) => {
    acc = acc.max > cur.results.english ? acc: {name:cur.name, max:cur.results.english};
    return acc;
    }, {name: '', max: 0});
console.log(biggest);

/* Using destructuring 
const biggest = students.reduce(({max, name}, {name, results:{english}}) => {
    if(max < english) {
        acc = {name:name, max: english};
    }
    return acc;
    }, {name: '', max: 0});
    
console.log(biggest);
*/


