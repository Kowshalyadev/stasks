// Write a program to print the sum of fibonnacci numbers in the given number. 
// Input: Enter a number: 52743
// Output: Sum of Fibonacci numbers : 10
// Explanation: In the given number 52743, numbers 5, 2, 3 are available in the 
// Fibonacci series (0 1 1 2 3 5 8 13 21……). There sum is 10.
num="52743"
a=0,b=1,res="",i=1
while(i<num.length){

    c=a+b
    a=b
    b=c 
    i++
}
console.log(num[i])