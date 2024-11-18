
function result(){
    let totalmarks= document.getElementById("totalmarks").value;
    let obtainmarks= document.getElementById("obtain_marks").value;
    document.getElementById("totalResult").innerHTML=totalmarks;
    document.getElementById("ObtainResult").innerHTML=obtainmarks;
    let percenTage= document.getElementById("percentage");
    percenTage.innerHTML = (obtainmarks/totalmarks)*100;
    let grade = document.getElementById("grade");
    
    if(percenTage>=90 && percenTage<=100){
        grade.innerHTML= "Your Grade is A+";
    }
    else if(percenTage>=80 && percenTage<=90){
        grade.innerHTML= "Your Grade is A";
    }
    else if(percenTage>=70 && percenTage<=80){
        grade.innerHTML= "Your Grade is B+";
    }
    else {
        grade.innerHTML= "You are below the merit";
    }

}
