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
    const [email, setEmail] = useState('');
    const [error, setError] = useState({
        errorEmail: '',
        errorPass: ' ',
    });
    const navigate = useNavigate();
    const submitHandler = (e) => {
        let emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
        if (!emailRegex.test(email) || pass.length < 8) {
            e.currentTarget.disable = true;
        } else {
            const userData = {
                user: user,
                pass: pass,
                email: email,
            };
            localStorage.setItem("username",user);
            localStorage.setItem("password",pass);

            // fetch('https://nguyentong1025.000webhostapp.com/apiCreateUser.php', {
            //     method: 'POST',
            //     body: JSON.stringify(userData),
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            // })
            //     .then((response) => response.json())
            //     .then((data) => {
            //         // Handle the response data
            //     })
            //     .catch((error) => {
            //         console.error('Error creating user:', error);
            //         // Handle the error, e.g., set an error state or show an error message
            //     });

        }
    };
    const handleBlurEmail = (e) => {
        let emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
        setError((prev) => {
            return !emailRegex.test(email)
                ? {
                      errorEmail: 'Email không hợp lệ',
                      errorPass: prev.errorPass,
                  }
                : {
                      errorEmail: '',
                      errorPass: prev.errorPass,
                  };
        });
    };
    const handleBlurPass = (e) => {
        setError((prev) => {
            return pass.length < 8
                ? {
                      errorEmail: prev.errorEmail,
                      errorPass: 'Mật khẩu dài ít nhất 8 kí tự',
                  }
                : {
                      errorEmail: prev.errorEmail,
                      errorPass: '',
                  };
        });
    };
    return (
        <div className={cx('container')}>
            <div className={cx('card')}>
                <h2>YOLO</h2>
                <label>Email</label>
                <input
                    value={email}
                    type="email"
                    onBlur={(e) => handleBlurEmail(e)}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Nhập email"
                />
                <span className={cx('error')}>{error.errorEmail}</span>
                <label>Tài khoản</label>
                <input
                    type="text"
                    value={user}
                    onChange={(e) => setUser(e.target.value)}
                    placeholder="Nhập tài khoản"
                />
                <label>Mật khẩu</label>
                <input
                    type="password"
                    onBlur={(e) => handleBlurPass(e)}
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                    placeholder="Nhập mật khẩu"
                />
                <span className={cx('error')}>{error.errorPass}</span>
                <button onClick={(e) => submitHandler(e)}>Đăng ký</button>
                <Link className={cx('prevLogin')} to="/login">
                    Quay về trang đăng nhập
                </Link>
            </div>
        </div>
    );
}

export default Register;
