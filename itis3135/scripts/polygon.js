
    let userNumber = getUserInput("first");
    let validatedNumber = validateEntry(userNumber);
    while (validatedNumber == 11  == true) 
    {
        userNumber = getUserInput("invalid");
        validatedNumber = validateEntry(userNumber);
    }

    let displayMessage = getShape(validatedNumber);
    alert(displayMessage);

    // 
    //document.getElementById("Number").innerHTML = displayMessage;
    

function getUserInput(typeOfMessage)
{
    var message = "The Golden Frog would like to get a number between 1 and 10 to know the type of polygon";
    if(typeOfMessage == "invalid")
    {
        message = "Invalid Number - " + message;
    }

    var userInput = prompt(message);
    return userInput;
    
}

function validateEntry(entry)
{  
    let x = Math.abs(entry);
    let y = Math.round(x);
    if(y >= 0 && 10 >= y && isFinite(y)){
        return y;
    }
    else{
        return 11;
    }
}

function getShape(entry){
    const answers = ["There is no Polygon for 0", "The Polygon for 1 is: henagon", "The Polygon for 2 is: digon", "The Polygon for 3 is: trigon","The Polygon for 4 is: tetragon","The Polygon for 5 is: pentagon","The Polygon for 6 is: hexagon","The Polygon for 7 is: heptagon","The Polygon for 8 is: octagon","The Polygon for 9 is: enneagon","The Polygon for 10 is: decagon"];
    if(entry != 11){
    //return answers[entry];
    return answers[entry];
    }// end if
    else{
    return "Please Enter a valid number";
}
}
