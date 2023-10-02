import axios from 'axios';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './Login.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
function Login() {
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');
    const navigate = useNavigate();
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
              if(pass===item.passWord && user===item.userName) {
                console.log("dang nhap thanh cong");
              }
            });
        });
        
    };
    return (
        <div>
            <div className={cx('wrapper')}>
                <div className={cx('input-container')}>
                    <label>Username </label>
                    <input value={user} onChange={(e) => setUser(e.target.value)} />
                </div>
                <div className={cx('input-container')}>
                    <label>Password </label>
                    <input value={pass} onChange={(e) => setPass(e.target.value)} />
                </div>
                <div className={cx('button-container')}>
                    <button onClick={(e) => submitHandler(e)}>Đăng nhập</button>
                </div>
            </div>
        </div>
    );
}

export default Login;
