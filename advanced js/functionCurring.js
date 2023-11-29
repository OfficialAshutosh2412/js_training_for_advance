// function currying,  technique where we pass sequence of functions as argument in a function.

// example.

// function sum(a){
//     return function(b){
//         return function(c){
          
//             console.log(`a=${a} b=${b} c=${c} is ${a+b+c}`);
            
//         }
//     }
// }


let sum=(a)=>(b)=>(c)=>console.log(`a=${a} b=${b} c=${c} is ${a+b+c}`)
    

sum(10)(20)(30);