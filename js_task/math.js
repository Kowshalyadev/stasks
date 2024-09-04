// [12.345, 67.890, 34.567], // Round each element to 2 decimal places using toFixed()
let x=[12.345, 67.890, 34.567]
res=""
for(i of x){
    res+=i.toFixed(2)+" "
}
console.log(res)//output:12.35 67.89 34.57 
// ['123abc', '456def', '789ghi'], // Convert each element to an integer using parseInt()
let y=['123abc', '456def', '789ghi']
ress=''
for(i of y){
    ress+=parseInt(i)+" "
}
console.log(ress)//output:123 456 789
// [12, 34.56, 78, 90.12], // Check if each element is an integer using isInteger()
let isint=[12, 34.56, 78, 90.12]
for(i of isint){
    console.log(Number.isInteger(i))
}
// ['abc', 123, 'def', 456], // Check if each element is NaN (Not a Number) using isNaN()
let nan=['abc', 123, 'def', 456]
for(i of nan){
    console.log(isNaN(i))
}
//ouput:
//true
//false
//true
//false



// [123.456, 789.012, 345.678] // Format each element to have a precision of 4 significant digits using toPrecision()
let percisions=[123.456, 789.012, 345.678] 
for(i of percisions){
    console.log(i.toPrecision(4))
}
// output:
// true
// false
// true
// false
// generate random otp 5 digit num using math.random

var min = 10000;
var max = 99999;
var num = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(num)

// output:it generate random 5 digit otp
