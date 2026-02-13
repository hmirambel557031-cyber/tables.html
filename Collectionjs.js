const form = document.getElementById('userForm');
const tableBody = document.querySelector('#dataTable tbody');
const errorDisplay = document.getElementById('errorMessage');

document.addEventListener('DOMContentLoaded', () => {
    const title = document.getElementById('title');
    if (title) console.log(title);

    const button = document.querySelector('button');
    if (button) {
        button.addEventListener('click', () => {
            if (title) {
                title.innerHTML = 'You clicked the button!';
            } else {
                console.log('Button clicked (no #title element found)');
            }
        });
    }

    const nameInput = document.getElementById('name');
    if (nameInput) {
        nameInput.addEventListener('change', () => {
            console.log('Input changed');
        });
    }

    if (form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault(); // stop form from submitting
            errorDisplay.textContent = ""; // Clear previous errors

            const username = document.getElementById('username');
            const value = username ? username.value.trim() : '';
            if (value === '') {
                if (errorDisplay) errorDisplay.innerHTML = 'Username is required!';
                else alert('Username is required!');
            } else {
                if (errorDisplay) errorDisplay.innerHTML = 'Form submitted successfully!';
                else console.log('Form submitted successfully!');
            }
        });
    }
});

form.addEventListener('submit', function(event) {
    // e. Prevent page refresh
    event.preventDefault();
    errorDisplay.textContent = ""; // Clear previous errors

    // Capture values
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;

    // f. Check if all fields are filled & g. Age > 0
    if (!firstName || !lastName || !age || !gender) {
        errorDisplay.textContent = "All fields are required.";
        return;
    }

    if (parseInt(age) <= 0) {
        errorDisplay.textContent = "Age must be greater than 0.";
        return;
    }

    // i. Add the data as a new row in the table
    const newRow = tableBody.insertRow();
    newRow.innerHTML = `
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${age}</td>
        <td>${gender}</td>
    `;

    // j. Clear the form after submission
    form.reset();
});