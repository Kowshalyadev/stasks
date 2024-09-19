rows=5
for(i=1;i<=2*rows-1;i++){
    cols=(i<=rows)?i:2*rows-i
    space=(i<=rows)?rows-i:i-rows
    res=""
    for(k=1;k<=space;k++){
        res=res+" "
    }
    for(j=1;j<=cols;j++){
        res=res+"* " 
    }
    console.log(res)
}

