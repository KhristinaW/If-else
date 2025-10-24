const prompt= require('prompt-sync')();


let income = parseInt(prompt("Enter your annual income: $"))
if(income > 0 && income <= 10000)
{
    console.log("0% tax")
}
else if(income > 10001 && income <= 30000 )
{
    console.log("10% tax")
}
else if(income > 30001 && income <= 60000)
{
    console.log("20% tax")
}
else if(income > 60001 && income <= 100000)
{
    console.log("30% tax")
}
else if(income > 100000)
{
    console.log("40% income")
}
else
{
    console.log("You are lying")
}