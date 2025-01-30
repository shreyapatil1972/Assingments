// count number of vowels
// function countvowels(str){
//     let count = 0
//     vowels = "aeiouAEIOU"
//     for(let i=0;i<str.length;i++){
//        if(vowels.includes(str[i])){
//         count++;
//        }
//     }
//     return count;
// }
// console.log("the no. of vowels are:",countvowels("Hello World"))


// palindrom or not
// function palandrom(str){
//     let reversed = ""
//     for(i=str.length-1;i>=0;i--){
//         reversed += str[i]
//     }
//     return str = reversed
// }
// console.log("reverse of string:",palandrom("reverse of string:"))


// get the first word of sentence
// function getfirstword(str){
//     firstword = ""
//     for(i=0;i<str.length;i++){
//         if(str[i]===" ")break;
//         firstword += str[i]
//     }
//     return firstword;
// }
// console.log("the first word is:",getfirstword("beautifull ladie"))

// replace spaces with -
// function replace(str){
//     result = "";
//     for(i=0 ; i<str.length;i++){
//         result += str[i] === " " ? "-" : str[i];
//     }
//     return result;
// }
// console.log(replace("hello world from Javascript."))

// split the string into array of words
// function splitword(str){
//     word = []
//     currentword = " "
//     for(i=0;i<str.length;i++){
//         if(str[i]===" "){
//             word.push(currentword)
//             currentword = "";
//         }else{
//             currentword += str[i]
//         }
//     }
//     if(currentword) word.push(currentword);
//     return word;
// }
// console.log(splitword("the string in javascript"))


//  convert the first letter of each word to uppercase
// function capitalizationwords(str){
//     result = ""
//     capitalizenext = true;
//     for(i=0;i<str.length;i++){
//         if(str[i]===" "){
//             result+=" ";
//             capitalizenext = true;
//         }else if(capitalizenext){
//             result += str[i].toUpperCase();
//             capitalizenext = false;
//         }else{
//             result +=str[i]
//         }
//     }
//     return result;
// }
// console.log(capitalizationwords("hello world is the first programe to execute"))


// reverse the characters in string
// function reversestring(str){
//     reverse = ""
//     for(i=str.length-1;i>=0;i--){
//         reverse += str[i]
//     }
//     return reverse
// }
// console.log(reversestring("happy"))


// count the no of occurence of specific character
// function countchar(str,char){
//     count = 0 
//     for(i=0;i<str.length;i++){
//         if(str[i]===char){
//             count++
//         }
//     }
//     return count;
// }
// console.log(countchar("hello word","o"))


// remove all non-alphanumeric characters
// function removenonalpha(str){
//     result = "";
//     for(i=0;i<str.length;i++){
//         if((str[i] >= "a" && str[i] <= "z") || (str[i]>="A" && str[i] <= "Z") || (str[i] >= "0" && str[i]<= "9")){
//             result += str[i];
//         }
//     }
//     return result
// }
// console.log(removenonalpha("hello world"))

// check is string start and end with same charater
// function startandend(str){
//     if(str.length===0)return false;
//     return str[0]===str[str.length - 1]
// }
// console.log(startandend("radar"))