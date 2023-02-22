// callback function is function it pass arguments to a another function.

function calcuator(x,y){
console.log(x+y);

}
function callback(a,b,arg){
   arg(a,b)

   }  
callback(2,3,calcuator);