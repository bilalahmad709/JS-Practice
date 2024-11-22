
// filter method 
document.write("<h3>Filter method</h3>")
let studentsMarks= [55,67,87,87,98,94,33];

const toppers= studentsMarks.filter((val)=>{
    return val > 80 ;   
});

document.write("<br> The marks list is : " + studentsMarks + "<br>");
document.write("<br> The Toppers are : " + toppers);

// Question 2
// take a number n as input from user. Create an array of numbers from 1 to n. 
// use the reduce method to calculate sum of all numbers in the array
// use the reduce method to calculate product of all numberss in the array

document.write("<br><br>Taking the value from the user to store in array <br>");
let usernum= prompt("enter a number");

let arr = [];

for (let i=1; i<=usernum;i++ ){
    arr[i-1]=i;
}
document.write("<br>" + arr);

//printing the sum of the above array

let sum =  arr.reduce((pre,cur)=>{
    return pre + cur;
});
document.write("<br> the sum of the complete array is : " + sum);

// printing the product of the above array
let prod = arr.reduce((pre, cur)=>{
    return pre * cur;
});

document.write("<br><br> The product of the above array is : " + prod);