// datetime object
// it represent single moment in time in a platform independent format. date objects containes a number that represents in miliseconds since 1 january 1970.

// A. there are 4-ways to create date.
// let datetimeobj=new Date();
// console.log(datetimeobj.toLocaleDateString()+"\n");
// console.log(datetimeobj.toTimeString()+"\n");
// console.log(datetimeobj.toLocaleString()+"\n");
// console.log(datetimeobj.toString()+"\n");

// only date
// let currentDate=new Date();
// console.log(currentDate);
// console.log(currentDate.getDate());//only day
// console.log(currentDate.getFullYear());//only year
// console.log(currentDate.getMonth());//only months
// console.log(currentDate.getDay());//day number.

// only time
// let  theTime=new Date();
// console.log(theTime.getTime());
// console.log(theTime.getHours());
// console.log(theTime.getMinutes());
// console.log(theTime.getSeconds());
// console.log(theTime.getMilliseconds());

// challenge time
// 1. get only time
// let newdate=new  Date();
// console.log(newdate.toLocaleTimeString());