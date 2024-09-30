
/**     Truthy:      
 * 1. true
 * 2. any number (+ve, -ve) will be truthy other than 0.
 * 3. any string truthy. other than ' ' empty string
 * 4. '0' , 'false' 
 * 5.{} 
 * 6. []
 * 
 * 
 * ***      Falsy:
 * 1. false
 * 2. 0
 * 3. '' (empty string)
 * 4. undefined
 * 5. null
 * **/ 

// const x = false;
// let x
// console.log(x)

let x = null;
console.log(x)
if(x){
    console.log('value of x is truthy');
}
else{
    console.log('value of x is falsy');
}

const p = '0';
if(p){
    console.log('value of p is truthy');
}
else{
    console.log('value of p is falsy');
}

// const z = ' '
// const z = 50
const z = {class: 9}
if(!!z){
    console.log('value is truthy');
}

