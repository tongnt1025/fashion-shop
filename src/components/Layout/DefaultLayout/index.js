import Header from './Header';
import styles from './DefaultLayout.module.scss'
import classNames from 'classnames/bind';
const cx=classNames.bind(styles);
function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header/>
            <div className={cx('content')}>{children}</div>
        </div>
    );
}

export default DefaultLayout;
