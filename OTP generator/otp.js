// generateotp=()=>{
//     // let digits= "0123456789";
//     let otp = "";
//     for(let i=0; i<5; i++){
//         otp += digits(Math.floor(Math.random() *10));
//     }
//     document.write(otp);
// }
function generateotp(number){
    let otp ='';
    for(let i=0; i<number;i++){
        otp += Math.trunc(Math.random()*10).toString();
    }
    return otp;
}
document.write(generateotp(4));