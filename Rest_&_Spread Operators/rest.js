// rest operator

//In JavaScript, the rest operator (...) is a way to collect multiple elements or arguments into a single array or object. It’s useful when you don’t know how many arguments will be passed to a function or when you want to handle the "rest" of the data separately.

// old method (we used arguments)
function sum(){
    let sum = 0;
    for(let i in arguments){
        sum +=arguments[i];
    }
    document.write("The submition of the values using old rest operotor is : " + sum + "<br><br>");
};

sum(10,20);

// advance method (advance method)

const submition = (...args)=>{
    let total=0;
    for(let val of args){
        total += val;
    }
    document.write("The sumof values using (...arg) rest operator with arrow function is : " + total);
}
submition(12,12);

// second example of rest operator with arrow fuction

const multiplication=(...vals)=>{
    let total = 2;
    for(let i of vals){
        total*=i;
    }
    document.write("<br><br> The Multiplication of value with two is : " + total);
}
multiplication(2,3,5);