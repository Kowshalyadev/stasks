// 1:
// Use Object.keys() and Object.values() to create a new object with only the keys and values that meet a certain condition.
// Example:
// const obj = { a: 1, b: 2, c: 3, d: 4 };
// Create a new object with only the keys and values where the value is greater than 2
// Output: { c: 3, d: 4 }
const ob = { a: 1, b: 2, c: 3, d: 4 };
const val=Object.values(ob)
for(i of val){
    if(i>2){
        console.log(i)
    }
}




// 2:
// Use Object.assign() to merge two objects and create a new object with the combined properties.
// Example:
// const obj1 = { a: 1, b: 2 };
// const obj2 = { c: 3, d: 4 };
// Create a new object with the combined properties of obj1 and obj2
// Output: { a: 1, b: 2, c: 3, d: 4 }

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
Object.assign(obj1,obj2)
console.log(obj1)
// 3:
// Use Array.reduce() to sum up the values of an object's properties.
// Example:
// const obj = { a: 1, b: 2, c: 3, d: 4 };
// Sum up the values of obj's properties using reduce();
// Output: 10
const obj = { a: 1, b: 2, c: 3, d: 4 };
let arr=Object.values(obj)
let z=arr.reduce((a,b)=>{
    return a+b;
})
console.log(z)
// 4. scenario explained for array of objects using hasownproperty.
let objs = { a: 1, b: 2, c: 3, d: 4 };
console.log(objs.hasOwnProperty("a"));

// The hasOwnProperty() method of Object instances returns a boolean indicating whether this object has the specified property as its own property
