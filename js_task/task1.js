// What is the result of 10 + '5'?
console.log(10+'5');
// What is the value of x after x = 10; x += 5;?
let a=10;
console.log(a);
a+=5;
console.log(a);
// What is the result of 10 - null?
console.log(10 - null);
// 4. What is the value of x after x = 10; x *= 2;?
let b=10;
console.log(b);
console.log(b*2);
// 5. What is the result of x = 10; y = --x;? What are the values of x and y?
let c=10;
console.log(c);
let d=--c;
console.log(d);
// 6. What is the result of x = 10; y = x--;? What are the values of x and y?
// Ternary Operators:
let e=10;
console.log(e);
let f=e--;
console.log(f);
// 1. What is the result of x = 10; y = x > 5 ? 'yes' : 'no';? What is the value of y?
let g=10;
console.log(g);
console.log(e>5);
// 5. What is the result of 10 / '2'?
console.log(10/'2');
// 6. What is the result of 10 % 3?
console.log(10%3);
// 7. What is the value of x after x = 10; x = x ** 2;?
console.log(g**2);
// 8. What is the result of 10 > 5 && 5 < 10?
console.log(10>5 && 5<10);
// 9. What is the result of 10 === '10'?
console.log(10==='10');
// 10. What is the result of null ?? 'default'?
console.log((null?? 'default'));
// 11. What is the result of 10 || 'default'?
console.log(10||'default');
// 12. What is the result of !true?
console.log(!true);
// 13. What is the result of 10 & 5?
console.log(10 & 5);
// 14. What is the result of 10 | 5?
console.log(10 | 5);
// 15. What is the result of 10 ^ 5?
console.log(10 ^ 5);
// 16.What is the result of x = 10; y = ++x;? What are the values of x and y?
console.log(g);
console.log(++g);

// 2. What is the result of x = 10; y = x++;? What are the values of x and y?
let x=10;
console.log(x);
let y=x++;
console.log(y);
// 3. What is the result of x = 10; console.log(++x);?
let h=10;
console.log(++h);
// 4. What is the result of x = 10; console.log(x++);?
console.log(h++);
// 1. What is the result of const obj = { a: { b: 'c' } }; console.log(obj?.a?.b);?
const obj={a:{b:'c'}};
console.log(obj?.a?.b);
console.log(obj?.a?.c);
console.log(obj?.b?.c);
// Nullish Coalescing:

// 1. What is the result of x = null; y = x ?? 'default';? What is the value of y?
let z=null
console.log(z ?? 'default');
// . What is the result of x = undefined; y = x ?? 'default';? What is the value of y?
let nu=undefined;
console.log(nu ?? 'default')
// . What is the result of x = 0; y = x ?? 'default';? What is the value of y?
let intiala=0;
console.log(intiala ?? 'default');




        let first_operator=2;
        let second_num=1;
        let symbol="%";
        let result;
        if (symbol=='+'){
           result=first_operator+second_num;
        }
        else if (symbol=='-'){
            result=first_operator-second_num;
        }
        else if (symbol=='*'){
            result=first_operator-second_num;
        }
        else if (symbol=='/'){
            result=first_operator-second_num;
        }
        else{
            result=first_operator%second_num;
        }
        console.log(result)
        let leap_year=400;
        if (leap_year%400==0 && leap_year<2024 && leap_year>500){
            console.log("leap_year");
        }
        else{
            console.log('not leap year');
        }
















