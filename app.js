var output=null;
function calculator (x,y,z){
  if (x === "+") {
    output = y + z;
  } else if (x === "-") {
    output = y - z;
  } else if (x === "/") {
    output = y/z;
  } else if (x === "*") {
    output = y*z;
  }
} 

calculator("-", 10, 5);
console.log(output);