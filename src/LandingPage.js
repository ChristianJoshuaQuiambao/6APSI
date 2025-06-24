import React, { useState } from 'react';

function LandingPage() {
 
  return (
    <div>
      <h2>Landing Page</h2>
      <input
        type="text"
        placeholder="Username"
       
      /><br />
      <input
        type="password"
        placeholder="Password"
     
      /><br />
      <button >Login</button>
    </div>
  );
}

export default LandingPage;
