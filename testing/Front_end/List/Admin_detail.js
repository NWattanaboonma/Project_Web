function fetchAdminData() {
    displayAdmins(admins);
}

function displayAdmins(admins) {
    const adminDetailsContainer = document.getElementById("adminDetails");
    // Clear previous content
    adminDetailsContainer.innerHTML = "";
    // Loop through each admin and create admin details
    admins.forEach(admin => {
        const adminDetailDiv = document.createElement("div");
        adminDetailDiv.classList.add("admin-detail");
        // Loop through each property of the admin and create detail lines
        for (let key in admin) {
            const detailLineDiv = document.createElement("div");
            detailLineDiv.classList.add("detail-line");
            const detailLabelDiv = document.createElement("div");
            detailLabelDiv.classList.add("detail-label");
            detailLabelDiv.textContent = key;
            const detailValueDiv = document.createElement("div");
            detailValueDiv.classList.add("detail-value");
            detailValueDiv.textContent = admin[key];
            detailLineDiv.appendChild(detailLabelDiv);
            detailLineDiv.appendChild(detailValueDiv);
            adminDetailDiv.appendChild(detailLineDiv);
        }
        // Create update and delete buttons
        const updateButton = document.createElement("button");
        updateButton.textContent = "Update";
        updateButton.classList.add("update-btn");
        updateButton.addEventListener("click", () => updateAdmin(admin.id));

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("delete-btn");
        deleteButton.addEventListener("click", () => deleteAdmin(admin.id));

        adminDetailDiv.appendChild(updateButton);
        adminDetailDiv.appendChild(deleteButton);

        // Append the admin detail to the container
        adminDetailsContainer.appendChild(adminDetailDiv);
    });
}

// Function to update admin

// function updateAdmin(adminId) {
//     const adminIndex = admins.findIndex(admin => admin.id === adminId);
//     const adminToUpdate = admins[adminIndex];
//     const newFirstName = prompt("Enter new first name:", adminToUpdate.firstName);
//     const newLastName = prompt("Enter new last name:", adminToUpdate.lastName);
//     const newEmail = prompt("Enter new email:", adminToUpdate.email);

//     if (newFirstName && newLastName && newEmail) {
//         admins[adminIndex] = {
//             adminToUpdate,
//             firstName: newFirstName,
//             lastName: newLastName,
//             email: newEmail
//         };
//         displayAdmins(admins);
//     }
// }

// Function to delete admin
// function deleteAdmin(adminId) {
//     const confirmDelete = confirm("Are you sure you want to delete this account?");
//     if (confirmDelete) {
//         admins = admins.filter(admin => admin.id !== adminId);
//         displayAdmins(admins);
//     }
// }
fetchAdminData();