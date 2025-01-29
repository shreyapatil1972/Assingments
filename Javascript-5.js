// factorial number
function factorical(n){
    result=1
    for(i=1;i<=n;i++){
        result *= i;
    }
    return result;
}
console.log("factorical of 5:",factorical(5))

// even odd
function iseven(n){
    return n%2 === 0 ? "even":"odd"
}
console.log("8 is:",iseven(8))

// reverse the string
function reversestring(str){
    let reversed= " "
    for(let i=str.length-1;i>=0;i--){
        reversed += str[i];
    }
    return reversed;
}
console.log("orange reversed:",reversestring("orange"))

// largest of three number
function largestnum(a,b,c){
    if(a>b && a>c) return a;
    else if(b>a && b>c) return b;
    return c 
}
console.log("largest of (10,15,2):",largestnum(10,15,2))


// summ of array
function arraysum(arr){
    let sum =0;
    for(i=0;i<arr.length;i++){
        sum += arr[i];
    }
    return sum;
}
console.log("sum of arr[6,8,12,53,11]:",arraysum([6,8,12,53,11]))


// area and perimeter
function rectangle(length,width){
    const area = length * width;
    const perimeter = 2 * (length + width);
    return{area,perimeter};
}
const {area,perimeter} = rectangle(5,3)
console.log("area",area)
console.log("perimeter",perimeter)


// check leap year
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}
console.log("2000 is a leap year:", isLeapYear(2000)); 

// Multiplication table
function multiplication(num){
    for(i=1;i<=10;i++){
        console.log(`${num} * ${i} = ${num*i}`);
    }
}
multiplication(5)

// Palindrome
function palindrome(str){
    let reverse = ""
    for(let i=str.length-1;i>=0;i--){
        reverse += str[i];
    }
    return str === reverse
}
console.log("is 'hello' a palindrome:",palindrome('hello'))
console.log("Is 'radar' is :",palindrome('radar'))


// GCD
function GCD(a,b){
    while(b != 0){
        let temp= b;
        b = a%b;
        a=temp;
    }
    return a;
}
console.log("gdc of 12 and 21",GCD(12,21))
