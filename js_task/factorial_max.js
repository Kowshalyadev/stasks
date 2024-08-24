// Write a program to print the factorial value of the largest digit in the given 
// number. 
// TestCase-1
// Input: Enter a number: 3511 
// Output: Factorial of the maximum number is : 120 
// Explanation: In the given number 3511, the largest digit is 5. The factorial of 5 
// is 120.
// TestCase-2
// Input: Enter a number: 120
// Output: Factorial of the maximum number is : 2
// Explanation: In the given number 120, the largest digit is 2. The factorial of 2 
// is 4.
num="3511";
max=num[0]
// console.log(first_index)
for(i=0;i<num.length;i++){
    if(num[i]>max){
        max=num[i]
    }
}
sum=1
for(i=1;i<=max;i++){
    sum=sum*i
}
console.log(sum)