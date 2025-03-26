import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchAPI() {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setUsers(response.data);
      } catch (err) {
        setError('Failed to fetch user data');
      } finally {
        setLoading(false);
      }
    }
    fetchAPI();
  }, []);

  if (loading) return <div className="spinner-grow text-primary text-center" role="status"></div>;
  if (error) return <div className="alert alert-danger text-center">{error}</div>;

  return (
    <ul className="list-group">
      {users.map((user) => (
        <li key={user.id} className="list-group-item">
          <Link to={`/user/${user.id}`} className="text-decoration-none">
            {user.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default UserList;
