function countUpAndDown (n){
    console.log("Going Up")
    for(let i =0; i<=n; i++){
        console.log(i)
    }
    console.log("At the top ! \nGoing Down")
    for(let j= n-1; j >=0; j--){
        console.log(j)
        
    }
    console.log("Going Down")
}
console.log(countUpAndDown(7))