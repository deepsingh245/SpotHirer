const candidates = [
    { name: "John Doe", location: "City A", jobRole: "Developer" },
    { name: "Jane Smith", location: "City B", jobRole: "Designer" },
    { name: "Michael Johnson", location: "City A", jobRole: "Developer" },
    { name: "John Doe", location: "City A", jobRole: "Developer" },
    { name: "Jane Smith", location: "City B", jobRole: "Designer" },
    { name: "Michael Johnson", location: "City A", jobRole: "Developer" },
    { name: "John Doe", location: "City A", jobRole: "Developer" },
    { name: "Jane Smith", location: "City B", jobRole: "Designer" },
    { name: "Michael Johnson", location: "City A", jobRole: "Developer" },
    { name: "John Doe", location: "City A", jobRole: "Developer" },
    { name: "Jane Smith", location: "City B", jobRole: "Designer" },
    { name: "Michael Johnson", location: "City A", jobRole: "Developer" },
    // Add more candidates as needed
  ];
  
  const searchForm = document.getElementById('search-form');
  const resultsBody = document.getElementById('results-body');
  const savedCandidatesBody = document.getElementById('saved-candidates-body');

  searchForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // Get input values
    const locationInput = document.getElementById('location').value;
    const jobRoleInput = document.getElementById('job-role').value;

    // Perform search or fetch data from an API
    
    // For demonstration, generating dummy data
    // const candidates = [
    //   { name: 'John Doe', location: 'City A', jobRole: 'Developer' },
    //   { name: 'Jane Smith', location: 'City B', jobRole: 'Designer' },
    //   { name: 'Michael Johnson', location: 'City C', jobRole: 'Manager' }
    //   // Add more candidate objects as needed
    // ];

    // Clear previous search results
    resultsBody.innerHTML = '';

    // Display search results in table
    candidates.forEach(function(candidate) {
      const row = document.createElement('tr');

      // Create table cells
      const nameCell = document.createElement('td');
      nameCell.textContent = candidate.name;

      const locationCell = document.createElement('td');
      locationCell.textContent = candidate.location;

      const jobRoleCell = document.createElement('td');
      jobRoleCell.textContent = candidate.jobRole;

      const actionCell = document.createElement('td');
      const saveButton = document.createElement('button');
      saveButton.id = 'dynamicButton';
      saveButton.textContent = 'Save';
      saveButton.addEventListener('click', function() {
        saveCandidate(candidate);
        const edit=getElementById("dynamicButton");
    
      });
      actionCell.appendChild(saveButton);

      // Append cells to the row
      row.appendChild(nameCell);
      row.appendChild(locationCell);
      row.appendChild(jobRoleCell);
      row.appendChild(actionCell);

      // Append row to the table body
      resultsBody.appendChild(row);
    });
  });

  function saveCandidate(candidate) {
    const row = document.createElement('tr');

    // Create table cells
    const nameCell = document.createElement('td');
    nameCell.textContent = candidate.name;

    const locationCell = document.createElement('td');
    locationCell.textContent = candidate.location;

    const jobRoleCell = document.createElement('td');
    jobRoleCell.textContent = candidate.jobRole;

    const actionCell = document.createElement('td');
    const deleteButton = document.createElement('button');
    deleteButton.id = 'dynamicButton';
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
      row.remove();
    });
    actionCell.appendChild(deleteButton);

    // Append cells to the row
    row.appendChild(nameCell);
    row.appendChild(locationCell);
    row.appendChild(jobRoleCell);
    row.appendChild(actionCell);

    // Append row to the table body
    savedCandidatesBody.appendChild(row);
  }