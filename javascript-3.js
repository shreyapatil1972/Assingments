number = 5
factorical = 1
for(i=1;i<=5;i++){
    factorical *= i
}
console.log(factorical)


a = prompt("enter a number")
if (a<0){
    console.log("number is negative")
}else if(a>0){
    console.log("number is positive")
}else{
    console.log("number is zero")
}


let sum = 2;
for (let i = 1; i <= 10; i++) {
  console.log(`${sum} * ${i} = ${sum * i}`);
}
for(i=1;i<=20;i++){
    console.log(`${i} is ${i%2==0 ? 'event':'odd'}`)
}


let number = 123;
let sumdig = 0;
do {
  let digit = number % 10; 
  sumdig += digit;           
  number = Math.floor(number / 10);  
} while (number > 0);
console.log("The sum of the digits is: " + sumdig);


number = 25
gessNumber = prompt("Guess the number:")
if(gessNumber==number){
  console.log("You guessed correct number..")
}else if(gessNumber !== number){
  gessNumber = prompt("Guess the Another number")
}


for(i=1;i<=20;i++){
  if(i%2==0){
    console.log(`${i}`)
  }
}



for(i=1;i<=50;i++){
  if(i%3!==0 && i%5!==0){
    console.log(`${i}`)
  }else if(i%5!==0 && i%3==0){
    console.log("Fizz")
  }else if(i%3!==0 && i%5==0){
    console.log("Buzz")
  }else if(i%3==0 && i%5==0){
    console.log("FizzBuzz")
  }
}



function isPrime(n) {
  if (n <= 1) return false; 
  if (n === 2) return true; 
  if (n % 2 === 0) return false;
  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) return false;
  }
  return true;
}
const num = 37
if (isPrime(num)) {
  console.log(`${num} is a prime number.`);
} else {
  console.log(`${num} is not a prime number.`);
}


a = 44
b = 17 
c = 10
if(a>b && a>c){
  console.log(`${a}`,"Is Largest number")
}else if(b>a && b>c){
  console.log(`${b}`,"Is Largest number")
}else{
  console.log(`${c}`,"Is Largest number")
}


for(i=1;i<=5;i++){
  console.log('*'.repeat(i))
}


str = "madam"
reversed = ""
for(i=str.length-1;i>=0;i--){
  reversed += str[i]
}
if(str==reversed){
  console.log(`${str}`,"is a Palindrome")
}else{
  console.log(`${str}`,"is not a Palindrome")
}


str = "hello World"
let vowelcount = 0
let conconantcount = 0
vowels = "aeiouAEIOU"
for (let i = 0; i < str.length; i++) {
  if (vowels.includes(str[i])) {
    vowelcount++
  }else(
    conconantcount++
  )
}
console.log(`vowels:${vowelcount}`)
console.log(`consonants:${conconantcount}`)


let number1 = "12345"
let reverse = ""
let i = number1.length - 1
while(i>=0){
  reverse += number1[i]
  i--
}
console.log(reverse)

evenCount = 0
oddCount = 0
for(i=1;i<=100;i++){
  if(i%2==0){
    evenCount+= i
  }else{
    oddCount+= i
  }
}
console.log(`${evenCount}is sum of even numbers.`)
console.log(`${oddCount}is sum of odd numbers.`)

num = 5
factorial = 1
i = num 
while(i>0){
  factorial *= i
  i--
}
console.log(factorial)

numbersEntered = [10,20,30,40]
count = numbersEntered.length
sum = 0
for(i=0;i<numbersEntered.length;i++){
  sum += numbersEntered[i]
}
average  = sum / count
console.log(`sum: ${sum}`)
console.log(`Average: ${average}`)

year = 2024
if((year%4==0 && year%100!==0) || (year % 400 === 0)){
  console.log(`${year} is leap year`)
}else{
  console.log(`${year} is not leap year`)
}

number = 12
divisor = []
for(i=1;i<=number;i++){
  if(number%i===0){
    divisor.push(i)
  }
}
console.log(`Divisors of ${number} are: ${divisor}`);


let n = 10;  
let fibonacciSequence = [0, 1];
for (let i = 2; i < n; i++) {
  fibonacciSequence.push(fibonacciSequence[i - 1] + fibonacciSequence[i - 2]);
}
console.log(`Fibonacci sequence up to ${n} numbers: ${fibonacciSequence}`);

 num = 12
 sum = 0
 orignalnum = num
 n = num.toString().length;
 while(num>0){
  digit = num%10;
  sum += Math.pow(digit,n)
  num=Math.floor(num/10)
 }
if(sum == orignalnum){
  console.log(`${orignalnum} is armstrong number`)
}else{
  console.log(`${orignalnum} is not a armstrong number`)
}

function generatePattern(n) {
    let pattern = "";
    for (let i = 1; i <= n; i++) {
        let line = "";
        for (let s = 1; s <= n - i; s++) {
            line += " ";
        }
        for (let j = 1; j <= i; j++) {
            line += j;
        }
        for (let j = i - 1; j >= 1; j--) {
            line += j;
        }
        pattern += line + "\n";
    }
    return pattern;
}

document.getElementById("pattern").innerText = generatePattern(5);