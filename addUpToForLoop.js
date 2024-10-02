function addUpto (n){
    let total =0
    for(let i =1; i <= n; i++){
        total += i ;
    }
    return total;
}
console.log(addUpto(100));

var t3 = performance.now;
addUpto(1000000000);
var t4 = performance.now;
console.log(`Time Elapsed For Loops: ${(t3 - t4) / 1000} seconds.`)
console.log(t4-t3)
