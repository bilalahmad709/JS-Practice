const hii = ["ali", "zahid", 1];
for(let value of hii ){
    document.write( value , "<br>");
}

document.write("<br>")
// js Object as a data type

const user={
    name: "Bilal Ahmad",
    f_name : " Ismail Khan",
    email : "bilal123@gmail.com",
}

// targetting only one value
document.write(user.name , "<br>");

// targetting all values
for( let key in user){
    document.write(`${key} :  ${user[key]}  <br>`);
}

document.write("<br><br>");

// function inside object
const myData = {
    name : "Ali Raza",
    class : "10th",
    Age :  23,
    Result : false,
    hobby : function(){
        document.write("He used to play cricket");
    },
}


for (let keys in myData) {
    if (typeof myData[keys] === "function") {
        document.write(`${keys} : `);
        myData[keys](); // Call the function
        document.write("<br>");
    } else {
        document.write(`${keys} : ${myData[keys]} <br>`);
    }
}

// object inside object
document.write("<br><br> <h3>object inside object </h3>");
const nestedObj = {
    name : "ali",
    age : 22,
    email : "ali123@gmail.com",
    subjects :[
        "Urdu", 
        "English",
        " Science"],
    marks : {
        urdu : 78,
        english :89,
        science : 88,
    },
}

for (let val in nestedObj) {
    if (typeof nestedObj[val] === "object" ) {
        document.write(`${val}: <br>`);
        for (let subKey in nestedObj[val]) {
            document.write(`${nestedObj[val][subKey]} <br>`);
        }
    } else {
        document.write(`${val} : ${nestedObj[val]} <br>`);
    }
}
document.write("<br><br>");
//IMPORTANT NOTE

// the class keyword is not strictly necessary to define a class in JavaScript. Before ES6 introduced the class keyword, JavaScript used functions to create objects and simulate classes. This approach is still valid and widely used in some cases.

//

// The below is a class
class hello{
    message(){
        document.write("I am Learning OOPs");
    }

    sorry(){
        document.write("<br> Sorry OOps is very dangrous");
        console.log("hello")
    }
}

// if I want to call it , then i have to make an object of this class
// whenever i want to call the class, then i have to use object name.

let classObject = new hello();
classObject.message();
classObject.sorry();

//second example of class
class car{
    constructor(brand, color){
        this.brand = brand;
        this.color = color;
    }
    drive(){
        document.write(`<br>${this.color} ${this.brand} is driving`);
    }
    sold(){
        document.write(`<br> <br>The ${this.color} Jeep sold to someone. beacause he likes ${this.brand} company's car`);
    }
}

const myCar = new car("Mehran", "white");
myCar.drive();
const soldCar = new car ("TOYOTA" , "Black");
soldCar.sold();

//third example of the class
class calculation{
     constructor(num1, num2){
        this.a = num1;
        this.b = num2;
     }
     add(){
        let c = this.a + this.b;
        return c;
     }
     sub(){
        let c = this.b - this.a;
        return c;
     }
}
const addition = new calculation( 20, 30);
document.write(`<br><br> The addition of ${addition.a} and ${addition.b} is :`  + addition.add());

const subtraction = new calculation(10, 20);
document.write(`<br><br> The subtraction of ${subtraction.a} and ${subtraction.b} is : ` + subtraction.sub());

//fourth example of class and object
class Student {
    constructor(name, id, age, section, timing) {
        this.name = name;
        this.id = id;
        this.age = age;
        this.section = section;
        this.timing = timing;
    }

    // Method to return student details as a formatted string
    details() {
        return `
        Name: ${this.name} <br>
        ID: ${this.id} <br>
        Age: ${this.age} <br>
        Section: ${this.section} <br>
        School Timing: ${this.timing} <br>
        `;
    }
}

// Creating instances of the Student class
const student1 = new Student("Bilal", 1, 23, "A", "8:00 AM To 2:00 PM");
const student2 = new Student("Zahid", 2, 24, "B", "9:00 AM To 8:00 PM");

// Writing student details to the document
document.write(`<h3>Student 1 Details:</h3>${student1.details()}`);
document.write(`<h3>Student 2 Details:</h3>${student2.details()}`);

//fifth example of class constructor
class hero{
    constructor(name, age, address){
        this.name= name;
        this.age= age;
        this.address= address;
    }
}
const myHero= new hero("Bilal", "24", "peshawar");
document.write(`<br><br>Name: ${myHero.name}, Age: ${myHero.age}, Address: ${myHero.address} <br>`);
//example of another class

class student{
    constructor(name){
        this.name = name;   
    }
    hello(){
        document.write(`<br> Hello ${this.name}`);
    }
}
let a = new student();
a.name= "Ahmad ali";
a.hello();
let b = new student("Mubasher");
b.hello();

//inheritance in JS
//inheritance is passing down properties & methods from parents to child class

//  NOTE : if child and parent have same methods, child's method will be used. and this called " Method Overriding ";

//inheritance 1st example 
class Animal {
    makeSound() {
        console.log("Some generic animal sound");
    }
}

class Dog extends Animal {
    makeSound() {
        console.log("Bark");
    }
}

let dog = new Dog();
dog.makeSound(); // Output: Bark

//inheritance 2nd example 
class calculate{
    constructor(num1,num2){
        this.number1=num1;
        this.number2=num2;
    
    }
    add(){
       let Result = this.number1 + this.number2;
       document.write(`<br> The addition of two number is :` + Result);
    }
}

let addCalculate= new calculate(10,20);
document.write(addCalculate.add());


