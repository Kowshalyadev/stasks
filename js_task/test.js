// Write a program to find whether maximum number is found first or minimum 
// number is found first. 
// Input: Enter a number: 28416. 
// Output: Maximum is first and Minimum is second. 
// Input: Enter a number: 6377 
// Output: Minimum is first and Maximum is second.
num="7319";
max=num[0],maxIndex=0;
min=num[0],minIndex=0;
for(i=0;i<num.length;i++){
    if(num[i]>max){
        max=num[i]
        maxIndex=i
        
        // console.log(max)
    }
    if(num[i]<min){
        min=num[i]
        minIndex=i
        // console.log(min)
    }
   
}
res=(maxIndex<minIndex)?"Max is first Min is Second":"Min iS First Max is Second"
console.log(res)
