// Create the function that takes an array with objects and returns the sum of people's budgets.

// Examples :

// getBudgets([
//   { name: "John", age: 21, budget: 23000 },
//   { name: "Steve",  age: 32, budget: 40000 },
//   { name: "Martin",  age: 16, budget: 2700 }
// ]) ➞ 65700

// getBudgets([
//   { name: "John",  age: 21, budget: 29000 },
//   { name: "Steve",  age: 32, budget: 32000 },
//   { name: "Martin",  age: 16, budget: 1600 }
// ]) ➞ 62600
function sum(obj){
    sum=0
  for(i of obj){
      sum+=i.markes
  }
  console.log(sum)

}
obj=[
    { name: "John", age: 21, markes: 23000 },
    { name: "Steve",  age: 32, markes: 40000 },
    { name: "Martin",  age: 16, markes: 2700 }
  ]
sum(obj)
//   sum=0
//   for(i of obj){
//       sum+=i.markes
//   }
//   console.log(sum)

// output:
// 65700

// Create a function that takes an array of objects like { name: "John", notes: [3, 5, 4]} and returns an array of objects like { name: "John", avgNote: 4 }. If a student has no notes (an empty array) then let's assume avgNote: 0.
// 	Example :

// [
//   { name: "John", notes: [3, 5, 4]}
// ] ➞ [
//   { name: "John", avgNote: 4 }
function avg(a){
    for(i of obj){
        sum=0,c=0
        for(j of i.notes){
            sum+=j
            if(j){
                c=c+1
            }
            else{
               c=1
            }
        }
        i.avgNote=sum/
        delete i.notes
     }
     console.log(obj)
     
}

obj=[
    { name: "John", notes: [3, 5, 4]}
  ] 
avg(a)
