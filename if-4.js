const prompt= require('prompt-sync')();


let bmi = parseInt(prompt("Enter your BMI: "))
if (bmi < 18.5)
{
    console.log("You are underweight")
}
else if(bmi >= 18.5 && bmi< 24.9)
{
    console.log("You are a normal weight")
}
else if( bmi > 25 && bmi  < 29.9)
{
    console.log("You are overweight")
}
else
{
    console.log("You are obese")
}