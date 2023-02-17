
// var variable = "global variable";
let obj = {
    variable : "local variable",
    // normalfunction(){
    //     console.log(this.variable)
    // },
    arrowFunction:()=>{
        console.log(this.variable);
    }
}
// obj.normalfunction();
obj.arrowFunction();

const arrowFunction = (name) =>{
    console.log("this is the arrow function",name)
}
arrowFunction("masai")
function data (name){
    console.log("this is the normal function",name)
}
data("madhavi")