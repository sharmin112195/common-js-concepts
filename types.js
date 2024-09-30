// primitive type
const a = 5;
const b = 'He is a good student';
// non-primitive type
const age = [45, 65, 40];
const student = {id: 23, class: 7}
// console.log(typeof a, typeof b, typeof age, typeof student);

let x = 12;
let y = x;
console.log(x, y);
y = 22;
console.log(x,y);
// console.log(x);

let p = {job: 'web Developer'}
let q = p;
// q = {job: 'backend end'}
q.job ='front end developer';
console.log(p);
console.log(p, q);
