import axios from 'axios';
import { useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
function Login() {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const submitHandler = (e) => {
        const data = {
            name: userName,
            pass: password,
        };
        e.preventDefault();
        axios.post('http://localhost/backend/index.php',data).then(function(response){
            console.log(response.data);
            navigate('/');
        });
        axios.get('http://localhost/backend/index.php').then(function(response) {
            console.log(response.data);
        });
    };
    
       
    
    return (
        <div>
            <div className="input-container">
                <label>Username </label>
                <input type="text" value={userName} name="uname" onChange={(e) => setUserName(e.target.value)} />
            </div>
            <div className="input-container">
                <label>Password </label>
                <input type="password" name="pass" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="button-container">
                <button onClick={(e) => submitHandler(e)}>Submit</button>
            </div>
        </div>
    );
}

export default Login;
