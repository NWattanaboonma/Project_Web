// Function to display admin details in the frontend
function displayUsers(users) {
    const usersDetailsContainer = document.getElementById("userDetails");

    // Clear previous content
    usersDetailsContainer.innerHTML = "";

    // Loop through each admin and create admin details
    users.forEach(user => {
        const userDetailDiv = document.createElement("div");
        userDetailDiv.classList.add("user-detail");

        // Loop through each property of the admin and create detail lines
        for (let key in admin) {
            const detailLineDiv = document.createElement("div");
            detailLineDiv.classList.add("detail-line");
            const detailLabelDiv = document.createElement("div");
            detailLabelDiv.classList.add("detail-label");
            detailLabelDiv.textContent = key;
            const detailValueDiv = document.createElement("div");
            detailValueDiv.classList.add("detail-value");
            detailValueDiv.textContent = user[key];
            detailLineDiv.appendChild(detailLabelDiv);
            detailLineDiv.appendChild(detailValueDiv);
            userDetailDiv.appendChild(detailLineDiv);
        }

        // Create update and delete buttons
        const updateButton = document.createElement("button");
        updateButton.textContent = "Update";
        updateButton.classList.add("update-btn");
        updateButton.addEventListener("click", () => updateUser(user.id));

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("delete-btn");
        deleteButton.addEventListener("click", () => deleteUser(user.id));

        adminDetailDiv.appendChild(updateButton);
        adminDetailDiv.appendChild(deleteButton);

        // Append the admin detail to the container
        adminDetailsContainer.appendChild(adminDetailDiv);
    });
}

// Function to update admin
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

// Function to delete admin
function deleteUser(userId) {
    const confirmDelete = confirm("Are you sure you want to delete this account?");
    if (confirmDelete) {
        users = users.filter(user => user.id !== userId);
        displayUsers(users);
    }
}

// Call the function to fetch admin data from the backend
fetchUsersData();
