// tasks:
// ------
// 1.Uppercase first letter

// - Input: "hello"
// - Output: "Hello"

// - Input: "world"
// - Output: "World"
// hint:charAt(), toUpperCase(), slice(), concat()
let num='hello';
let first_upper=num.charAt();
res=""
if(first_upper==first_upper.toLowerCase()){
    res+=first_upper.toUpperCase()
}
let slice_letter=num.slice(1,);
console.log(res.concat(slice_letter))
// 2.Remove vowels

// - Input: "hello"
// - Output: "hll"

// - Input: "world"
// - Output: "wrld"

// using replace().

// research required here
let string='world'
let new_one=''
let non=''
for (str of string){
    if(str=='a'){
        new_one+=str.replace("a", "a");
    }
    else if(str=='e'){
        new_one+=str.replace("e", "e");      
    }
    else if(str=='i'){
        new_one+=str.replace("i", "i");      
    }
    else if(str=='o'){
        new_one+=str.replace("o", "o");      
    }
    else if(str=='u'){
        new_one+=str.replace("u", "u");      
    }
    else{
        non+=str
    }
}
console.log(non)