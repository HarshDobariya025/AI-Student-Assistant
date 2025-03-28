import React from "react";
import { UserButton, useUser } from "@clerk/clerk-react";
import "./Profile.css";

const Profile2 = () => {
  const { user, isLoaded } = useUser();

  if (!isLoaded) {
    return <p className="loading">Loading...</p>;
  }

  return(
    <>
    <div className="profile-container">

      <h1 className="profile-title">User Profile</h1>
      
      <div className="profile-content">
        {/* Left Section: Profile Image & Basic Info */}
        <div className="profile-sidebar">
          <img src={user.imageUrl} alt="Profile" className="profile-image" />
          <h2>{user.fullName || "N/A"}</h2>
          <p className="username">{user.username || "Student"}</p>
        </div>

        {/* Right Section: Detailed Information */}
        <div className="profile-details">
          <div className="details-grid">
            <p><strong>Email:</strong> {user.emailAddresses[0]?.emailAddress || "N/A"}</p>
            <p><strong>Phone Number:</strong> {user.phoneNumbers[0]?.phoneNumber || "N/A"}</p>
            <p><strong>Account Created:</strong> {new Date(user.createdAt).toLocaleDateString()}</p>
            <p><strong>Last Sign-in:</strong> {user.lastSignInAt ? new Date(user.lastSignInAt).toLocaleString() : "N/A"}</p>
            <p><strong>External ID:</strong> {user.externalId || "N/A"}</p>
            <p><strong>Two-Factor Authentication:</strong> {user.hasTwoFactorEnabled ? "Enabled" : "Disabled"}</p>
          </div>

          {/* Metadata Sections */}
          <div className="metadata">
            <h3>Public Metadata</h3>
            <pre>{JSON.stringify(user.publicMetadata, null, 2)}</pre>

            {/* <h3>Private Metadata</h3>
            <pre>{JSON.stringify(user.privateMetadata, null, 2)}</pre> */}
          </div>
        </div>
      </div>
    </div>
    </>
  ) 
};

export default Profile2;
