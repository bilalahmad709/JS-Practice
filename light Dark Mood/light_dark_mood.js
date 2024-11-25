let modeBtn = document.querySelector("#mood_btn");

let currMode = "light";
modeBtn.addEventListener("click", ()=>{
    if (currMode === "light"){
        currMode = "dark";
        document.querySelector("body").style.backgroundColor = "black";
    }
    else{
        currMode = "light";
        document.querySelector("body").style.backgroundColor = "white";
    }
    
});

// second way
let secondMode = document.querySelector("#second_mode");
let body = document.querySelector("body");
let secMode = "light";

secondMode.addEventListener("click", ()=>{
    if(secMode === "light"){
        secMode = "dark";
        body.classList.add("darkmode");
    }
    else{
        secMode = "light";
        body.classList.add("lightmode");
    }
})