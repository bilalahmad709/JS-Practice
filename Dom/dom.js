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

divs[2].innerHTML = "<h3>div3 p tag  has changed to h3</h3>";

//Attributes

//set attribute
let para= document.querySelector(".setattr");
para.setAttribute("class" , "setattr2");

// Create element 

// create element is used to add some element 
// there are two steps for createElement
// 1st one is to create element 
// second one is to add element

let parentdivv =document.getElementById("appendDiv");
let button = document.createElement("button");
button.innerText = "click me";

parentdivv.append(button);

// by using only append the button will appear at the end of the div by default


//for other we can use
//.before  .after  .prepend

//creating button before li 2
let secondli= document.getElementById("secondli")
let secondButton = document.createElement("button");
secondButton.innerText = "umar Button";
secondButton.style.color= "white";
secondButton.style.backgroundColor = "darkblue";
secondli.before(secondButton);

// creating element at the start

let h3= document.createElement("h3");
h3.innerText = "Hi I am created through createElement";

parentdivv.prepend(h3);




