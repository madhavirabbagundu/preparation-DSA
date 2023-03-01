function runProgram(input) {
    // Write code here
    var input = input
    var out = string(input)
  }
  function string(str){
      var count = 0;
      for(var i = 0; i < str.length; i++){
          if(str[i]!=='S' || str[i]!=='O'){
              count++
              
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
  
  