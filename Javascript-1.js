// Numbers
let x = 7
let y = 9
sum = x + y
difference= x - y
multiply = x * y
divide = x / y
console.log("the sum of x and y is",sum)
console.log("the difference of x and y is",difference)
console.log("the multiply of x and y is",multiply)
console.log("the divide of x and y is",divide)

// strings
let favoritMovie = "3 Idiot";
let message = "I Love Watching" + " " +favoritMovie;
console.log(message);

// Booleans
let number = 8
if(number%2==0){
    console.log("True");
}else{
    console.log("False");
}

// Object
let favoritAnimal = {name:"buddy",type:"dog",age:3,isFriendly:"yes"}
console.log("Animal name is:",favoritAnimal.name);

// Arrays
let favoritColor = ['Red','Blue','Orange','Pink','purple']
favoritColor.push('yellow')
console.log("After Adding ",favoritColor)
favoritColor.pop()
console.log("After removing last ",favoritColor)

// Undefined and Null
let mystery; 
console.log("Value:", mystery,"Type:",typeof mystery)
mystery=null
console.log("Value:", mystery,"Type:",typeof mystery)

// BigInt
let bignumber = 634968826481024081264086n;
console.log("Type:",typeof bignumber);
console.log(bignumber*2n);

// Symbol
let symbol1 = Symbol("unique");
let symbol2 = Symbol("unique");
console.log(symbol1==symbol2);