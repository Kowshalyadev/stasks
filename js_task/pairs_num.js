num=[30,40,40,50,50,30]
emp={},sum=0
for(i of num){
    emp[i]=(emp[i]||0)+1
    console.log(emp)
    if(emp[i]==2){
        sum++
        emp[i]=0
    }
   
}
console.log(sum)
// function countPairs(array) {
//     const pairs = {};
    
//     let count = 0;
    
//     for (const value of array) {
//         pairs[value] = (pairs[value] || 0) + 1;
//         if (pairs[value] === 2) {
//             count++;
//             pairs[value] = 0;
//         }
//     }
    
//     return count;
// }

// console.log(countPairs([30,50,30,50,20,50,50,20,50,50,50]));       // 4
// console.log(countPairs([10, 20, 20, 10, 10, 30, 50, 10, 20])); // 3