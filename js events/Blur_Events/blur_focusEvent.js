function focusFunction(element){
    element.style.backgroundColor="lime";
}

function blurFunction(e){
 e.style.backgroundColor="";
}

//input method



function inputFunction(e){
  e.style.backgroundColor="lightgray";
  let x = e.value;
  document.getElementById("secondName").innerHTML= x;
}

//onchange function
function onchangeFunction(element){
 let c = element.value;
 document.getElementById("Country").innerHTML= c;
}