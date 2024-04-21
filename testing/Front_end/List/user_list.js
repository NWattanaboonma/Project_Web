function fetchUserData() {
    displayUsers(users); 
}
function displayUsers(users) {
    const userDetailsContainer = document.getElementById("userDetails");
    userDetailsContainer.innerHTML = "";
    users.forEach(user => {
        const userDetailDiv = document.createElement("div");
        userDetailDiv.classList.add("user-detail");

        // Loop through each property of the user and create detail lines
        for (let key in user) {
            if (key !== 'id') {
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
        }
        const updateButton = document.createElement("button");
        updateButton.textContent = "Update";
        updateButton.classList.add("update-btn");
        updateButton.addEventListener("click", () => updateUser(user.id));

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("delete-btn");
        deleteButton.addEventListener("click", () => deleteUser(user.id));

        userDetailDiv.appendChild(updateButton);
        userDetailDiv.appendChild(deleteButton);

        userDetailsContainer.appendChild(userDetailDiv);
    });
}

function addUser() {
    const newFirstName = document.getElementById("newFirstName").value;
    const newLastName = document.getElementById("newLastName").value;
    const newEmail = document.getElementById("newEmail").value;

    if (newFirstName && newLastName && newEmail) {
        const newUser = {
            id: users.length + 1,
            firstName: newFirstName,
            lastName: newLastName,
            email: newEmail
        };
        users.push(newUser);
        displayUsers(users);
        // Clear input fields
        document.getElementById("newFirstName").value = "";
        document.getElementById("newLastName").value = "";
        document.getElementById("newEmail").value = "";
    } 
}

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

function deleteUser(userId) {
    const confirmDelete = confirm("Are you sure you want to delete this account?");
    if (confirmDelete) {
        users = users.filter(user => user.id !== userId);
        displayUsers(users);
    }
}

fetchUserData();
