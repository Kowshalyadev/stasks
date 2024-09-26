rows=+prompt("enter the rows: ")
alpha=65
for(i=1;i<=rows;i++){
    res="",store=[]
    for(j=1;j<=i;j++){
        res=res+String.fromCharCode(alpha)+" ";
        alpha++
    }
    store=res.trim()
     for(k=1;k<=rows-i;k++){
        store+="  "
    }
    console.log(store.split("").reverse().join(""))
}
// output
// enter the rows: 5
//         A
//       C B
//     F E D
//   J I H G
// O N M L K
