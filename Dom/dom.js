// when we use innerHTML and give some tag or text then everything inside that tag will be replace by that tag or text.

// for innerHTML
let parentdiv = document.getElementById("parentDiv");
parentdiv.innerHTML= "<h1>welcome here</h1>";


// for innerText
document.getElementById("textParent").innerText="the whole text has been changed either it is tag or text";

// for tagName
document.getElementsByTagName("li").innerText ="vegitables";

// for textContent

//textcontent property is used to show the hidden text as will.

let textcontent=document.getElementById("textcontent").textContent;
document.write(textcontent);

//task quiz for appending
let h4= document.querySelector("h4");
h4.style.color="red";

h4.innerText= h4.innerText + " from Codelounge ";

//appending text for h5
let h5= document.querySelector("h5");
h5.innerText= h5.innerText + " and the other text has been added through append " + h4.innerText;


//task no 2
// Question : create 3 divs with common classname - "box". access them & add some unique text to each of them

let divs = document.querySelectorAll(".box");
divs.innerText = "hello";

// targetting single div
divs[0].innerText = "first div's text has been changed";





