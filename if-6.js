const prompt= require('prompt-sync')();


let season = parseInt(prompt("Enter a month number: "))
if ( season == 12 || season == 1 || season == 2)
{
    console.log("It is winter")
}
else if(season == 3 || season == 4 || season == 5)
{
    console.log("it is Spring")
}
else if(season == 6 || season == 7 || season == 8)
{
    console.log(" It is Summer")
}
else if( season == 9 || season == 10 || season == 11)
{
    console.log("It is fall")
}
else
{
    console.log("Invalid month number")
}