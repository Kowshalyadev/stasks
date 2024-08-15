function fb(){
    for (let items of x){
        // console.log(items);
        if (items%2==0){
            console.log(items,"fizz");
        }
        else if(items%3==0){
            console.log(items,"buzz");
        }
        else if(items%2==0 && items%3==0){
            console.log(items,'fizzbuzz');
        }
        else{
            console.log(items,"kowshi");
        }
    }
}
let x=[20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40];
fb();

