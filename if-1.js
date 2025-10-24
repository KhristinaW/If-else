const prompt= require('prompt-sync')();

let temp = parseInt(prompt("Enter the tempature: "));
if (temp > 30)
{
    console.log("It is hot")
}
else if ( temp >= 20 && temp <= 30)
{
    console.log("It is warm")
}
else if (temp >= 10 && temp <= 19)
{
    console.log("It is cool")
}
else
{
    console.log("It is cold")
}

let nameDay="";