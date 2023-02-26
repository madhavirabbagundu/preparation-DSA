// 20 23 6  output= 2

// Day  is beautiful because the following evaluates to a whole number: 
// Day  is not beautiful because the following doesn't evaluate to a whole number: 
// Day  is beautiful because the following evaluates to a whole number: 
// Day  is not beautiful because the following doesn't evaluate to a whole number: 
// Only two days,  and , in this interval are beautiful. Thus, we print  as our answer.
// 
// 
// 

function runProgram(input) {
    var input = input.trim().split(" ").map(Number);
          // var arr1 = input.trim().split("").map(Number);
  
  //   console.log(input[0])
    var out = calculate(input)
  }
  function calculate(arr){
      // console.log(arr)
      var count = 0;
      for(var i = arr[0]; i <= arr[1]; i++){
              var out = '';
  
          var arr1 = i.toString().split("");
          for(var j = arr1.length-1; j >= 0; j--){
              out +=arr1[j]
              // var data = arr1.trim().split(" ")
  
      }
      var output = Number(out)
        var data= Math.abs(i-output)/arr[arr.length-1]
              //   console.log(data)
                    if(data%1===0){
                        count++
                    }
                    else{
                        count
                    }
                }
  
      
      console.log(count)
      
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
  
  