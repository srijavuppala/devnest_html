var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var max = 0;
var max_item;
for(let i in arr1){
    var val = arr1.filter(item => item==arr1[i]).length;
    if( arr1.filter(item => item==arr1[i]).length > max){
        max=val;
        max_item=arr1[i];
    }
}
console.log(max_item,"( "+max+" times) ");