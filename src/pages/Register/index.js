import axios from 'axios';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './Register.module.scss';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
function Register() {
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');
    const navigate = useNavigate();
    const submitHandler = (e) => {
        const userData = {
            user: user,
            pass: pass,
        };
        axios.post('http://localhost/backend/create.php', userData).then((response) => {
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
                    <button onClick={(e) => submitHandler(e)}>Đăng kí</button>
                </div>
                <Link to="/login">Quay về trang đăng nhập</Link>
            </div>
        </div>
    );
}

export default Register;
