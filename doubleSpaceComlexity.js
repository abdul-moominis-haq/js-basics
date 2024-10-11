function doubleSpaceComplexity(arr){
    let newArr =[];
    for(let i = 0; i < arr.length; i++){
    newArr.push(2 * arr[i]);
    }
    return newArr;
}
console.log(doubleSpaceComplexity([10,16,80,90]))
