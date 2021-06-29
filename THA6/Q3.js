function first(input,n=1){
    return input.slice(0,n);;
  }
  
  console.log(first([7, 9, 0, -2])); // 7
  console.log(first([],3));           // []
  console.log(first([7, 9, 0, -2],3)); // [7,9,0]
  console.log(first([7, 9, 0, -2],6)); // [7,9,0,-2]
  console.log(first([7, 9, 0, -2],-3)); //[]