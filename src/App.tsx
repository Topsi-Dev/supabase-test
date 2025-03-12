import React, { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { useNavigate } from "react-router";

import "./App.css";

function App() {
  const navigate = useNavigate();

  const supabase = createClient(
    "https://jljybdnolswucngwzrro.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpsanliZG5vbHN3dWNuZ3d6cnJvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE3OTcyMDIsImV4cCI6MjA1NzM3MzIwMn0.1HWS3s50IxYM8xopF3DlSMVTNS_NNRTQUGogW77XGFE"
  );

  const handleSignIn = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        queryParams: {
          access_type: "offline",
          prompt: "consent",
        },
      },
    });
  };

  // useEffect(()=>{
  //     // Get the URL hash (the part after #)
  //     const hash = window.location.hash;
  //     console.log("hash")

  //     // Parse the URL hash to extract tokens
  //     const params = new URLSearchParams(hash.replace('#', '?'));

  //     const accessToken = params.get('access_token');
  //     const expiresAt = params.get('expires_at');
  //     const refreshToken = params.get('refresh_token');
  //     const tokenType = params.get('token_type');

  //     if (accessToken) {
  //       // Store tokens (e.g., in localStorage)
  //       localStorage.setItem('access_token', accessToken);

  //       console.log("Access Token:", accessToken);
  //       console.log("Expires At:", expiresAt);
  //       console.log("Refresh Token:", refreshToken);
  //       console.log("Token Type:", tokenType);

  //       // Redirect to another page after successful authentication
  //       navigate("/home"); // Change to your target URL
  //     } else {
  //       console.error("No access token found in the URL.");
  //     }
  // },[]);

  return (
    <div className="App">
      <header className="App-header">
        <button
          onClick={async () => await handleSignIn()}
          style={{ fontSize: "20px" }}
        >
          SignIn
        </button>
      </header>
    </div>
  );
}

export default App;
