const prompt= require('prompt-sync')();

let day = parseInt(prompt("Enter the number of the day of the week: "))
if(day === 1)
{
    nameDay = "Sunday";
}
else if( day === 2)
{
    nameDay = "Monday";
}
else if( day === 3)
{
    nameDay = "Tueday";
}
else if( day === 4)
{
    nameDay = "Wednsday";
}
else if( day === 5)
{
    nameDay = "Thurday";
}
else if( day === 6)
{
    nameDay = "Friday";
}
else if( day === 7)
{
    nameDay = "Saturday";
}
else
{
    nameDay= "not a day"
}


console.log( "Today is " + nameDay);