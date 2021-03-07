alert("Welcome to Fashion Nova where all trends are up to date.");
var name= prompt("What's your name?");
var age= prompt("whats your age?");
console.log(name);
console.log(age);

if (age <18)
{
   alert ("leave!");
}
else 
{
  alert ("Welcome!");
}



// gender question

var gender= prompt("What is your gender?")
while (gender != "male" && gender != "female")
{
    var gender= prompt("What is your gender?")
}


if (gender == "male")
{
    var itemmale=prompt ("do you want a suite or pants?")

    while (itemmale!= "suite" && itemmale !="pants")
    {
        var itemmale=prompt ("do you want a suite or pants?")
    }
}










if (gender == "mfemale")
{
    var itemfemale=prompt ("do you want a dress or blouse?")

    while (itemfemale!= "dress" && itemmale !="blouse")
    {
        var itemfemale=prompt ("do you want a dress or blouse?")
    }
}



// number of items
var num=prompt("how many items do you want?")
for (var i=0; i<num ;i++)
{
    if (gender == "male")
    {
        document.write ('<img src="https://images.riverisland.com/is/image/RiverIsland/black-slim-fit-suit-trousers_311365_main?$productImageLarge$">')
    }
    else{

        document.write ('<img src="https://sites.create-cdn.net/siteimages/28/4/9/284928/15/7/9/15798435/919x1208.jpg?1505296014">')
    }
}