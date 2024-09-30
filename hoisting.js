for(var i=0; i < 5; i++){
    console.log(i)
}
console.log('Outside', i);

for(let i=0; i < 5; i++){
    console.log(i)
}
console.log('Outside2', i);


print5()
function print5(){
    console.log('inside print5', 5)
}
console.log(print5);

print10()
function print10(){
    console.log('inside print5', 10)
}
console.log(print10);