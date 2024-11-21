document.write("<h3>reduce method in js</h3>");
document.write("Reduce method id used to perform some operations & Reduces the Array to a single value. It Returns that single value.");

//printing the sum of array values

let arr =[ 2,3,5,7,4];
const sum= arr.reduce((pre,curr)=>{
    return pre + curr;
});
document.write("<br>The array is " + arr);
document.write("<br> The sum of the complete array is :" + sum);

//printing the largest number of an array

let findlarge= [2,3,4,7,8,77];

const largenum= findlarge.reduce((pre, curr)=>{
    return pre > curr ? pre :curr;
});

document.write("<br><br>The array is : "+ findlarge);
document.write("<br> The largest number is : " + largenum);

//printing the smallest number of an array

let findsmall = [3,4,5,6];
const  smallnum= findsmall.reduce((pre,cur)=>
{
    return pre < cur ? pre : cur;
});

document.write("<br><br> The array is : " + findsmall);
document.write("<br> the smallest number is : " + smallnum);
