import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { useState, useEffect, useRef } from 'react';
import images from '../../../asset/image';
import { Link } from 'react-router-dom';
import Button from '../../../components/Button';
import { Container } from 'react-bootstrap';
const cx = classNames.bind(styles);
function Header() {
    const [small, setSmall] = useState(false);
    const [navLink, setNavLink] = useState([
        {
            path: '/',
            display: 'Trang chủ',
            active: true,
        },
        {
            path: '/products',
            display: 'Sản phẩm',
            active: false,
        },
        {
            path: '/accessories',
            display: 'Phụ kiện',
            active: false,
        },
        {
            path: '/contact',
            display: 'Liên Hệ',
            active: false,
        },
    ]);
    useEffect(() => {
        window.onscroll = () => {
            if (window.scrollY >= 100) {
                setSmall(!small);
            } else {
                setSmall(small);
            }
        };
    },[]);
    const handleActive = (itemActive) => {
        setNavLink((prevState) => {
            prevState.forEach((element) => {
                if (JSON.stringify(element) === JSON.stringify(itemActive)) {
                    element.active = true;
                } else {
                    element.active = false;
                }
            });
            return prevState;
        });
    };
    return (
        <header className={cx('wrapper') + (small ? [' ' + styles.small] : '')}>
            <div className={cx('logo')}>
                <img src={images.logo} alt="logo"></img>
            </div>
            <div className={cx('inner')}>
                <div className={cx('menu-left')}>
                    {navLink.map((item, index) => {
                        return (
                            <div className="menu-item" key={index}>
                                <Link className={cx('item-link') + (item.active ? [' ' + styles.active] : '')} to={item.path} onClick={() => handleActive(item)}>
                                    {item.display}
                                </Link>
                            </div>
                        );
                    })}
                </div>
                <div className={cx('menu-right')}>
                    <Button to="/login" className={cx('login')}>
                        ĐĂNG NHẬP
                    </Button>
                    <Button className={cx('register')}>ĐĂNG KÝ</Button>
                </div>
            </div>
        </header>
    );
}

export default Header;
