const prompt= require('prompt-sync')();


let water = parseInt(prompt("Enter the tempature of your water (in celcius): "))
if(water < 0)
{
    console.log("Ice(solid)")
}
else if(water >= 0 && water <= 99)
{
    console.log("It is normal (liquid)")
}
else if (water >= 100)
{
    console.log("It is steam(gas)")
}
else
{
    console.log("Not a number")
}
