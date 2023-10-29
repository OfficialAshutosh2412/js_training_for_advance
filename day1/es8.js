// array
// storing various data in a single variable called array
// var data=["ashutosh", "mca", "asp developer", 22, 6.3, "male"];
// console.log("get data of array");
// console.log(data[2]);
// console.log("get lenghth of array");
// console.log(data.length);
// console.log("get last element of any array");
// console.log(data[data.length-1]);
// console.log("traverse using normal for() loop");
// for(let i=0;i<=data.length-1;i++){
//     console.log(data[i]);
// }
// console.log("traverse using for-in() loop");
// for(let a in data){
//     console.log(`${a} = ${data[a]}`);
// }
// here a gives index Number
// console.log("traverse using for-of() loop");
// for(let a of data){
//     console.log(a);
// }
// here a gives data not index
// console.log("traverse using call back for-each loop()");
// data.forEach(function (a,b,data){
//     console.log(`${a} | ${b} | ${data}`);
// })
// here a=element name, b=index of element, c= whole array, here we can get array, elementa and indexes too all at once.


// searching and Filter in Array(function)
// var data=["ashutosh", "mca", "asp developer", 22, 22, 6.3, "male"];
// 1.indexof() return first element index of asked element, it gives first index of duplicate values.
// console.log(data.indexOf("mca"));

// 2. lastIndexOf(), it gives last duplicate value index.
// var data=["ashutosh", "mca", "asp", 22, 22, 22,  6.3, "male"];
// console.log(data.lastIndexOf(22));


// 3. includes(), if find give true, else false.
// var data=["ashutosh", "mca", "asp", 22, 22, 22,  6.3, "male"];
// console.log(data.includes(22));
 
// 4.find(), if find give value, else undefined
// let prices=[100,200,300,150,268,600,750,880,900,1000,1200,254];
// console.log(prices.find((element)=> element>=600));
// let cost=prices.find((costing)=>{
//     return costing < 600;
// });
// console.log(cost);

// find multiple element less than 600
// prices.forEach((element)=>{
//     if(element<=600){
//         console.log(element);
//     }
// })

// 5. findindex(),  if find give value, else -1
// let prices=[100,200,300,150,268,600,750,880,900,1000,1200,254];
// console.log(prices.findIndex((element)=> element==1200));

// 6. filter()
let prices=[100,200,300,150,268,600,750,880,900,1000,1200,254];
