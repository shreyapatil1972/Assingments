import { useState } from 'react';
import './App.css';
import UserList from './components/UserList';
import UserDetails from './components/UserDetails';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="container-fluid">
        <div className="row" >
          <div className="col-md-4 user-list" style={{width:'500px'}}>
            <h2 className="text-center">User Profiles</h2>
            <UserList />
          </div>

          <div className="col-md-8 user-details"  style={{width:'500px',alignContent:'center'}}>
            <h2 className="text-center">User Details</h2>
            <Routes>
              <Route path="/" element={<p className="text-center">User details will show here</p>} />
              <Route path="/user/:id" element={<UserDetails />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
