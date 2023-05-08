import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
import "./signup.css";

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const { signUp } = useUserAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            await signUp(email, password);
            navigate("/")
        } catch (err) {
            setError(err.message);
        }
    }
    return (
        <>
            <div className="cont2">
                <h2 className="mb-3">Shop-Now Signup</h2>
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
                    <button type="submit" className="btn btn-primary" style={{ width: "300px" }}>Signup</button>
                </form>&nbsp;

                <div className="p-4 box mt-3 text-center">
                    Already have an account? <Link to="/" >Login</Link>
                </div>
            </div>
        </>
    )
}

export default Signup;