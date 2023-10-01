import Header from '../components/Header';
import styles from './DefaultLayout.module.scss';
import Slider from '../../components/Slider';
import Login from '../components/Login';
import Card from '../../components/card';
import Product from '../components/Product';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <Header />
            </div>
            {/* <Login/> */}
            <div className={cx('slider')}>
                <Slider />
            </div>
            {/* {<div className={cx('content')}>{children}</div>} */}
            <div className={cx('card')}>
                <Card />
            </div>

            <div>
                <Product />
            </div> 
        </div>
    );
}

export default DefaultLayout;
