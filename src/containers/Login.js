import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import GoogleButton from "react-google-button";
import { useUserAuth } from "../context/UserAuthContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "./login.css";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const { logIn, googleSignIn } = useUserAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            await logIn(email, password);
            navigate("/Header")
        } catch (err) {
            setError(err.message);
        }
    }

    const handleGoogleSignIn = async (e) => {
        e.preventDefault();
        try {
            await googleSignIn();
            navigate("./Header")
        } catch (err) {
            setError(err.message);
        }
    }
    return (
        <>
            <div className="cont">
                <h2 className="mb-3">Shop-Now Login</h2>
                {error && <span variant="danger">{error}</span>}
                <form onSubmit={handleSubmit}>
                    <div className="row mb-3">
                        <div className="col-sm-10">
                            <input type="email" placeholder="email adress" className="form-control" id="inputEmail3" style={{ width: "400px" }} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-sm-10">
                            <input type="password" placeholder="password" className="form-control" id="inputPassword3" style={{ width: "400px" }} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary" style={{ width: "300px" }}>Log In</button>
                </form>&nbsp;
                {/* <div> */}
                <div class="d-grid gap-2 col-6 mx-auto">
                    <GoogleButton
                        className="g-btn"
                        type="dark"
                        onClick={handleGoogleSignIn}
                    />
                </div>
                {/* </div> */}
                <div className="p-4 box mt-3 text-center">
                    Don't have an account? <Link to="/Signup" >Sign up</Link>
                </div>
            </div>
        </>
    )
}

export default Login;