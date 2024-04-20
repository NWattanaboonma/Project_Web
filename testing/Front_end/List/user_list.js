// Sample data received from the backend
let users = [
    { Id: 1, FirstName: "Alex", LastName: "Doe", Email: "john@example.com" },
    { Id: 2, FirstName: "Michele", LastName: "Smith", Email: "jane@example.com" },
    { Id: 3, FirstName: "Jack", LastName: "Johnson", Email: "alice@example.com" }
];

// Function to fetch user data from the backend (mocked for demonstration)
function fetchUserData() {
    displayUsers(users);
}

// Function to display user details in the frontend
function displayUsers(users) {
    const userTableBody = document.getElementById("userTableBody");

    // Clear previous content
    userTableBody.innerHTML = "";

    // Loop through each user and create table rows
    users.forEach(user => {
        const row = userTableBody.insertRow();

        // Insert cells for firstName, lastName, and email
        const firstNameCell = row.insertCell();
        firstNameCell.textContent = user.firstName;

        const lastNameCell = row.insertCell();
        lastNameCell.textContent = user.lastName;

        const emailCell = row.insertCell();
        emailCell.textContent = user.email;

        // Create update and delete buttons
        const updateButton = document.createElement("button");
        updateButton.textContent = "Update";
        updateButton.classList.add("update-btn");
        updateButton.addEventListener("click", () => updateUser(user.id));

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("delete-btn");
        deleteButton.addEventListener("click", () => deleteUser(user.id));

        const actionsCell = row.insertCell();
        actionsCell.appendChild(updateButton);
        actionsCell.appendChild(deleteButton);
    });
}

// Function to add a new user
function addUser() {
    const firstName = prompt("Enter first name:");
    const lastName = prompt("Enter last name:");
    const email = prompt("Enter email:");

    if (firstName && lastName && email) {
        const newUser = {
            id: users.length + 1, // Generating a new ID for the new user
            firstName,
            lastName,
            email
        };
        users.push(newUser);
        displayUsers(users);
    }
}

// Function to update user
function updateUser(userId) {
    const userIndex = users.findIndex(user => user.id === userId);
    const userToUpdate = users[userIndex];
    const newFirstName = prompt("Enter new first name:", userToUpdate.firstName);
    const newLastName = prompt("Enter new last name:", userToUpdate.lastName);
    const newEmail = prompt("Enter new email:", userToUpdate.email);

    if (newFirstName && newLastName && newEmail) {
        users[userIndex] = {
            ...userToUpdate,
            firstName: newFirstName,
            lastName: newLastName,
            email: newEmail
        };
        displayUsers(users);
    }
}

// Function to delete user
function deleteUser(userId) {
    const confirmDelete = confirm("Are you sure you want to delete this account?");
    if (confirmDelete) {
        users = users.filter(user => user.id !== userId);
        displayUsers(users);
    }
}

// Call the function to fetch user data from the backend
fetchUserData();
