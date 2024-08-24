
let stringsValues=function(a){
    for (num of a){
        if (num==num.toLowerCase()){
            newString+=num.toUpperCase()
        }
        else if(num==num.toUpperCase()){
            newString+=num.toLowerCase()
        }
    }
    console.log(newString)
}
a="somEThinG";
newString=''
stringsValues(a)