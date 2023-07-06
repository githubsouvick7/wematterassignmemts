import React, { useState } from "react";

const SginupPage = () => {
    const [submit, setSubmit] = useState(false);
    const [validation, setValidation] = useState([
        {
            email: "",
            phone: "",
            password: ""
        }
    ]);
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValidation({ ...validation, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validateForm(validation);
        if (Object.keys(errors).length === 0) {
            localStorage.setItem("signupData", JSON.stringify(validation));
            console.log("Form submitted:", validation);
            setValidation({
                email: "",
                phone: "",
                password: ""
            });
        } else {
            setErrors(errors);
        }
        setSubmit(true);
    };

    const validateForm = (data) => {
        const errors = {};

        if (!data.password.trim()) {
            errors.password = "Password is required";
        } else if (data.password.length < 6) {
            errors.password = "Password should be at least 6 characters long";
        }

        if (data.password !== data.confirmPassword) {
            errors.confirmPassword = "Passwords do not match";
        }

        return errors;
    };

    return (
        <div className="container">
            <h1>Sign-Up page</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                        Email address
                    </label>
                    <input
                        type="email"
                        name="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter email address"
                        value={validation.email}
                        onChange={(e) => handleChange(e)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                        Phone number
                    </label>
                    <input
                        type="number"
                        name="phone"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter phone number"
                        value={validation.phone}
                        onChange={(e) => handleChange(e)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                        Password
                    </label>
                    <input
                        type="password"
                        name="password"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter password"
                        value={validation.password}
                        onChange={(e) => handleChange(e)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">
                        Confirm Password
                    </label>
                    <input
                        type="password"
                        name="confirmPassword"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="confirm password"
                        value={validation.confirmPassword}
                        onChange={(e) => handleChange(e)}
                    />
                </div>

                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
                {submit ? <h4>Submitted successfully , Click here to <a href="/Login">Login</a></h4>
                    :
                    <h4><a href="/Login">Login</a></h4>}
            </form>
        </div>
    );
};

export default SginupPage;
