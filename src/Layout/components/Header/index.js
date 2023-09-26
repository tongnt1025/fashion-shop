import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { useState, useEffect, useRef } from 'react';
import images from '../../../asset/image';
const cx = classNames.bind(styles);

function Header() {
    const headerElement = useRef();
    const [small, setSmall] = useState(false);

    useEffect(() => {
        window.onscroll = () => {
            if (window.scrollY >= 100) {
                setSmall(!small);
            } else {
                setSmall(small);
            }
        };
    }, []);
    return (
        <header className={cx('wrapper') + (small ? [' ' + styles.small] : '')}>
            <div className={cx('logo')}>
                <img src={images.logo} alt="logo"></img>
            </div>
            <div className={cx('inner')}>
                <div className={cx('menu-left')}>
                    <div className="menu-item">
                        <a>Trang Chủ</a>
                    </div>
                    <div className="menu-item">
                        <a>Sản Phẩm</a>
                    </div>
                    <div className="menu-item">
                        <a>Phụ Kiện</a>
                    </div>
                    <div className="menu-item">
                        <a>Liên Hệ</a>
                    </div>
                </div>
                <div className={cx('menu-right')}>
                    <button className={cx('login')}>Đăng nhập</button>
                    <button className={cx('register')}>Đăng ký</button>
                </div>
            </div>
        </header>
    );
}

export default Header;
