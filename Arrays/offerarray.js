// for a given array with price of 5 items--> [250,645,300,900,50] all items have an offer of 10% on them. change the array to store final price after applying offer.

let items = [250,645,300,900,50];

for (let val of items){
    document.write("The price of the item before offer is : " + "<b>" + val + "</b>" + "<br><br>");

    let offer= val/10;
     val= val - offer;
     document.write("The price of the item after 10% off is :" +val + "<br><br>");

}; 