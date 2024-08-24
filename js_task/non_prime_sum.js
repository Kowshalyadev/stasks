let numbers=String(7321);
// let count=0;
let non_prime_sum=0;
for (num of numbers){
    let count=0;
    if (num>1){
        for(i=2;i<num;i++){
            if(num%i==0){
                non_prime_sum+=Number(num)
                // console.log(num)
                count ++
                break
            }
        }
        if (count==0){
            count++

            // prime_sum+=Number(num)
        }
    }
}
console.log(non_prime_sum)