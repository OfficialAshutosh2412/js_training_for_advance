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
// let prices=[100,200,300,150,268, 750 ,600,750,880,900,1000,1200,254];
// let getcost=prices.filter((element, index)=>{
//     return element>300;
// })
// console.log(getcost);

// 6. sort(), it first convert whole array element in strings and
//  then sort them on the basis of first letter of the element
// let prices=[100,200,300,150,268, 750 ,600,750,880,900,1000,1200,254];
// let months=['jan','mar','dec','jul','feb']
// console.log(prices.sort());
// console.log(months.sort());

// 7. array crud operation create/insert
// 7.1 push(), add element at the end of array, and return length of array.
// let prices=[100,200,300,150];
// let latest=prices.push("me","yo yo honey singh")
// console.log(latest);
// console.log(prices);

// 7.2 unshift(), add element at the begining and return new length of an array.
// console.log(prices.unshift("us"));
// console.log(prices);

// 8.crud on array pop(), removes last element of an array. and changes length and return removed array.
// let prices=[100,200,300,150];
// console.log(prices.pop());
// console.log(prices);
 
// 8.1 shift(), removed fist element of an array. return element which is removed.
// console.log(prices.shift());
// console.log(prices);


// challange
// 1. sort the array in descending order
// const fruit=['banana','orange','apple','mango'];
// console.log(fruit.sort());
// console.log(fruit.reverse());

// 2.sort number
//  const points = [40, 100, 1, 5, 25, 10];
// points.sort(function(a, b){return a-b});
// console.log(points);

// 3. add "dec at end of array using splice
// const month = ["jan", "march", "april", "june", "july"];
// let newdata=month.splice(month.length,0,"Dec");
// here 0 means , nothing to delete.
// console.log(month);

// 4. what is the return value of splice method()?
// console.log(month.splice(month.length,0,"Dec"));
// it will give an empty array([]) because, it is mostly used for delete element of the array,and here we wrote 0, means no element is deleted thats why it will give an empty array.

// 5. update march into March.
// const month = ["jan", "march", "april", "june", "july"];
// getting index of march
// let indeofmarch=month.indexOf("march");
// console.log(indeofmarch);
// if(indeofmarch!=-1){
//     let newdata=month.splice(indeofmarch, 1, "March");
//     // here 1 represents deletion of an element
//     console.log(month);
// }
// else{
//     console.log("data not found try again later !");
// }

// 6. delete june.
// const month = ["jan", "march", "april", "june", "july"];
// let newIndex=month.indexOf("june");
// if(newIndex != -1){
//     let newmonth=month.splice(newIndex, 1);
//     // here 1 represents number of element want to delete
//     console.log(month);
//     console.log(newmonth);//return an array of deleted elements
// }
// else{
//     console.log("not found");
// }

// 7. except jan and march delete all element of Array.
// const month = ["jan", "march", "april", "june", "july"];
// let newindex=month.indexOf("april");
// if(newindex != -1){
//     let newmonth = month.splice(newindex, Infinity);
//     console.log(month);
//     console.log(newmonth);
// }
// else{
//     console.log("not found");
// }

// 8. map and reduce method
// map method is same as foreach and filter, but with a small diff, that map () return a new array
// resulting every element of the array, and does not
// mutate original array, where for-each and filter mutates 
// original elements.
// map() returns new array, foreach returns undefined.
// we can use more methods with map(), but possible with forech beocz it gives undefined.
// let ar1=[12,58,656,16,200,10,20,10];
// let newar=ar1.map((a, ind,arr1)=>`${a}, ${ind}, ${arr1}`);
// console.log(newar);
// console.log(ar1);

// challenge
// find square root of each element of array
// let arr =[25,36,49,64,81];
// let newarr=arr.map((element)=>Math.sqrt(element));
// console.log(newarr);


// challenge
// multiply each element by 2, and return only element > 10
// let arr=[2,3,4,6,8]
// let newarr=arr.map((elements)=>elements*2).filter((element)=>element>10)
// console.log(newarr);


// reduce()
// it is used to perform some specific functionality over array. Also used to convert 2-D. 3-D array into 1-D array
// it take 4-args,
// acculmulator which collects data, current element, index and array.

// let ar=[2,3,6];
// let newar=ar.reduce((accu, cuval, indexes, arrays)=> accu=accu+cuval);
// console.log(newar);
// console.log(ar);

// let oned=[
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ];
// let newarray=oned.reduce((acc,elem)=>{
//     return acc.concat(elem);
// })
// console.log(newarray);