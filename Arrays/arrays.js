// // // // let myArray =[10,20,30,40,50,60,70,80,90,100];

// // // // document.write(myArray);

// // // // document.write("<h3>Using (for loop) for printing Arrays</h3>");
// // // // // Using for loop
// // // // for(let k=0;k<myArray.length;k++){
// // // //     document.write(myArray[k] +"<br>");
// // // // }
// // // // document.write( "The addition of values of index 2 and index 4 is :" +(myArray[2]+myArray[4]));

// // // // document.write("<h3>Using (for of loop) for printing Arrays</h3>");

// // // // // using for of loop
// // // // for(let element of myArray){
// // // //     document.write( "<br>" + element );
// // // // }

// // // // //arrays , string, number


// // // // let myName = "Aziz";
// // // // let a = typeof(myName);
// // // // console.log(a);

// // // // let num = 10;
// // // // let c = typeof(num);
// // // // console.log(c);

// // // // const names = ["Bilal", "atif", "ali"];

// // // // let b= typeof(names);
// // // // console.log(b);

// // // // // array methods


// // // // // find method
// // // // const ages = [ 20,22,24,26,28];
// // // // document.write("<br><br> The Ages are :" + ages + "<br>");

// // // // let adult = ages.find(checkAdult);

// // // // document.write("<br> The adult one using find() function is : " + adult);

// // // // function checkAdult(age){
// // // //     return age >= 20;
// // // // }

// // // // // findindex
// // // // const aGes = [ 20,22,24,26,28];
// // // // document.write("<br><br> The Ages are :" + ages + "<br>");

// // // // let aDult = ages.findIndex(checkindex);

// // // // document.write("<br> The index valueof  adult one using findindex() function is : " + aDult);

// // // // function checkindex(age){
// // // //     return age >= 20;
// // // // }

// // // // // finding the largest number without using builtin function

// // // // const Mynumbers= [10,12,23,21,32,11];

// // // // document.write(" <br><br> The numbers of the Array is : " + Mynumbers);
// // // // let largestNum= Mynumbers[0];

// // // // for (let i = 1 ; i < Mynumbers.length; i++) {
// // // //     if(Mynumbers[i] > largestNum){
// // // //         largestNum = Mynumbers[i];
// // // //     }
// // // // }
// // // // document.write(" <br><br>The largest number is : " , largestNum);

// // // // //smallest number
// // // // document.write("<br><br> Printing the smallest number of an array <br>");

// // // // const smallNum = [12, 21, 33, 41, 22, 4];

// // // // let smallestnum = smallNum[0]; 

// // // // for (let i = 1; i < smallNum.length; i++) {
// // // //     if (smallNum[i] < smallestnum) {
// // // //         smallestnum = smallNum[i]; 
// // // //     }
// // // // }

// // // // document.write("<br>Smallest number is: ", smallestnum);

// // // // another example of finding the largest number

// // // // const findlarge = [10,20,30,40,50];
// // // // let  largNum= findlarge[0];

// // // // for (i = 1;  i < findlarge.length; i++){
// // // //     if(findlarge[i] > largNum){
// // // //         largNum = findlarge[i];
// // // //     }
// // // // }

// // // // console.log("largNum", largNum)

// // // // // large number using while loop

// // // // const marks = [ 78, 98,90,67,56];
// // // // let maxMarks = marks[0];
// // // // // while loop
// // // // let i = 1;
// // // // while(i<marks.length){
// // // //     if(marks[i] > maxMarks){
// // // //         maxMarks = marks[i];
// // // //     }
// // // //     i++;
// // // // }
// // // // document.write("The largest number is : " + maxMarks);

// // // // finding hieghest marks
// // // const  marks = [ 87, 98,65, 75, 77, 88];

// // // let maxMarks = marks[0];

// // // for( i = 1; i < marks.length; i++){
// // //     if(marks[i] > maxMarks){
// // //         maxMarks = marks[i];
// // //     }
// // // }

// // // document.write("The Hieghest marks is : " , maxMarks);

// // // // finding lowest grade
// // // const grade = [87,88,71,95,97];
// // // let lowestgrade = grade[0];

