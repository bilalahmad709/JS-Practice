let bulb = document.getElementById("bulb");
bulb.src = '/change-attribute/images/bulbmanual.jpeg';

function bulbOnn() {
    document.getElementById("bulb").src = '/change-attribute/images/bulbon.webp';
}

function bulbOff() {
    document.getElementById("bulb").src = '/change-attribute/images/bulboff.jpeg';
}

//changing of different images

// main image

let mainImage= document.getElementById("main_img");
mainImage.classList.add("mainImage");
mainImage.style.borderRadius="20px";
mainImage.style.backgroundImage="url(/change-attribute/images/user-profile2.jpg)";


// subimages
// subimg 1
let subimage1= document.getElementById("sub-img1");
subimage1.src='/change-attribute/images/abdulhaq.png'

function abdulhaq(){
    let abdulhaq= document.getElementById("main_img");
    abdulhaq.style.backgroundImage= "url(/change-attribute/images/abdulhaq.png)"; 
}

//subimg 2
let subimage2= document.getElementById("sub-img2");
subimage2.src='/change-attribute/images/zahid.png'

function zahid(){
    let zahid= document.getElementById("main_img");
    zahid.style.backgroundImage= "url(/change-attribute/images/zahid.png)";
}

//subimg 3
let subimage3= document.getElementById("sub-img3");
subimage3.src= '/change-attribute/images/user-profile2.jpg';

function bilal(){
    let bilal= document.getElementById("main_img");
    bilal.style.backgroundImage= "url(/change-attribute/images/user-profile2.jpg)";
}

//changing of images and complete introduction

let profileImg= document.getElementById("profile-img");
profileImg.src='/change-attribute/images/avatar.jpeg';

// umar
function umer(){
    let umarProfile= document.getElementById("profile-img");
    umarProfile.src ='/change-attribute/images/umar.jpeg';
    document.getElementById("name").innerText= "Name : Umer Hakim";
    document.getElementById("f_name").innerText= "F/Name : Umar Hakim";
    document.getElementById("age").innerText= "Age : 24";
    document.getElementById("education").innerText= "Education : Bachelors in Computer Science";
    document.getElementById("email").innerText= "Email : umarhakim999@gmail.com";
    document.getElementById("address").innerText= "Address : Dir Lower ";
    
}

//zahid
function zahid2() {
    let zahidProfile= document.getElementById("profile-img");
    zahidProfile.src = '/change-attribute/images/zahid.png';
    document.getElementById("name").innerText= "Name : Zahid Khattak";
    document.getElementById("f_name").innerText= "F/Name : Usman Gul";
    document.getElementById("age").innerText= "Age : 24";
    document.getElementById("education").innerText= "Education : Bachelors in Computer Science";
    document.getElementById("email").innerText= "Email : zahidkhattakcs123@gmail.com";
    document.getElementById("address").innerText= "Address : Qadri Banda Hangu Kohat";
}

//Abdulhaq

function abdulhaq2(){
    let abdulhaqProfile= document.getElementById("profile-img");
    abdulhaqProfile.src = '/change-attribute/images/abdulhaq.png';
    document.getElementById("name").innerText= "Name : Abdulhaq";
    document.getElementById("f_name").innerText= "F/Name : AbduraRahim";
    document.getElementById("age").innerText= "Age : 45";
    document.getElementById("education").innerText= "Education : Diploma in Viternary Science";
    document.getElementById("email").innerText= "Email : abdulhaqBakhshi@gmail.com";
    document.getElementById("address").innerText= "Address : Takht Bhaii Mardan";
}

function bilal2(){
    let abdulhaqProfile= document.getElementById("profile-img");
    abdulhaqProfile.src = '/change-attribute/images/user-profile2.jpg';
    document.getElementById("name").innerText= "Name : Bilal Ahmad";
    document.getElementById("f_name").innerText= "F/Name : Ismail kjan";
    document.getElementById("age").innerText= "Age : 24";
    document.getElementById("education").innerText= "Education : Bachelors in Computer Science";
    document.getElementById("email").innerText= "Email : bilal12345@gmail.com";
    document.getElementById("address").innerText= "Address : District Mohmand Agency";
}
