//for loop
document.write("<h4>Using for loop</h4>");

for (let i = 1; i <= 5; i++) {
    document.write("i =" + " " + i + "<br>");
}

// print all even numbers from 0 to 100
for (let j = 1; j <= 20; j++) {
    if (j % 2 === 0) {
        document.write(j + " " + "Is even num" + "<br>");
    }
    else if (j % 2 !== 0) {
        document.write(j + " " + "Is odd num" + "<br>");
    }

}

// While loop
document.write("<h4>Using while loop</h4>");

let a = 1;
while (a <= 5) {
    document.write(" a =" + " " + a + "<br>");
    a++;
}

// Do-while loop
document.write("<h4>Using Do-while loop</h4>");

let count = 1;
do {
    document.write(count + " " + "=" + " " + "welcome" + "<br>");
    count++;
} while (count <= 5);

// for-of loop
document.write("<h4>Using for-of loop</h4>");
document.write("for-of loop is used for strings and Arrays.  <br> There is No Initialization, No updation nor any condition as well <br>");
let str = "Welcome";
for (let val of str) {

    document.write("val =" + " " + val + "<br>");
}
document.write(str + "<br>");

//for-in loop
document.write("<h4>Using for-in loop</h4>");
document.write("for-in loop is used to print an object. <br> <br>");
let students = {
    name: "Bilal Ahmad",
    age: 23,
    class: "Graduate",
    email: "bilalgdhg@gmail.com"
};
for (key in students) {
    document.write(key + " : " + students[key] + "<br>");
}

// forEach loop 
document.write("<h4>Using forEach loop</h4>");
document.write("forEach loop is used to print an Array. <br> <br>");


//function inside forEach method
document.write("function inside forEach method <br> <br>");
let myArray = [22,33,43,12,24,78];
myArray.forEach( function (value, index){
    document.write(index + " : " + value + "<br>");
});

//forEach loop
document.write("<h4>function outside forEach method </h4> <br>");

let myArr = [22,33,43,12,24,78];
myArr.forEach(loopftn);

function loopftn(value, index){
    document.write(index + " : " + value + "<br>");
}

//quiz
// for a given array of numbers, print the square of each value using the for Each loop.

let squareArray = [2,3,4,5,6,8];

squareArray.forEach(squareFunction);
function squareFunction(val, index){
    document.write(index + " : " + "The value is =" + val + " The square is : " + val**2 + "<br>" );
}