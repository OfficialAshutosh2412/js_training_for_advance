/*
sync async js : diffrence?

syn js = sequential execution on code

async js = don't wait just run .
*/
// sync js example
// humSecond=()=>{
//     console.log("dusra bhai");
// }

// const humFirst=()=>{
// console.log("pehla dusra");
// humSecond();
// console.log("teesra hu be");
// }

// humFirst();

// async js example

// humSecond=()=>{
//     setTimeout(()=>{
//         console.log("dusra be");
//     }, 3000)
// }

// const humFirst=()=>{
// console.log("pehla dusra");
// humSecond();
// console.log("teesra hu be");
// }

// humFirst();


// event loop

/*
jab bhi async ya closure hota hai to her ek function ka global execution stack space milta hai..

ooper ke async code me , jab humfirst() chala tab EXECUTION CONTEXT me ek space mila use,

fir pehla console ko bhi EXECUTION CONTEXT space mila, or pehla print hua, print hone ke baad hi space released ho gaya.

fir husecond function execute hota h to use bhi EXECUTION CONTEXT space mila, or wo jab apni definition me gaya to us settiomeout function dikha...

set time out function web API me aate hain to , use web api space me bhej diya gaaya, or usne waha 2 second wait krna start ker diya..

usi beech humsecond ka EXECUTION CONTEXT space release ho gaya..

or tabhi dusra console dikha orprnt hua or humfirst waa function poori trh EXECUTION CONTEXT space se release ho gya..


jaise hi set time out ka wait poora hota h tbhi uska console bhi execute ho jata hto or wo message queue me chala jata hai..

or tab wo message queue se wo EXECUTION CONTEXT space me chala jata h use event looping lehte hain...


*/