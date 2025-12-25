$(document).keypress(function ()
{
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;

    var randomDice = "dice" + randomNumber1 + ".png";

    var imageSource = "images/" + randomDice;

    var image1 = $("img")[0];
    image1.setAttribute("src",imageSource);

    var randomNumber2 = Math.floor(Math.random() * 6) + 1;

    var imageSource2 = "images/dice" + randomNumber2 + ".png";

    $("img")[1].setAttribute("src",imageSource2);

    if(randomNumber1 > randomNumber2)
    {
        document.querySelector("h1").innerHTML="🚩Player1 wins";
    }
    else if(randomNumber2 > randomNumber1)
    {
        document.querySelector("h1").innerHTML="Player2 wins🚩";
    }
    else
    {
        document.querySelector("h1").innerHTML="Draw";
    }
}
);
$(document).click(function ()
{
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;

    var randomDice = "dice" + randomNumber1 + ".png";

    var imageSource = "images/" + randomDice;

    var image1 = $("img")[0];
    image1.setAttribute("src",imageSource);

    var randomNumber2 = Math.floor(Math.random() * 6) + 1;

    var imageSource2 = "images/dice" + randomNumber2 + ".png";

    $("img")[1].setAttribute("src",imageSource2);

    if(randomNumber1 > randomNumber2)
    {
        document.querySelector("h1").innerHTML="🚩Player1 wins";
    }
    else if(randomNumber2 > randomNumber1)
    {
        document.querySelector("h1").innerHTML="Player2 wins🚩";
    }
    else
    {
        document.querySelector("h1").innerHTML="Draw";
    }
}
);