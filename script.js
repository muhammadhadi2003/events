//! Task 1)
/*function submitForm() {
    var firstName = document.getElementById('firstname').value;
    var lastName = document.getElementById('lastname').value;
    var email = document.getElementById('email').value;
    var number = document.getElementById('phone').value;

    var formData = "First Name: " + firstName + "<br>" +
        "Last Name: " + lastName + "<br>" +
        "Email: " + email + "<br>" +"Phone-Number: " + number;

    document.getElementById('formData').innerHTML = formData;
}*/

//! Task 2)

/*function extend(details) {
    var extender = document.getElementById(details);
    if (extender.style.display === 'none') {
        extender.style.display = 'block';
    } else {
        extender.style.display = 'none';
    }
}*/

//! Task 3)

/*function addStudent() {
    // Get form values
    var name = document.getElementById('name').value;
    var age = document.getElementById('age').value;
    var grade = document.getElementById('grade').value;

    // Create a new table row
    var table = document.getElementById('studentTable').getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.rows.length);

    // Insert cells with student details
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);

    cell1.innerHTML = name;
    cell2.innerHTML = age;
    cell3.innerHTML = grade;
    cell4.innerHTML = '<button onclick="editStudent(this)">Edit</button> <button onclick="deleteStudent(this)">Delete</button>';

    // Clear the form
    document.getElementById('studentForm').reset();
}

function editStudent(button) {
    var row = button.parentNode.parentNode;
    var cells = row.getElementsByTagName('td');

    // Set values in the hidden form
    document.getElementById('editName').value = cells[0].innerHTML;
    document.getElementById('editAge').value = cells[1].innerHTML;
    document.getElementById('editGrade').value = cells[2].innerHTML;

    // Display the hidden form
    document.getElementById('editForm').style.display = 'block';

    // Remove the edited row from the table
    row.remove();
}

function saveEdit() {
    // Get edited values from the hidden form
    var editedName = document.getElementById('editName').value;
    var editedAge = document.getElementById('editAge').value;
    var editedGrade = document.getElementById('editGrade').value;

    // Create a new table row with edited values
    var table = document.getElementById('studentTable').getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.rows.length);

    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);

    cell1.innerHTML = editedName;
    cell2.innerHTML = editedAge;
    cell3.innerHTML = editedGrade;
    cell4.innerHTML = '<button onclick="editStudent(this)">Edit</button> <button onclick="deleteStudent(this)">Delete</button>';

    // Hide the hidden form
    document.getElementById('editForm').style.display = 'none';
}

function cancelEdit() {
    // Hide the hidden form without saving changes
    document.getElementById('editForm').style.display = 'none';
}

function deleteStudent(button) {
    var row = button.parentNode.parentNode;
    row.remove();
}*/