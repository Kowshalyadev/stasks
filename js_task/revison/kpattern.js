row=+prompt("enter the rows")
for(i=1;i<=2*row-1;i++){
    star=(i<=row)?row-i+1:i-row+1
    space=(i<=row)?(2 * (row - star)) - 1:(2 * (row-star)) - 1
    res=""
    for(j=1;j<=star;j++){
        res=res+"*"
    }
    if(i==1||i==2*row-1){
        console.log(res+res.slice(1))
    }
    else{
        console.log(res+" ".repeat(space)+res)
    }
}

// output
// enter the rows5
// *********
// **** ****
// ***   ***
// **     **
// *       *
// **     **
// ***   ***
// **** ****
// *********