// // // for( i = 1 ; i < grade.length; i++){
// // //     if( grade[i] < lowestgrade){
// // //         lowestgrade = grade[i];
// // //     }
// // // }
// // // document.write("<br> The lowest grade is : " , lowestgrade);

// // //finding length of an array

// // // const myarray = [10, 20 ,30, 40 , 60 , 80, 90, 100];
// // // arrLength = 0;
// // // for( let value of myarray){
// // //     document.write("The numbers are :" , value , "<br>");
// // //     arrLength++;
// // // }

// // // document.write("<br> The length of the array is : " , arrLength);

// // // printing for loop

// // // document.write("Printing loop in assending order <br>");
// // // for(i=1 ;i<=10; i++){
// // //     document.write(i, " ");
// // // }

// // // // decending order
// // // document.write(" <br><br>Printing loop in decending order <br>");

// // // for (let i=10 ; i>=1; i--){
// // //     document.write(i , " ");
// // // };

// // // // table using loop
// // // for(i=1 ; i<=10; i++){
// // //     document.write("<br> " , i , ")" , "The 2's Table of ", i , " is ", i*2, "<br>");
// // // }

// // // nested loop

// // // printing 1 to 100
// // for(let i=1 ; i<=100; i= i+10){
// //     for(let k=i ; k < i+10; k++ ){
// //         document.write(k + " ");
// //     }
// //     document.write("<br>");
// // };

// // // traingle shape
// // for(i=1; i<=10; i++){
// //     for(k=1; k<=i; k++){
// //         document.write("*");
// //     }
// //     document.write("<br>")
// // }

// // for( let i=1; i<=5; i++){
// //     for(let k=1 ; k<=i; k++){
// //         document.write(k)
// //     }
// //     document.write("<br>");
// // }
// // // descending order
// // for (let i=5 ; i>=1 ; i--){
// //     for (let k=1; k<=i; k++){
// //         document.write(k);
// //     }
// //     document.write("<br>")
// // }

// // // another example
// // for (let i=1; i<=5; i++){
// //     for (b=1; b<=i; b++){
// //         document.write(i)
// //     }
// //     document.write("<br>");
// // }
// // //another example
// // document.write(" <br>printing in desending order <br>");
// // for(let i=5; i>=1; i--){
// //     for(k=1; k<=i ; k++){
// //         document.write(i); 
// //     }
// //     document.write("<br>");
// // }
// // // traingle upside down

// // for (let i=10 ; i>=1; i--){
// //     for( let k=1 ; k<=i; k++){
// //     document.write("&");
// //     }
// //     document.write("<br>");
// // }
// // // sorting array witgout using builtin function


// //printing this patren
// // 1 2 3 4 5
// // 1 2 3 4 5
// // 1 2 3 4 5
// // 1 2 3 4 5
// // 1 2 3 4 5
// for (i=1; i<=5 ; i++){
//     for( j=1; j<=5; j++){
//         document.write(j + " ");
//     }
//     document.write("<br>");
// }
// document.write("<br><br> Printing in traingle shape <br>")
// for (let i=1; i<=10; i++){
//     for(let j=1; j<=i; j++){
//         document.write(j + " ")
//     }
//     document.write("<br>");
// }

// document.write("<br><br> Printing traingle upside down <br>");

// for(i=1 ; i<=10; i++){
//     for (j=10; j>=i; j--){
//         document.write(" * " , " ")
//     }
//     document.write("<br>");
// }

for (let i=10 ; i>=1 ; i--){
    document.write(i , "<br>");
};

for (let i=1; i<=5; i++ ){
    for(let j=1 ; j<=5 ; j++){
        document.write( " * ", " ")
    }
    document.write("<br>");
}

for( i=1 ; i<=5 ; i++){
    for(j=1; j<=i; j++){
        document.write(j)
    }
    document.write("<br>")
}

for(i=1 ; i<=5 ; i++){
    for(a=1 ; a<= 5-i; a++){
        document.write(" " + "&nbsp;&nbsp");
    }

    for (j=1; j<=i ; j++){
        document.write(" * ")
    }
    document.write("<br>")
}