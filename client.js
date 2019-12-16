$(document).ready(handleReady);

function handleReady(){
    console.log('jquery loaded!');
    
    //Add click listener
    $('#submitBtn').on('click', addEmployee);  
    
    // Delete click listener
    $('#salaryCalculator').on('click', '.deleteBtn', deleteEmployee);
};

let totalMonthlySalaries = 0;

function calculateMonthlySalaries (salaryToAdd){
    console.log('in calculateMonthlySalaries');
    totalMonthlySalaries += salaryToAdd/12;
    console.log('total monthly salaries');
    
}

function addEmployee(){
    console.log('clicked add employee');
    //get input

    let firstName = $('#firstNameIn').val(); //getter 
    let lastName = $('#lastNameIn').val();
    let idNumber = $('#idNumberIn').val(); 
    let jobTitle = $('#jobTitleIn').val(); 
    let annualSalary = $('#annualSalaryIn').val();
    calculateMonthlySalaries(Number(annualSalary));

    idNumber = Number(idNumber);
    annualSalary = Number(annualSalary); // change strings to number
    console.log(firstName, lastName, idNumber, jobTitle, annualSalary); //display input items in console
    
    $('#salaryCalculator').append(
        `
        <tr> 
            <td>${firstName}</td>
            <td>${lastName}</td>
            <td>${idNumber}</td>
            <td>${jobTitle}</td>
            <td>$${annualSalary}</td>
            <td><button class="deleteBtn btn btn-danger">delete</button></td>
        </tr>
        `
    );

    $('#monthlySalariesIn').append(totalMonthlySalaries);
    $('#monthlySalariesIn').empty('');
    $('#monthlySalariesIn').append('Monthly Salaries: $', totalMonthlySalaries);

    //empty inputs
    $('#firstNameIn').val('');
    $('#lastNameIn').val(''); 
    $('#idNumberIn').val(''); 
    $('#jobTitleIn').val(''); 
    $('#annualSalaryIn').val(''); 
    //$('#monthlySalariesIn').val(totalMonthlySalaries);

};

//delete employee from list
function deleteEmployee(){
    console.log('clicked delete');
    $(this).closest('tr').remove(); 
};

