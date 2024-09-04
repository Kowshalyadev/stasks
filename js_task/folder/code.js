num=[3,5,7,11,21]
function primeCheck(n1){
    if(n1>1){
        for(i=2;i<n1;i++){
            if(n1%i==0){
                return false
            }
        }
        return true
    }
    return false
}
prime=2
while(true){
    if(primeCheck(prime)){
        if(!num.includes(prime)){
            console.log(prime)
            break
        }
    }
}


