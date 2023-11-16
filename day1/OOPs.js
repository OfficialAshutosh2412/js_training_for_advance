// objects
// objects is like a school bag, which carries so many things for you.
// Object is alos a container which caries variable and methods all at once in  a single variable, that object is refered as object.

// method 1 of creating
// let data={
//     myname:"ashutosh prasad",
//     age:22,
//     department:"IT",
//     address:"devpur para",
//     batchNumber:52007,
//     show:function(){
//         console.log(`${data.myname}, ${data.age}, ${data.department}, ${data.address}, ${data.batchNumber}`)
//     }
// }
// data.show()


// method 2 of creating
// let nodata={
//     surname:"Prasad",
//     showSurname(){
//         console.log(nodata.surname);
//     },
//     fullname:{
//         firstname:"ashutosh",
//         lastname:"prasad",
//         showfullname(){
//             console.log(`${nodata.fullname.firstname} ${nodata.fullname.lastname}`);
//         }
//     }
// }
// nodata.fullname.showfullname()


// this keyword
// it returns the current context where it is applied

// const a={
//     b:"ashu",
//     show:()=>{
//         console.log(this);
//     }
// }
// a.show()
// here it return the window object. because this keyword is not work with this keyword.

// const a={
//     b:"ashu",
//     show(){
//         console.log(this);
//     }
// }
// a.show()
// here it will returnd the object a because this return here object.