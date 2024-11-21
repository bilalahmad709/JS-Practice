document.write("<h2>map() Method :</h2>");

let myArray = [2,3,4,5,8,9,10];

let b = myArray.map((val)=>{
    return val*2;
});
document.write(b);

