var Name = "ABDUL-MOOMIN IS-HAQ";
var profession = "Full Stack Developer";
let age =23;
const detail ={
"hometown" : "Bawku",
"Live":" Kumasi",
"hobbies":"Reading Quran"
}
console.log(" My name is "+Name+"\n I am a "+profession+"\n I am "+age+" years old"+"\n I am from " +detail.hometown+" but I lives in "+detail.Live+"\n I like "+detail.hobbies)

function doubleSpaceComplexity(arr){
    let newArr =[];
    for(let i = 0; i < arr.length; i++){
    newArr.push(2 * arr[i]);
    }
    return newArr;
}
console.log(doubleSpaceComplexity([10,16,80,90]))
