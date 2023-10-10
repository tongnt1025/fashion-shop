import Header from '../components/Header';
import styles from './DefaultLayout.module.scss';
import Slider from '../../components/Slider';
import Card from '../../components/card';
import Footer from '../components/Footer';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <Header />
            </div>
            <div className={cx('content')}>{children}</div>
            <div>
                <Footer />
            </div>
        </div>
    );
}

export default DefaultLayout;
