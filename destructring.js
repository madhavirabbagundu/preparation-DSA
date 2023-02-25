 [a,b,c,d] = [1,2,3,4]
console.log(d,a)



function runProgram(input) {
    var input = input.trim().split("\n")
    var n = input[0]
    var arr = input[1].trim().split(" ").map(Number);
    // console.log(n,arr)
    var out = sum(n,arr)
    }
    function sum(n,arr){
        var sum = 0;
        for(var i = 0; i < n; i++){
            sum+=arr[i]
        }
        console.log(sum)
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
    
    