// Implement all the problems which we have done (atleast 5) using named and arrow functions.
// doc on functions and scopes with proper understanding.
//1.addtion of two numbers
let first=function(a,b){
    return a+b
}
console.log(first(1,2))//output:3
//write a program to print 1 to 10 number using named functions
let first1_to_10=function(a){
    for(i=0;i<=a;i++){
        console.log(i)
    }
}
first1_to_10(10)
//output
// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
// Verify that the sum of all even numbers between 1 and 100 is 2550.
let even_prime=function(a){
    for(i=0;i<=a;i++){
        if(i%2==0){
            res+=i
            // console.log(res)
        }
    }
}
let res=0
even_prime(100)
console.log(res)//output:2550
// - Test case 1: Input: 5, Expected output: 120
let factorial=function(a){
    for(i=1;i<=a;i++){
        fact=fact*i
        console.log(fact)
    }
}
fact=1
input=5
factorial(5)//output:120
// - Test case 1: Input: 123, Expected output: 3
let length_num=function(a){
    if(i<=a){
        console.log(a.length)
        count++
    }
}
count=0
length_num(("123"))//length:3
//arrow functions
//1.addtion of two numbers
let firsts=(a,b)=>{
    return a+b
}
console.log(firsts(1,2))//output:3
//write a program to print 1 to 10 number using named functions
let firsts1_to_10=a=>{
    for(i=0;i<=a;i++){
        console.log(i)
    }
}
firsts1_to_10(10)
//output
// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
// Verify that the sum of all even numbers between 1 and 100 is 2550.
let even_primes=a=>{
    for(i=0;i<=a;i++){
        if(i%2==0){
            ress+=i
            // console.log(res)
        }
    }
}
let ress=0
even_primes(100)
console.log(ress)//output:2550
// - Test case 1: Input: 5, Expected output: 120
let factorials=a=>{
    for(i=1;i<=a;i++){
        fact=fact*i
        console.log(fact)
    }
}
fact=1
input=5
factorials(5)//output:120
// - Test case 1: Input: 123, Expected output: 3
let length_nums=a=>{
    if(i<=a){
        console.log(a.length)
        count++
    }
}
count=0
length_nums(("123"))//length:3