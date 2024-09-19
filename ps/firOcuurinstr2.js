str1=prompt("enter the str1: ").split("")
str2=prompt("enter the str1: ").split("")
res=""
res1=false;
for(i=0;i<str1.length;i++){
    if(str2[0]==str1[i]){
        res=str1.slice(i,i+str2.length)
        // console.log(res,i,i+str2.length)
        if(res==str2){
            console.log(i);
            res1=true;
            break;
        }
         }
}
if(!res1){
    console.log("-1");
}

// output
// Problem statement: “Given two strings text and pattern find the first occurrence of str1 in str2 if found print it’s index if not found print -1.”

// Examples:

// Example 1:
// Input: str1 = "takeuforward"
//        str2 = “forward”
// Output: 5

