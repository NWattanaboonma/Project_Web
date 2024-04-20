// Function to fetch admin data from the backend (mocked for demonstration)
function fetchAdminData() {
    // Mocked admin data from the backend
    const admins = [
        { id: 1, firstName: "John", lastName: "Doe", email: "john@example.com" },
        { id: 2, firstName: "Jane", lastName: "Smith", email: "jane@example.com" },
        { id: 3, firstName: "Alice", lastName: "Johnson", email: "alice@example.com" }
    ];

    // Call the function to display admin details
    displayAdmins(admins);
}

// Function to display admin details in the frontend
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
function updateAdmin(adminId) {
    // Placeholder function, you can implement your logic here
    console.log("Update admin with ID:", adminId);
}

// Function to delete admin
function deleteAdmin(adminId) {
    // Placeholder function, you can implement your logic here
    console.log("Delete admin with ID:", adminId);
}

// Call the function to fetch admin data from the backend
fetchAdminData();
