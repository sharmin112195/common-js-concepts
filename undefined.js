/**
 * *******----- 8 ways to undefined --------****
 * **/
// 1. Variable that is not initialized will give undefined .
let first;
console.log(first);

// 2.function with no return
function second(a, b){
    const total = a + b;
}
const result = second();
console.log(result);

// 3.parameter that is not passed will ba undefined
function third(a,b,c,d){
    const total = a + b + c + d;
    console.log(a, b, c, d);
}
console.log(5,4);

// 4. if return has nothing on the right side will return undefined.
function noNegative(a, b){
    if(a < 0 || b < 0){
        return
    }
    return a + b;
}
const total = noNegative(2, -5);
// console.log(total)

// 5. property that doesn't exists on an object will give you undefined.
const fifth = {id: 2, name:'ponchom', age: 40}
console.log(fifth.age, fifth.salary);

// 6. accessing array element outside of the index range.
const sixth = [4, 89, 87, 56, 54];
console.log(sixth[1], sixth[5], sixth[200]);

// 7. deleting an element inside an array.
const seventh = [4, 89, 87, 56, 54];
delete seventh[1]
console.log(seventh)

// 8. set a value directly to undefined.
const eighth = undefined;
const ninth = null;
const data = {result:[], updated: null}
console.log(typeof undefined);
console.log(typeof null);