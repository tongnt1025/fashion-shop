import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { Tooltip } from 'react-tooltip';
import { useState, useEffect, useRef, createContext, useContext } from 'react';
import { Fragment } from 'react';
import logo from '../../../assets/images/Logo-2.png'
import { Link } from 'react-router-dom';
import Button from '../../../components/Button';
import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
function Header({carts}) {
    const { state } = useLocation();
    const [small, setSmall] = useState(false);
    const [user, setUser] = useState(state);
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
    }, []);
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
    const handleLogOut = () => {
        setUser(null);
    };

    return (
        <header className={cx('wrapper') + (small ? [' ' + styles.small] : '')}>
            <div className={cx('logo')}>
                <img src={logo} alt="logo"></img>
            </div>
            <div className={cx('inner')}>
                <div className={cx('menu-left')}>
                    {navLink.map((item, index) => {
                        return (
                            <div className="menu-item" key={index}>
                                <Link
                                    className={cx('item-link') + (item.active ? [' ' + styles.active] : '')}
                                    to={item.path}
                                    onClick={() => handleActive(item)}
                                >
                                    {item.display}
                                </Link>
                            </div>
                        );
                    })}
                </div>
                <div className={cx('menu-right')}>
                    {user === null ? (
                        <Fragment>
                            <Button to="/login" className={cx('login')}>
                                ĐĂNG NHẬP
                            </Button>
                            <Button to="/register" className={cx('register')}>
                                ĐĂNG KÝ
                            </Button>
                        </Fragment>
                    ) : (
                        <div>
                            <FontAwesomeIcon
                                className={cx('icon-cart')}
                                data-tooltip-id="my-tooltip"
                                icon={faShoppingCart}
                            ></FontAwesomeIcon>
                            <FontAwesomeIcon className={cx('icon-user')} icon={faUser}></FontAwesomeIcon>
                            <Button className={cx('user-data')}>{user}</Button>
                            <Button to="" className={cx('register')} onClick={() => handleLogOut()}>
                                ĐĂNG XUẤT
                            </Button>
                            <Tooltip
                                id="my-tooltip"
                                place={'bottom'}
                                style={{ backgroundColor: 'white', boxShadow: '10px 10px 10px 10px #aaaaaa' }}
                            >
                                {carts.length > 0 ? (
                                    carts.map((item, index) => {
                                        return (
                                            <div className={cx('cart-container')}>
                                                <div className={cx('cart-img')}>
                                                    <img src={item.img ?? ""}></img>
                                                </div>
                                                <div className={cx('cart-name')}>{item.name}</div>
                                                <div className={cx('cart-quantity')}> x {item.quantity}{item.size}</div>
                                                <div className={cx('cart-total')}>{item.totalPrice}</div>
                                            </div>
                                        ) 
                                    })
                                ) : (
                                    <div className={cx('cart-name')}>Chưa có sản phẩm</div>
                                )}
                            </Tooltip>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}
const mapStateToProps = (state) => {
    return {
      carts: state.carts,
    };
  };
export default connect(mapStateToProps)(Header);
