let myArray =[10,20,30,40,50,60,70,80,90,100];

document.write(myArray);

document.write("<h3>Using (for loop) for printing Arrays</h3>");
// Using for loop
for(let k=0;k<myArray.length;k++){
    document.write(myArray[k] +"<br>");
}
document.write( "The addition of values of index 2 and index 4 is :" +(myArray[2]+myArray[4]));

document.write("<h3>Using (for of loop) for printing Arrays</h3>");

// using for of loop
for(let element of myArray){
    document.write( "<br>" + element );
}

