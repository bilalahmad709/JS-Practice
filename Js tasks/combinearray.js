//array1
const array1= [20,5,15,50];
//array2
const array2= [80,65,70,55];

//sorting array1
const sortarr1= array1.sort((a,b)=>{
    return a-b;
});
console.log(sortarr1);

//sorting array2
const sortarr2 = array2.sort((a,b)=>{
    return a-b;
});
console.log(sortarr2);

// making one single array of two sorted array
const finalArray = sortarr1.concat(sortarr2);

console.log(finalArray);


// sorting array without builtin function
Myarr= [3,2,5,1,4];
for(i=0 ; i < Myarr.length; i++){
    let val=Myarr[0];
    if(Myarr[i]>val){
        val=Myarr[i]
    }
    console.log(val);
}

