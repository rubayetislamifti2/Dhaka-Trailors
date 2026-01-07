import { useState } from "react";
import Navbar from "../components/Navbar";
import './profile.css';

function Profile(){
    const [profile, setProfile] = useState({
    name: "Admin User",
    email: "admin@gmail.com",
    mobile: "01XXXXXXXXX",
    address: "Satkhira",
    role: "Master",
  });

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

    return(
        <>
        <Navbar/>
            <div className="profile-page">
        <h1 className="page-title">Profile</h1>

        <div className="profile-card">
          {/* Left */}
          <div className="profile-left">
            <div className="avatar">
              <span>👤</span>
            </div>
            <h3>{profile.name}</h3>
            <p className="role">{profile.role}</p>

            <label className="upload-btn">
              Upload Photo
              <input type="file" hidden />
            </label>
          </div>

          {/* Right */}
          <div className="profile-right">
            <h3>Personal Information</h3>

            <div className="form-grid">
              <div>
                <label>Name</label>
                <input
                  name="name"
                  value={profile.name}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label>Email</label>
                <input
                  name="email"
                  value={profile.email}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label>Mobile</label>
                <input
                  name="mobile"
                  value={profile.mobile}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label>Address</label>
                <input
                  name="address"
                  value={profile.address}
                  onChange={handleChange}
                />
              </div>
            </div>

            <h3 className="mt">Change Password</h3>

            <div className="form-grid">
              <div>
                <label>New Password</label>
                <input type="password" />
              </div>
              <div>
                <label>Confirm Password</label>
                <input type="password" />
              </div>
            </div>

            <button className="save-btn">Update Profile</button>
          </div>
        </div>
      </div>
        </>
    );
}

export default Profile;