// Task 1: Get Current Date and Time

// - Input: None
// - Output: Current date and time (e.g., "2024-08-28T14:30:00.000Z")
let date_time=new Date()
console.log("Current date and time "+date_time)
// Task 2: Add Days to Date

// - Input: Date string (e.g., "2024-08-28"), number of days to add (e.g., 3)
// - Output: New date string (e.g., "2024-08-31")
var date = new Date('2024-8-28');
console.log(("New date string " +date.getFullYear()) + '-' + (date.getMonth()+1) + '-' + (date.getDate()+3) );
// Task 3: Format Date as MM/DD/YYYY

// - Input: Date string (e.g., "2024-08-28")
// - Output: Formatted date string (e.g., "08/28/2024")
let todayDate=new Date('2024-08-28')
console.log(new Intl.DateTimeFormat().format(todayDate))
let dates=((+todayDate.getMonth()+1)+'/'+todayDate.getDate()+'/'+todayDate.getFullYear())
console.log("Formatted date string "+dates)
// Task 4: Get Number of Days Between Dates

// - Input: Two date strings (e.g., "2024-08-28", "2024-09-01")
// - Output: Number of days between dates (e.g., 4)
let dateOne=new Date('2024-08-28')
let dateTwo=new Date('2024-09-01')
let twoDiffDate=Math.abs(dateTwo - dateOne)
let diffDays=Math.floor(twoDiffDate/(1000*60*60*24))//1000 * 3600 * 24 is the number of milliseconds per day
console.log(`Number of days between dates  ${diffDays}`)