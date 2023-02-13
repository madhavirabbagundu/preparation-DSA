function odd(a,b){
    var out = []
for(var i = a; i <= b; i++){
    if(i%2===1){
        // console.log(i)
        out.push(i)
    }

}
return out
}
console.log(odd(3,7))