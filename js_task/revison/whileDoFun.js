function prime(num){
    if(num>1){
        count=0
        for(i=2;i<=num;i++){
            if(num%i==0){
                return "Not a prime"
            }
        }
        return "prime"
    }
    return "enter the valid Number"
}
input=+prompt("enter a number:")
console.log(prime(num))

// output:
// enter a number:5
// prime



function increment(num){
    let result = "";
    let i = 0;

    do {
        i = i + 1;
        result = result + i;
    } while (i < 5);
    return result
    
}
input=+prompt("enter a number")
console.log(increment(input))

// output:
// enter a number5
// 12345
