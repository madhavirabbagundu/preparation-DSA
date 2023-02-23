//map
// map method returns the entirely new array.It is faster than for each method . In map we can use the other array methods like fliter and reduce like chaing methods.

var arr = [9,4,5,6]
var out = []
arr.map((ele)=>{
    return ele
}).sort()        // this is not a way to reduce or reverse the array
console.log(arr)


const data = arr.map((ele,index)=>{
    return index,ele
}).reverse()
console.log(data)

//forEach()
//this method is does not return tehe new array and also in foreach we are not use the chainging methods in foreach method.

var arr2 = [4,5,2,3]
arr2.forEach(element => {
return element
});
console.log(arr2)


const data1=arr2.forEach((element)=>{
    return element
}).reverse()
console.log(data1)