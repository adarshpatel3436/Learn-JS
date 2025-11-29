// Dates

let myDate = new Date()
console.log(myDate); //current date and time
console.log(myDate.toString()); //current date and time in string format 
console.log(myDate.toDateString()); //current date in string format
console.log(myDate.toTimeString()); //current time in string format
console.log(myDate.toUTCString());  //current date and time in UTC format
console.log(myDate.toLocaleString()); //current date and time in local format
console.log(myDate.toISOString()); //current date and time in ISO format
console.log(myDate.toJSON()); //current date and time in JSON format

console.log(typeof myDate); //object

// Specific Date

//let myCreatedDate = new Date(2023, 0, 23)
//let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
//let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now() //gives timestamp in milliseconds

//console.log(myTimeStamp);
//console.log(myCreatedDate.getTime());
//console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1); // give the month
console.log(newDate.getFullYear()); //give the year
console.log(newDate.getDate()); //give the date
console.log(newDate.getDay()); //give the day

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', { // 'en-US' based
    weekday: "long", //ye day, short, narrow bhi hote hain
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
    
})
