// string
// let names="ashutoshprasad2427@gmail.com"
// console.log(names);

// finding string in a string
// let find=names.indexOf("@gmail.com");
// if(find === -1){
//     console.log("invalid email");
// }

// finding from last
// let names="ashutosh@gmail.comprasad2427@gmail.com";
// console.log(names.lastIndexOf("@gmail.com"));
// it gives last found element.

// searching for string
// let mail="ashu@gmail.com";
// console.log(mail.search(".com"));
// it return index of element, but it won't take another argument like indexOf().

// A. extracting String from String
// 1. slice(start, end-1)
// it return sliced string s new string.
// let full_name="ashutosh prasad";
// console.log(full_name.slice(0,8));


// challenge
// display only 50 characters in output.
// let demodata="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc venenatis blandit egestas. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec laoreet maximus elementum. Nam eu mollis justo. Donec laoreet quis dui at dapibus. Donec magna libero, aliquet a lacus sit amet, semper ullamcorper velit. Pellentesque euismod pharetra magna a "
// console.log(`actual length = ${demodata.length}`);
// let newdata= demodata.slice(0,50);
// console.log(newdata);
// console.log(`new length = ${newdata.length}`);

// 2. substring(start, end-1)
// let str="ashutosh prasad";
// console.log(str.substring(0,8));
// it will return string from 0 to 8th index.
// console.log(str.substring(0,-8));
// it will give nothing, because negative indexing is not allowed on substring(), if you give then it consider first parameter as ending index. and ignore second parameter


// 3. substr()
// simillar to slice(), but substr() second parameter is the length of string.
// when you give it a negative param then it returns nothing. By default starting is 0.
// let word="ashu tosh prasad";
// let newArray=word.substr(0,15);
// console.log(newArray);

// 3.1. check valid/invalid gmail.
// let mail="ash@gmail.com"
// if(mail.substr(-10) != "@gmail.com"){
//     console.log("invalid id");
// }
// else{
//     console.log("valid id");
// }

// 4. replace()
// it replace only first match in the string. and return new array, without altering original array.
// let words="my name is ashutosh, only ashutosh";
// console.log(words.replace('ashutosh','Ashutosh'));

// B. extracting string character .
// 1. charAt(), return character position, use for find character in a string.
// let count='one two three';
// console.log(count.charAt(2));

// 2. charCodeAt(), returns UNI-code of the characters.
// let count='oneA two three';
// console.log(count.charCodeAt(3));

// challenge
// return charcode of last character.
// let question="what is the this keyword in js";
// let lengthOfString=question.length;
// console.log(`lenght of string= ${lengthOfString}`);
// console.log(`character at the end = ${question.charAt(lengthOfString-1)}`);
// console.log(`and its character code = ${question.charCodeAt(lengthOfString-1)}`);

// 3. property access, is look like an array but its string.
// let ashu='ashutosh'
// for(var i=0;i<ashu.length;i++){
//     console.log(ashu[i]);
// }

// 4.trim(), remove space before/after the string.
// let str="   asdas   ";
// console.log(str.trim(str));

// 5. split(), convert string into array.
// let strs1="ashutosh";
// console.log(strs1.split(","));
// let strs2="ashu,tosh";
// console.log(strs2.split(","));

