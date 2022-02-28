function plusClick()
{
    processInput("+", false);
    return 1;
    
}

function minusClick()
{  
    processInput("-", false);
   return 1;
}

function multiplyClick(){

    processInput("X", false);
    return 1;
}

function divideClick(){

    processInput("&#xF7;", false);
    return 1;
}

function numberClick(number){
    processInput(number, false);
    return 1;
}

function equalClick()   
{ 
    processInput("=", true);
    return 1;
}

function decimalClick(){
    processInput(".", false);
    return 1;
}

function acClick(){
    // Clear the display
    document.getElementById("display").innerHTML = "  ";
    return 1;
}

function processInput(input, doEval)
{
    if(doEval == false)
    {
    var displayValue = document.getElementById("display").innerHTML;
    var newDisplayValue = displayValue + input;
    document.getElementById("display").innerHTML = newDisplayValue;
    }
    else
    {
        let displayValue = document.getElementById("display").innerHTML;
        let divideReplace = displayValue.replace("\u00F7", "/");
        let multiplyReplace = divideReplace.replace("X", "*");
        let evalString = "(" + multiplyReplace.trim() +")"
        let result = eval(evalString);
        document.getElementById("display").innerHTML = result;
        
    }
    
    return 1;
}