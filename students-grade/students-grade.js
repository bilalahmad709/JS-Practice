let score= prompt("enter your score here from 1 to 100");
        if(score>=90 && score<=100){
            document.write("Your Grade is A+");
        }
        else if(score>=80 && score<=90){
            document.write("Your Grade is A");
        }
        else if(score>=70 && score<=80){
            document.write("Your Grade is B+");
        }
        else if(score>=60 && score<=70){
            document.write("Your Grade is B");
        }
        else if(score>=50 && score<=60){
            document.write("Your Grade is C");
        }
        else{
            alert("You are Fail, Please try next time");
        }