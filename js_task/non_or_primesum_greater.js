let numbers=String(2045);
// let count=0;
let prime_sum=0;
let non_prime_sum=0;
for (num of numbers){
    let count=0;
    if (num>1){
        for(i=2;i<num;i++){
            if(num%i==0){
                non_prime_sum+=Number(num)
                // console.log(prime_sum);
                count ++
                break
            }
        }
        if (count==0){
            prime_sum+=Number(num)
            //  console.log(prime_sum)
        }
    }
}
// console.log(prime_sum)
// console.log(non_prime_sum)
if (prime_sum>non_prime_sum){
    console.log("prime sum is bigger")
}
else if(prime_sum<non_prime_sum){
    console.log("Non Prime Sum is bigger")
}
else{
    console.log("Prime and Non prime sum is equal")
}