
    let persons = [];
    let salaries = [];

function addSalary()
{
    var personSelect = document.getElementById("Person");
    var personName = personSelect.value;
    var dataValid = true;

    var personSalary = document.getElementById("salary").value;
    if(personSalary === "" || (personSalary < 0) || (isNaN(personSalary))){
        var userNumber = alert("Please enter a valid salary!");
        dataValid = false;
    }

    if(dataValid == true)
    {
    persons.push(personName);
    salaries.push(personSalary);
    }
    
    return 0;
    
}

function displaySalary()
{  
    var salaryContentTemplate = "<table><tr><th>Person</th><th>Salary</th></tr>$$content</table>";
    var salaryRowTemplate =     "<tr><td>$$person</td><td>$$salary</td></tr>";
    var rowContent = "";
    for(let i = 0; i < persons.length; i++){
        var currentRow1 = salaryRowTemplate.replace("$$person", persons[i]);
        var currentRow2 = currentRow1.replace("$$salary", salaries[i]);
        rowContent = rowContent + currentRow2;
    }
    
    var fullContent = salaryContentTemplate.replace("$$content", rowContent);

    document.getElementById("SalariesDisplay").innerHTML = fullContent;

    return 0;

}

function displayResults(){
    let average=0;
    let highest=0;
    let total = 0;

    // Finding the highest and total
    for(let i = 0; i < salaries.length; i++){
        if(highest < salaries[i])
        {
        highest = salaries[i];
        }
        
        
        total = total + parseFloat(salaries[i]);
    }
    
    average = total/(salaries.length);
    
    document.getElementById("average").innerHTML = "Average: $" + average;
    document.getElementById("highest").innerHTML = "Highest: $" + highest;

    return 0;
}

