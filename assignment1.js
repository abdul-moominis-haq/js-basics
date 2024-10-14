markWeight = 78;
markHeight = 1.69;
johnWeight = 92;
johnHeight = 1.95;
markStaminer = 78;
johnStaminer = 92;
markPutches = 708;
johnPutches = 888;

BMI = function(weight, height) {
    return weight / (height **2);
}
console.log("The BMI of Mark is  "+BMI(markWeight, markHeight));
console.log("The BMI of Mark is  "+BMI(johnWeight, johnHeight));
// comoarison of BMI
let markHigherBMI = BMI(markWeight, markHeight) > BMI(johnWeight, johnHeight);
console.log(markHigherBMI);
let johnHigherBMI = BMI(johnWeight, johnHeight) > BMI(markWeight, markHeight);
console.log(johnHigherBMI);

HWC = function(weight, putches, height,staminer) {
    return (weight*putches*staminer )/ (height **2);
}
console.log("Mark's Heavy Weight Champion is : " +HWC(markWeight, markPutches, markHeight, markStaminer));
console.log("Mark's Heavy Weight Champion is : "+HWC(johnWeight, johnPutches, johnHeight, johnStaminer));

let markHigherHWC = HWC(markWeight, markPutches, markHeight, markStaminer) > HWC(johnWeight, johnPutches, johnHeight, johnStaminer);
console.log(markHigherHWC);
let johnHigherHWC = HWC(johnWeight, johnPutches, johnHeight, johnStaminer) > HWC(markWeight, markPutches, markHeight, markStaminer);
console.log(johnHigherHWC);

