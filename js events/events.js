// for click event
singleclick= ()=>{
    let para=document.getElementById("para");
    para.innerText= "I clicked by somone";
}

// for double click event 
doubleclick = ()=>{
    let  para = document.getElementById("para");
    para.innerText = "I am double clicked by someone";
}
// for mouseEnter event
mouseEnter = () =>{
    let para = document.getElementById("para");
    para.style.backgroundColor= "darkblue";
    para.style.color= "white";
    para.style.fontWeight= "bold";
}

// for mouse out event
mouseout = () =>{
    let para = document.getElementById("para");
    para.style.backgroundColor= "none";
  
}

// for a single
 document.getElementById("button").addEventListener("click", singleclick);

 // for a double
 document.getElementById("button").addEventListener("dblclick", doubleclick );

 // for mouse enter
 document.getElementById("button").addEventListener("mouseenter", mouseEnter);

 //for mouse out
 document.getElementById("button").addEventListener("mouseout", mouseout );

 
