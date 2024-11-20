// return function example 1
function MyreturnFtn(a,b){
   var c= a+b;
   return c;
}

var result= MyreturnFtn(10,20);
document.write(result);

// return function example 2

function secondfunction(val1,val2,val3){
 return answer = val1 * val2 * val3;
}
document.write("<br> The multiplication of three values are : " + secondfunction(2,3,4));

// return function example 3
function thirdFtn(a,b){
    fullname= a + b;
    return fullname;
}
let myName = thirdFtn(2 , 9);
document.write("<br>" + myName);

//multiplication function 
function mul(a,b){
    return a+b;
}
let a = mul(20,30);
document.write("<br><br>The multiplication of a and b is :  " + a);

//addition function

function add(b,c){
    return b + c;
}
let addition = add (20,29);
document.write("<br> The addition of b and c is : " + addition);


//arrow function
//short way of wrting functions
//syntax is given below
// (a,b)=>{
//   return a + b;
//   }

document.write("<h3>Usinng Arrow function</h3>");

// arrow function for addition
let sum=(a,b)=>{
document.write("<br> The addition of 'a' and 'b' is : " + (a+b) );
}
sum(10,20);

// arrow function for division

 div=(x,y)=>{
    return x/y;
}
let division = div(20,2);
document.write("<br> The division of two values is :" + division);

