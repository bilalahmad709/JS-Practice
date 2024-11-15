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

