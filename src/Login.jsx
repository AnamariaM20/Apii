import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsAuthenticated }) => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();

      const user = data.users.find(
        (user) => user.email === formData.email && user.password === formData.password
      );

      if (user) {
        alert("Login successful!");
        setIsAuthenticated(true); 
        navigate("/"); 
      } else {
        setErrors({ general: "Invalid email or password" });
      }
    } catch (error) {
      console.error("Error fetching users:", error);
      setErrors({ general: "Something went wrong. Try again later." });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>Login</h4>

      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          className="form-control"
          autoComplete="off"
          value={formData.email}
          onChange={(event) => setFormData({ ...formData, email: event.target.value })}
        />
      </div>

      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          className="form-control"
          autoComplete="off"
          value={formData.password}
          onChange={(event) => setFormData({ ...formData, password: event.target.value })}
        />
      </div>

      {errors.general && <p style={{ color: "red" }}>{errors.general}</p>}

      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
