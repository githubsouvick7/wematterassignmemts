import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = () => {
        const savedData = localStorage.getItem("signupData");
        if (savedData) {
            const userData = JSON.parse(savedData);
            if (
                formData.email === userData.email &&
                formData.password === userData.password
            ) {
                setError("");
                console.log("Login successful");
                navigate("/home");
            } else {
                setError("Invalid email or password");
            }
        } else {
            setError("User not found");
        }
    };

    return (
        <div className="container">
            <h1>Login Page</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                        Email address
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        name="email"
                        aria-describedby="emailHelp"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                        Password
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="exampleInputEmail1"
                        name="password"
                        aria-describedby="emailHelp"
                        value={formData.password}
                        onChange={handleChange}
                    />
                </div>

                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default LoginPage;
