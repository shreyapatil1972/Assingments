
student = {
    name:'Shreya',
    age: 23,
    grade: 'A',
}
student.subject = "math"
console.log(student)
student['grade'] = 'A+'
console.log(student)
delete student.grade
console.log(student)


book = {
    title:'Rich Dad Poor Dad',
    author:'Robert Kiyosaki',
    detail: {pages : 300,genre:'XYZ'}
}
console.log(book.detail)

product = {
    name:'tshirt',
    price:300,
    stock:'In Stock'
}

for(let key in product ){
        console.log(key)
       console.log(product[key])
    }

person1 = {
    name:'John',
    age: 25,
}
person2 = {
    name:'Jane',
    age: 30,
}
console.log(person1==person2)

 if(person1===person2){
     console.log("same")
   }else{
     console.log("not same")
 }

 x = prompt("enter the first number:")
 y = prompt("enter the second number:")

calculator = {
   add: function(a,b){
       return a+b;
   },
   subtract: function(a,b){
       return a-b;
   },
   multiply: function(a,b){
       return a*b;
   },
   divide: function(a,b){
       return a/b;
   }
}
console.log(calculator.add(2,3))
console.log(calculator.subtract(10,7))
console.log(calculator.multiply(4,6))
console.log(calculator.divide(15,3))