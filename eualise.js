// 5           arr[] size n = 5
// 3 3 2 1 3  
// output = 2
// Delete  and  to leave . This is minimal. The only other options are to delete  elements to get an array of either  or .






function runProgram(input) {
    // Write code here
    var input = input.trim().split("\n")
    var n = input[0]
    var arr = input[1].trim().split(" ").map(Number)
  //   console.log(n,arr)
    var out = minimal(n,arr)
  }
  function minimal(n,arr){
      var temp = {}
      for(var i = 0; i < n; i++){
          var item = arr[i]
          // console.log(temp[item])
          if(temp[item] === undefined)
          {
              temp[item] = 1
          }
          else{
              var prev = temp[item]
              temp[item] = prev+1
          }
      }
      // console.log(temp)
      var max = 0;
      for(key in temp){
          // console.log(n)
          if(max < temp[key]){
            max = temp[key]     
         }
      }
      console.log(n-max)
  }
  
  
  
  
  if (process.env.USER === "") {
    runProgram(``);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0);
    });
  }
  
  