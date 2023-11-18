// Array Spread Operator
// it is denoted with three dots(...)
// syntax is ...<array_name>
// it is used when an array already have data which is going tow ritten on other place, then we have to wertie only ...<arraName> only

let fruitBasket=[
    'orange',
    'grapes',
    'mango',
    'papaya',
];
console.log(fruitBasket);

let newBasket=[
    'orange',
    'grapes',
    'mango',
    'papaya',
    'dragon fruit',
    'banana'
];
console.log(newBasket);
// instead of re-writing the fruits we can do this....
let anotherNewBasket=[
    ...fruitBasket,
    'dragon fruit',
    'banana'
];
console.log(anotherNewBasket);
// this way we can not violate DRY property...