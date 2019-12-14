$(document).ready(handleReady);

function handleReady(){
    console.log('jquery loaded!');
    
    //Add click listener
    $('#submitBtn').on('click', addEmployee);  
    
    // Delete click listener
    $('#salaryCalculator').on('click', '.deleteBtn', deleteEmployee);
}

function addEmployee(){
    console.log('clicked add employee');
    //get user input

    let firstName = $('#firstNameIn').val(); //getter 
    let lastName = $('#lastNameIn').val(); //getter
    let idNumber = $('#idNumberIn').val(); //getter
    let jobTitle = $('#jobTitleIn').val(); //getter
    let annualSalary = $('#annualSalaryIn').val(); //getter

    idNumber = Number(idNumber);
    annualSalary = Number(annualSalary); // change string to number
    console.log(firstName, lastName, idNumber, jobTitle, annualSalary); //display input items in console
    

    //append fish user enter
    $('#salaryCalculator').append(
        `
        <tr> 
            <td>${firstName}</td>
            <td>${lastName}</td>
            <td>${idNumber}</td>
            <td>${jobTitle}</td>
            <td>${annualSalary}</td>
            <td><button class="deleteBtn btn btn-danger">delete</button></td>
        </tr>
        `
    );

    //empty inputs
    $('#firstNameIn').val(''); //remove "let name =" from above, then  add '' in val() in order to empty inputs on DOM
    $('#lastNameIn').val(''); 
    $('#idNumberIn').val(''); 
    $('#jobTitleIn').val(''); 
    $('#annualSalaryIn').val(''); 

}

function deleteEmployee(){
    console.log('clicked delete');
    $(this).closest('tr').remove(); //where did this event come from? what button did the user click on? that's what we want to remove
}