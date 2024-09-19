num=prompt("enter a string : ")
// for(i of num){
res=""
    for(j=num.length-1;j>=0;j--){
        res+=num[j]
    }
console.log(res,num)
if(res==num){
    console.log("Palindrome")
}
else{
    console.log("Not Palindrome")
}

// enter a string : TAKE U FORWARD
// DRAWROF U EKAT TAKE U FORWARD
// Not Palindrome
// enter a string : ABCDCBA
// ABCDCBA ABCDCBA
// Palindrome