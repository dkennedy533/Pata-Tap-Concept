// Factory Function

function createCircle(radius){
    return {
        radius,
        draw: function(){
            console.log("draw");
        }
    };
}

const circle = createCircle(1);


// Constructor Function
function Circle(radius) {
    this.radius = radius;
    this.draw = function(){
        console.log("draw");
    }
}
const another = new circle(1);


let x = { value: 10 };

let y = x

// Primitives are copied by their value;
// Objects are copied by their reference;

let obj = { value: 10 }

function increase(obj){
    obj.value++;
}

increase(obj);
console.log(obj);