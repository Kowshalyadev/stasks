let sum=0;
for (i=0;i<=100;i++){
    if (i%2==0){
       sum+=i;
    }
}
console.log(sum);
// - Test case 1: Verify that the sum of all even numbers between 1 and 100 is 2550.
// - Test case 2: Verify that the sum of all even numbers between 1 and 50 is 650.
let sum_1_to_50=0;
for (i=0;i<=50;i++){
    if (i%2==0){
       sum_1_to_50+=i;
    }
}
console.log(sum_1_to_50);
// 2. Write a program to find the factorial of a given number

// - Test case 1: Input: 5, Expected output: 120
// - Test case 2: Input: 3, Expected output: 6
let items=5;
let total=1;
for (i=0;i<items;i++){
    total=total*(items-i);
}
console.log(total);

// 1. Write a program to determine the fare for a taxi ride based on the distance traveled:
//     - 0-5 km: $5
//     - 5-10 km: $10
//     - 10-20 km: $20
//     - Above 20 km: $30 + $5 for every additional km
let tax=-2;
if (tax<0 || tax<5){
    console.log("$5");
}
else if(tax<=5 || tax<10){
    console.log("$10");
}
else if(tax<=10 || tax<20){
    console.log("$20");
}
else if(tax<=20 || tax>=0){
    console.log("$30+$5");
}
else{
    console.log("enter the valid number")
}
// 2. Write a program to determine the discount on a product based on the quantity purchased:
//     - 1-5 units: No discount
//     - 6-10 units: 5% discount
//     - 11-20 units: 10% discount
//     - Above 20 units: 15% discount
let discount=9;
if (discount<0 || discount<=5){
    console.log("no discount")
}
else if(discount<=6 || discount<10){
    console.log("5% discount");
}
else if(discount<=11 || discount<=20){
    console.log("10% discount");
}
else{
    console.log(15% discount);
}
// . Write a program to determine the type of coffee based on the user's selection:
//     - 1: Espresso
//     - 2: Cappuccino
//     - 3: Latte
//     - 4: Mocha
let user='mochsaa';
switch (user){
    case 'espresso':
        console.log("Espresso");
    break;
    case 'cappuccino':
        console.log("Cappuccino");
    break;
    case 'Latte':
        console.log('Latte');
    break;
    case 'mocha':
        console.log('Mocha');
    break;
    default:
        console.log("enter only coffee names");
}
// 2. Write a program to determine the shipping cost based on the region:
//     - 1: North America ($10)
//     - 2: South America ($20)
//     - 3: Europe ($30)
//     - 4: Asia ($40)
//     - 5: Australia ($50)
let shipping_cost='north America';
switch (shipping_cost){
    case 'north America':
        console.log("$10");
    break;
    case 'south_america':
        console.log("$20");
    break;
    case 'Europe':
        console.log("$30");
    break;
    case 'asia':
        console.log('$40');
    break;
    case 'australia':
        console.log('$50');
    break;
    default:
        console.log("enter the correct shipping");

}
// 3. Determine the number of digits in a given number

// - Test case 1: Input: 123, Expected output: 3
// - Test case 2: Input: 4567, Expected output: 4
let string=String(123);
console.log(string.length)
let count=0;
for (i=0;i<=string.lenth;i++){
    console.log(i)
}


