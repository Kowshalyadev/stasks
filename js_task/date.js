// // const hh_Mm_Ss=new Date()
// // const hours=hh_Mm_Ss.getHours()
// // const mint=hh_Mm_Ss.getMinutes()
// // const sec=hh_Mm_Ss.getMinutes()
// // console.log(hours,mint,sec)
// let DateMethod=new Date()
// let extract_date=DateMethod.getDate()
// console.log(extract_date)
// // The getDay() method of Date instances returns the day of the week for this date according to local time, where 0 represents Sunday. 
// let extract_day=DateMethod.getDay()
// console.log(extract_day)
// let options={waekday:"long"}
// console.log(new Intl.DateTimeFormat("en-US", options).format(DateMethod));
// // The getFullYear() method of Date instances returns the year for this date according to local time.
// console.log(DateMethod.getFullYear())//extract year
// // Date.prototype.getHours()
// let dateTime=new Date()
// console.log(dateTime)
// console.log(dateTime.getHours())
// // Date.prototype.getMinutes()
// console.log(dateTime.getMinutes())
// // Date.prototype.getMonth()
// console.log(dateTime.getMonth())
// // you should prefer using Intl.DateTimeFormat with the options parameter instead.
// let option={month:'long'}
// console.log(new Intl.DateTimeFormat("en-us",option).format(dateTime))
// // Date.prototype.getSeconds()
// let second=new Date('2024-3-20')
// console.log(second)
// let second_extract=second.getSeconds()
// console.log(second_extract)
// // Date.prototype.getTime()
// console.log(dateTime.getTime())
// let set_key=new Date()
// let set_keys=new Date()
// set_key.setDate(29)
// set_keys.toDateString()
// console.log(set_keys)
num=[3,5,7,11,21,2]
function primeCheck(n1){
    if(n1>1){
        for(i=2;i<n1;i++){
            if(n1%i==0){
                return false
            }
        }
        return true
    }
    return false
}
prime=2
while(true){
    if(primeCheck(prime)){
        if(!num.includes(prime)){
            console.log(prime)
            break
        }
    }
    prime++
}