import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginPage from './LoginPage';

function LandingPage() {
    const navigate = useNavigate();

    const toLoginPage = () => {
    navigate('/login');
    };
 
  return (
    <div>
    <center>
        <h1>Landing Page</h1>
        <button type='button' onClick={toLoginPage}>To the login page</button>
    </center>
    </div>
  );
}

export default LandingPage;
