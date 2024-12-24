// return function example 1
function MyreturnFtn(a, b) {
    var c = a + b;
    return c;
}

var result = MyreturnFtn(10, 20);
document.write(result);

// return function example 2

function secondfunction(val1, val2, val3) {
    return answer = val1 * val2 * val3;
}
document.write("<br> The multiplication of three values are : " + secondfunction(2, 3, 4));

// return function example 3
function thirdFtn(a, b) {
    fullname = a + b;
    return fullname;
}
let myName = thirdFtn(2, 9);
document.write("<br>" + myName);

//multiplication function 
function mul(a, b) {
    return a + b;
}
let a = mul(20, 30);
document.write("<br><br>The multiplication of a and b is :  " + a);

//addition function

function add(b, c) {
    return b + c;
}
let addition = add(20, 29);
document.write("<br> The addition of b and c is : " + addition);


//arrow function
//short way of wrting functions
//syntax is given below
// (a,b)=>{
//   return a + b;
//   }

document.write("<h3>Usinng Arrow function</h3>");

// arrow function for addition
let sum = (a, b) => {
    document.write("<br> The addition of 'a' and 'b' is : " + (a + b));
}
sum(10, 20);

// arrow function for division

div = (x, y) => {
    return x / y;
}
let division = div(20, 2);
document.write("<br> The division of two values is :" + division);

//simple arrow function
bilal = () => {
    document.write(" <br>Hi there, I am learning JS");
}

bilal();
bilal();
bilal();

//simple arrow function 

let  hilal = () => {
    document.write("<br><br>I am Hilal Azam Banori");
}

hilal();
hilal();
hilal();

//function for counting vowels

function countVowels(str) {
    let count = 0;
    for (const charr of str) {
        if (
            charr === "a" || charr === "e" || charr === "i" || charr === "o" || charr === "u"
        ) {
            count++;
        }
    }
    document.write("<br> <br>The number of volwels in the " + str + " is  :" + count);
}

countVowels(" Peshawar");
countVowels("ali");

//function for counting one's/ 1's in the integer

function myint(int) {
    count = 0;
    for (let one of int) {
        if (one === "1") {
            count++;
        }
    }
    document.write("<br><br> The number of 1's in the given " + int + " is :" + count);
}
myint("683682911111");
myint("2389911119111111");
myint("798989337");

document.write("<h3>Now same task using arrow function</h3>");

//function for counting number of B's (b)

numbofB = (str) => {
    count = 0;
    for (let charb of str) {
        if (charb === "b" || charb === "B") {
            count++;
        }
    }
    document.write("<br> The number of B/b in the Given word " + "'" + str + "'" + " is : " + count);
}
numbofB("dhjsb");
numbofB("My name is Babar Badsha");

// higher order function

// return and document.write  explain
function khan(a, b){
    let num1 = a;
    let num2 = b;
    c = num1 + num2;
    return c;
}

let additionr = khan (10,20);
document.write("<br> The addition in return is :  " + additionr);


 function khan2(a,b){
    let num1 = a;
    let num2 = b;
    c = num1 + num2;
    document.write( " <br> The addition of two numbers is : " +  c);
 }

khan2(2,3);

twonum=(num1,num2)=>{
    let result = num1 +num2;
    return result;
}
let addtwonum= twonum(20,40);
document.write("<br> The addition of two numbers is : " + addtwonum);

// user logged in example 

userloggedIn=(username)=>{
    return `<br><br><b>${username} </b>logged in successfully`;
}
document.write(userloggedIn("Bilal"));
document.write(userloggedIn("zahid"));

//rest operator

restFtnAddcart=(...num)=>{
    let total=0;
    for(i of num){
        total+=i;
    }
    return total;
}
document.write( "<br> The Total of the values are :  " + restFtnAddcart(20,20,30));

//function with objects

document.write(" <br> <h2>function with Ojects</h2>");

const user = {
    name: "shah sahib",
    age : 23,
    email : "shah123@gmail.com"
}
const user2={
    name: "ali sahib",
    age : 20,
    email : "ali123@gmail.com"
}
handleobject=(anyobject)=>{
    document.write(`<br> The user is <b>${anyobject.name}</b>, his age is 
    <b>${anyobject.age}</b> and his email is ${anyobject.email}.`);
}
handleobject(user);
handleobject(user2);

//we can pass the object as well

handleobject({
    name: "atif sahib",
    age : 19,
    email : "atif123@gmail.com"
})

// functions with arrays
const myArray = [20, 30, 40, 50, 60, 70];

MyarrayFunction= (any)=>{
    document.write(" <br>targetting the second value from the array is : " + any[1]);
}
MyarrayFunction(myArray);

// we can pass value inside function
document.write("<br><h3>We can pass value inside function</h3>");
MyarrayFunction([
    30,55,45,35
]);