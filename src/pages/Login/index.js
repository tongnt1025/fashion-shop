import axios from 'axios';
import { useState, createContext, useContext } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import styles from './Login.module.scss';
import { Route } from 'react-router-dom';
import Home from '../Home';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
function Login() {
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');
    const navigate = useNavigate();
    const UserContext = createContext();
    const submitHandler = (e) => {
        const userData = {
            user: user,
            pass: pass,
        };
        // axios.post('http://localhost/backend/create.php', userData).then((response) => {
        // });
        axios.get('http://localhost/backend/read.php').then((response) => {
            const users = response.data.data;
            console.log(users);
            users.map((item) => {
                if (pass === item.passWord && user === item.userName) {
                    navigate('/', { state: user });
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
                <button onClick={(e) => submitHandler(e)}>Đăng nhập</button>
            </div>
        </div>
    );
}
export default Login;
