//closures 
//closures give you acess to an outer function scope form an inner function.
const name = "madhavi"
function outer(){
    var a = 10;
    let count = 0;    
console.log(a, name,count+1)
    function inner(){
        var b = 20;
        count+=1
        console.log(count)
    }
    // console.log(count)

    inner()
    // console.log()
}
const out = outer();
 out();
 out();
 out();




// out;