function merge(arr,arr1){
for(var i = 0; i<arr1.length;i++){
    arr.push(arr1[i])
}
return arr.sort()
}
console.log(merge([2,3,4],[4,5,1]))