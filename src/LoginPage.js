import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage() {

  return (
    <div>
      <center>
      <h1>Login Page</h1>
      <input
        type="text"
        placeholder="Username"
       
      /><br />
      <input
        type="password"
        placeholder="Password"
     
      /><br />
      <br />
      <button >Login</button>
      </center>
    </div>
  );
}

export default LoginPage;
