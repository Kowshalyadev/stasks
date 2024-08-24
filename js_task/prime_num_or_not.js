function primeRoNot(number){
    if(number>1){
        for(i=2;i<number;i++){
            if(number%i==0){
                console.log('Not a prime')
                count++
                break
            }
        }
        if(count==0){
            console.log("Prime Number")
        }
    }
    else{
        console.log('enter a valid number')
    }
}
let number=4;
let count=0;
primeRoNot(number)