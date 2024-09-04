num="8 7 1 6 5 9"

num=prompt().split(" ").map(Number)//8 7 1 6 5 9
// rev=[]
// dec=[]
sorted=num.sort((a,b)=>a-b)
// console.log(sorted)
half=Math.ceil(sorted.length/2)
f=(sorted.slice(0,half)).join(" ")+" "
s=(sorted.slice(half,).reverse().join(" "))
console.log(f.concat(s))