function sumSpaceComplexity(arr){
    let Total =0;
    for(var i = 0; i < arr.length; i++){
        Total += arr[i];
    }
    return Total;
}
console.log(sumSpaceComplexity(10))
