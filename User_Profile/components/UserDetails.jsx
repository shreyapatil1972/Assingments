import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './UserDetails.css';

const UserDetails = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [userDetail, setUserDetail] = useState(null);

  useEffect(() => {
    async function fetchAPI() {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        setUserDetail(response.data);
      } catch (error) {
        console.error('Error fetching user details:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchAPI();
  }, [id]);

  if (loading) return <div className="spinner-grow text-primary text-center" role="status"></div>;
  if (!userDetail) return <div className="alert alert-danger text-center">User details not found.</div>;

  return (
    <div className="card user-card" style={{width:'900px',height:'500px'}}>
      <div className="card-body text-center">
        <img
          src="https://cdn-icons-png.flaticon.com/512/847/847969.png"
          alt="User"
          className="user-avatar"
        />
        <h4 className="user-name">{userDetail.name}</h4>
        <p><strong>Email:</strong> {userDetail.email}</p>
        <p><strong>Phone:</strong> {userDetail.phone}</p>
        <p><strong>Address:</strong> {userDetail.address.street}, {userDetail.address.city}</p>
        <small>Last updated 3 mins ago</small>
      </div>
    </div>
  );
};

export default UserDetails;
