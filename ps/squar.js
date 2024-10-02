rows=+prompt("enter the rows: ")
for(i=1;i<=rows;i++){
    res="",num=i
    for(j=1;j<=i;j++){
            res=res+num*2+" "
            num=num+rows-j
    }
    console.log(res)
}
// output
// enter the rows: 4
// 2 
// 4 10 
// 6 12 16 
// 8 14 18 20 
rows=+prompt("enter the rows: ")
for(i=1;i<=rows;i++){
    res="",store=""
    for(j=1;j<=i;j++){
            res=res+j+" "
            
    }
    store=res.trim().split("").reverse().join("")
    console.log(store)
}
// output:
// enter the rows: 4
// 1
// 2 1
// 3 2 1
// 4 3 2 1
