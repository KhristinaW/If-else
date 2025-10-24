const prompt= require('prompt-sync')();


let c = parseInt(prompt("Enter your credit score: "))
if (c >= 800 && c <= 850)
{
    console.log("Exceptional - Best rates available")
}
else if(c >=740 && c <= 799)
{
    console.log("Very Good - Better than average")
}
else if( c >= 670 && c <= 739)
{
    console.log("Good = Near or above average")
}
else if(c >= 580 && c <= 669)
{
    console.log("Fair - Below average")
}
else if(c >= 300 && c <= 579)
{
    console.log("Poor - Credit may be denied")
}
else 
{
    console.log("Invalid Input")
}