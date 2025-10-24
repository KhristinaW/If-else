const prompt= require('prompt-sync')();


let s = parseInt(prompt("Enter your systolic: "))
let d = parseInt(prompt("Enter your diastolic: "))
if( s < 120 && d < 80 )
{
    console.log("Normal blood pressure")
}
else if( s >= 120 && s <= 129 && d < 80)
{
    console.log("Elevated blood pressure")
}
else if(s >= 130 && s <= 139 || d >=80 && d <=89)
{
    console.log("High BP Stage 1")
}
else if( s >= 140 && s <= 180 || d >= 90 && d <= 120)
{
    console.log("High BP Stage 2")
}
else if (s > 180 || d > 120)
{
    console.log("Hypertensive Crisis")
}
else
{
    console.log("Invalid Input")
}