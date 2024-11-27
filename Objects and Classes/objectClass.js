//IMPORTANT NOTE

// the class keyword is not strictly necessary to define a class in JavaScript. Before ES6 introduced the class keyword, JavaScript used functions to create objects and simulate classes. This approach is still valid and widely used in some cases.

//

// The below is a class
class hello{
    message(){
        document.write("I am Learning OOPs");
    }

    sorry(){
        document.write("<br> Sorry OOps is very dangrous");
        console.log("hello")
    }
}

// if I want to call it , then i have to make an object of this class
// whenever i want to call the class, then i have to use object name.

let classObject = new hello();
classObject.message();
classObject.sorry();

//second example of class
class car{
    constructor(brand, color){
        this.brand = brand;
        this.color = color;
    }
    drive(){
        document.write(`<br>${this.color} ${this.brand} is driving`);
    }
    sold(){
        document.write(`<br> <br>The ${this.color} Jeep sold to someone. beacause he likes ${this.brand} company's car`);
    }
}

const myCar = new car("Mehran", "white");
myCar.drive();
const soldCar = new car ("TOYOTA" , "Black");
soldCar.sold();

//third example of the class
class calculation{
     constructor(){
        this.a = 10;
        this.b = 20;
     }
     add(){
        let c = this.a + this.b;
        return c;
     }
     sub(){
        let c = this.b - this.a;
        return c;
     }
}
const addition = new calculation();
document.write("<br><br> The addition of 'A' and 'B' is : " + addition.add());

const subtraction = new calculation();
document.write("<br><br> The addition of 'A' and 'B' is : " + subtraction.sub());