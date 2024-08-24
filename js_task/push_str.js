// decode push,pop,shift and unshift.
// Push
// PURPOSE: The push() method adds new items to the end of an array..
let arr=[1,2,3,4,5]
let push_ele=arr.push(6)
console.log(arr)
// Pop
// PURPOSE: The pop() method removes (pops) the last item of an array.
let pop_arr=[1,2,3,4,5]
let pop_ele=pop_arr.pop()
console.log(pop_arr)
// Shift
// PURPOSE: The shift() method removes the first item of an array.
let shift_arr=[1,2,3,4,5]
let shift_ele=shift_arr.shift()
console.log(shift_ele)
console.log(shift_arr)
// Unshift
// PURPOSE: The unshift() method adds new items to the beginning of an array.
let unshift_arr=[1,2,3,4,5]
let unshift_ele=unshift_arr.unshift(6)
console.log(unshift_arr)
console.log(unshift_ele)
//decode
let uri = "https://mozilla.org/?x=шеллы";
let encoded = encodeURI(uri);
let decoded = decodeURI(encoded);
console.log(encoded)
console.log(decoded)