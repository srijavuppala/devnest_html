function array_Clone(input){
    var array = input.slice(0);
    return array;
}

console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));