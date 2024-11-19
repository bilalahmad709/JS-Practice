//find the averge marks of the complete class

let classMarks= [78,90,88,56,68,75,66,64,89,87];

//total students in the class 
let totalStudents= document.write("Total Students in the class are : " + classMarks.length + "<br>");
// using for of loop to print the marks first

document.write(" <br> The Obtain marks out of 100 are given below: <br>")
for(let marks of classMarks){
    document.write(marks + "<br>");
}
// Total marks
    totalMarks= 100*classMarks.length;
    document.write( "<br> Total marks of the class are : " + "<b>" +totalMarks + "</b>");


let obtainMarks = document.write("<br> <br> The total sum of the student obtain marks are : ");

let sum=0;

for (let val of classMarks){
    sum= sum +val;
}
document.write(sum);

let averageMarks= (sum/totalMarks)*100;
document.write(" <br><br> The Average marks of the class is :");

document.write("<b>" + averageMarks + "</b>");


