import React, { useEffect, useState } from 'react';
import './FetchProjects.css';

const FetchProjects = () => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [sortOption, setSortOption] = useState('');

  const fetchAPI = () => {
    fetch('https://674e84f1635bad45618eebc1.mockapi.io/api/v1/projects')
      .then(response => response.json())
      .then(data => {
        setProjects(data);
        setFilteredProjects(data);
      })
      .catch(err => console.error('Error fetching projects:', err));
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  const handleSearch = () => {
    let filtered = projects.filter((project) =>
      (searchTerm === '' || project.ProjectName.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (selectedStatus === '' || project.status === selectedStatus) &&
      (selectedDepartment === '' || project.Department === selectedDepartment)
    );

    setFilteredProjects(handleSort(filtered));
  };
  const handleSort = (projectsList) => {
    let sortedProjects = [...projectsList];

    if (sortOption === 'name-asc') {
      sortedProjects.sort((a, b) => a.ProjectName.localeCompare(b.ProjectName));
    } else if (sortOption === 'name-desc') {
      sortedProjects.sort((a, b) => b.ProjectName.localeCompare(a.ProjectName));
    } else if (sortOption === 'priority') {
      const priorityOrder = { Critical: 1, High: 2, Medium: 3, Low: 4 };
      sortedProjects.sort((a, b) => (priorityOrder[a.priority] || 5) - (priorityOrder[b.priority] || 5));
    }

    return sortedProjects;
  };

  return (
    <div className="container">
      <h2 className="title">Project List</h2>

      <div className="filter-section">
        <input
          type="text"
          placeholder="Search project by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />

        <select onChange={(e) => setSelectedStatus(e.target.value)} className="dropdown">
          <option value="">Select Status</option>
          <option value="In Progress">In Progress</option>
          <option value="Planning">Planning</option>
          <option value="Pending Approval">Pending Approval</option>
          <option value="Active">Active</option>
          <option value="Completed">Completed</option>
          <option value="On Hold">On Hold</option>
          <option value="Under Review">Under Review</option>
        </select>

        <select onChange={(e) => setSelectedDepartment(e.target.value)} className="dropdown">
          <option value="">Select Department</option>
          <option value="Research & Development">Research & Development</option>
          <option value="Marketing">Marketing</option>
          <option value="Operations">Operations</option>
          <option value="Innovation Lab">Innovation Lab</option>
          <option value="IT">IT</option>
          <option value="Business Strategy">Business Strategy</option>
          <option value="Sales">Sales</option>
          <option value="Digital Transformation">Digital Transformation</option>
          <option value="Cybersecurity">Cybersecurity</option>
          <option value="Integration">Integration</option>
          <option value="Artificial Intelligence">Artificial Intelligence</option>
        </select>

        <select onChange={(e) => setSortOption(e.target.value)} className="dropdown">
          <option value="">Select Sorting</option>
          <option value="name-asc">Sort by Name A-Z</option>
          <option value="name-desc">Sort by Name Z-A</option>
          <option value="priority">Sort by Priority (Critical → High → Medium → Low)</option>
        </select>

        <button onClick={handleSearch} className="search-btn">Search</button>
      </div>

      <table className="styled-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Project Name</th>
            <th>Details</th>
            <th>Priority</th>
            <th>Department</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredProjects.length > 0 ? (
            filteredProjects.map((p) => (
              <tr key={p.id}>
                <td>{p.id}</td>
                <td>{p.ProjectName}</td>
                <td>{p.Details}</td>
                <td>{p.priority}</td>
                <td>{p.Department}</td>
                <td>{p.status}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="no-data">No matching projects found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default FetchProjects;
