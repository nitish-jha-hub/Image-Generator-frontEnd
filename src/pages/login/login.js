import PointsContext from "../../context/pointsContext";
import Navbar from "../common/Navbar/navbar";
import {useState, useContext} from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

const Login = () => {
    const {login} = useContext(PointsContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    
    const handleClick = async() => {
        if(!email && !password){
            return;
        }
        const res = await fetch("https://image-generator-backend-rknd.onrender.com/api/v1/auth/login", {
            headers: {
                "Content-Type": "application/json",
            },
            method: 'POST',
            body: JSON.stringify({email, password})
        });
        const data = await res.json();
        if(data.status === "success"){
            localStorage.setItem("authorization", data.data.token);
            login();
            navigate("/image-generator");

        }
    }

    return (
        <div>
            <Navbar page='login'/>
            <div>
                <input placeholder="enter your email" onChange={(e)=>setEmail(e.target.value)}/>
                <input placeholder="enter your password" onChange={(e)=>setPassword(e.target.value)}/>
                <button className="btnlogin" onClick={handleClick}>Login</button>
            </div>
        </div>
    )
}

export default Login;