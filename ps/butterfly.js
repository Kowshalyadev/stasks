rows=+prompt("enter the rows")
for(i=1;i<=2*rows-1;i++){
    stars=(i<=rows)?i:2*rows-i
    space=(i<=rows)?2*rows-(2*i)-1:(2*i-(2*rows)-1)
    space=(space<0)?0:space
    res=""
    for(j=1;j<=stars;j++){
        if(j%2==0){
            res+="0 "
        }
        else{
            res+="1 "
        }
        
    }
    if(i==rows){
        console.log(res+res.slice(0,1))
    }
    else{
        console.log(res+"  ".repeat(space)+res.split(" ").reverse().join(" "))
    }
}

// output:
// enter the rows5
// 1                1
// 1 0            0 1
// 1 0 1        1 0 1
// 1 0 1 0    0 1 0 1
// 1 0 1 0 1  0 1 0 1 
// 1 0 1 0    0 1 0 1
// 1 0 1        1 0 1
// 1 0            0 1
// 1                1
