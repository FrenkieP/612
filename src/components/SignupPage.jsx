import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

function SignupPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    address: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = () => {
    navigate("/menu");
  };

  return (
    <div>
      <h2 className="mb-5">Fill in your information</h2>
      <div>
        {[
          "Firstname",
          "Lastname",
          "username",
          "password",
          "confirmPassword",
        ].map((field) => (
          <div key={field}>
            <input
              type={field.includes("password") ? "password" : "text"}
              name={field}
              placeholder={field.split(/(?=[A-Z])/).join(" ")}
              value={form[field]}
              onChange={handleChange}
              style={{ border: "1px solid red", marginBottom: "20px", borderRadius:"10px", padding:"2px" }}
            />
          </div>
        ))}
      </div>
      <Button className="mt-4"
        onClick={handleSignup}
        style={{ border: "1px solid black", backgroundColor: "#F4CCCC" }}>
        Sign up
      </Button>
      <div className="mt-4">
        <Link
          to="/"
          style={{
            backgroundColor: "transparent",
            border: "none",
            color: "black",
            cursor: "pointer",
          }}>
          Back
        </Link>
      </div>
    </div>
  );
}

export default SignupPage;
