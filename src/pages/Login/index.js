import axios from 'axios';
import { useState, createContext, useContext } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import styles from './Login.module.scss';
import { Route } from 'react-router-dom';
import Home from '../Home';
import Products from '../Products';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
function Login() {
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');
    const [error,setError] = useState('');
    const navigate = useNavigate();
   
    const submitHandler = (e) => {
        const userData = {
            user: user,
            pass: pass,
        };
        axios.get('http://localhost/backend/apiAllUser.php').then((response) => {
            const users = response.data.data;
            console.log(users);
            users.map((item) => {
                if (pass === item.passWord && user === item.userName) {
                    setError("");
                    localStorage.removeItem('cart');
                    navigate('/', { state: user });
                }
                else{
                    setError("Tài khoản không chính xác");
                }
            });
        });
    };
    return (
        <div className={cx('container')}>
            <div className={cx('card')}>
                <h2>YOLO</h2>

                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    id="username"
                    value={user}
                    onChange={(e) => setUser(e.target.value)}
                    placeholder="Enter your username"
                />
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                    placeholder="Enter your password"
                />
                <p className={cx('error')}>{error}</p>
                <button onClick={(e) => submitHandler(e)}>Đăng nhập</button>
            </div>
        </div>
    );
}
export default Login;
