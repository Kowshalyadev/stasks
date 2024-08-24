// 1. Double the numbers in an array: [1, 2, 3, 4, 5] → [2, 4, 6, 8, 10]
// 2. Convert strings to uppercase: ["hello", "world"] → ["HELLO", "WORLD"]
let arr=[1,2,3,4,5]
let res=[]
arr.map((i)=>{
    res+=[i*2]+" "
})
console.log(res)
// 2. Convert strings to uppercase: ["hello", "world"] → ["HELLO", "WORLD"]
let uppercaseletter=['hello','world']
let upper_res=[]
uppercaseletter.map((upper)=>{
    upper_res=upper_res+upper.toUpperCase()
        +" "
})
console.log(upper_res)
// Filter
// 1. Get even numbers from an array: [1, 2, 3, 4, 5] → [2, 4]
let even_num=[1,2,3,4,5]
let even_res=[]
even_num.filter((i)=>{
    if(i%2==0){
        even_res+=i+" "
    }
})
console.log(even_res)
// 2. Get strings longer than 5 characters: ["hello", "world", "abc"] → ["hello", "world"]
let filter_str=['hello','world','abc']
let filter_res=[]
filter_str.filter((i)=>{
    if(i=='hello'||i=="world")
        filter_res=filter_res+i+" "
})
console.log(filter_res)
// ForEach
// 1. Log each number in an array: [1, 2, 3, 4, 5] → console logs each number
let each_num=[1,2,3,4,5]
let each_res=[]
each_num.forEach((i)=>{
    console.log(i)
})
// 2. Append "!" to each string in an array: ["hello", "world"] → ["hello!", "world!"]
let each_str=['hello','world']
let each_str_res=[]
each_str.forEach((i)=>{
    each_str_res+=(i+"! ")
})
console.log(each_str_res)
// Every
// 1. Check if all numbers in an array are positive: [1, 2, 3, 4, 5] → true
const all_positive = (i) => i > 0;

const array1 = [1,2,3,4,5];

console.log(array1.every(all_positive));
// 2. Check if all strings in an array are longer than 5 characters: ["hello", "world", "abc"] → false
let str5=(i)=>i<=5;
let arr2=['hello','world','abc']
console.log(arr2.every(str5))
// Some
// 1. Check if any number in an array is even: [1, 2, 3, 4, 5] → true
// 2. Check if any string in an array contains "x": ["hello", "world", "max"] → true
let str=(i)=>i%2==0;
let str_even=[1,,2,3,4,5]
console.log(str_even.some(str))
// 2. Check if any string in an array contains "x": ["hello", "world", "max"] → true
let str1=(i)=>i==str_x.includes("x");
let str_x=[1,,2,3,4,5]
console.log(str_x.some(str1))
// Find
// 1. Find the first even number in an array: [1, 2, 3, 4, 5] → 2
// 2. Find the first string in an array that contains "x": ["hello", "world", "max"] → "max"
let first_num=[1,2,3,4,5]
let ress=first_num.find(((x)=>x%2==0))
console.log(ress)
// 2. Find the first string in an array that contains "x": ["hello", "world", "max"] → "max"
let first_str=['hello','world','max']
let x=first_str.find((x)=>"max"==x)
console.log(x)

// FindIndex
// 1. Find the index of the first even number in an array: [1, 2, 3, 4, 5] → 1
let first_index=[1,2,3,4,5]
let index_fir=first_index.findIndex((x)=>x%2==0)
console.log(index_fir)
// 2. Find the index of the first string in an array that contains "x": ["hello", "world", "max"] → 2
let first_str_index=['hello','world','max']
let index_str=first_str_index.findIndex((x)=>'max'==x)
console.log(index_str)






