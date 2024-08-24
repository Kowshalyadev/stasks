// Write a program to print the minimum prime in the given number
// Input: Enter a number: 65137
// Output: Minimum Prime number is : 3
input1="65137"
rem=[]
for (num of input1){
    if (num>1){
        count=0
        for(i=2;i<num;i++){
            if(num%i==0){
                // console.log('Not a prime')
                count++
                break
            }
        }
        if(count==0){
            rem=rem + Number(num) + ""
            // console.log(rem)    
        }
    }

}
input=rem
min=input[0]
for(i=1;i<input.length;i++){
    if(input[i]<min){
        min=input[i]

    }
   }
   console.log('Minimum Prime number is : '+min)
