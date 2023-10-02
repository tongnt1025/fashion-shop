import classNames from 'classnames/bind';
import { Fragment } from 'react';
import Slider from '../../components/Slider';
import Card from '../../components/card';
import Product from '../../Layout/components/Product';
import styles from './Home.module.scss'
const cx = classNames.bind(styles);
function Home({children}) {
    return (
        <div>
             <div className={cx('slider')}>
                <Slider />
            </div>
            <div className={cx('content')}>{children}</div>
             <div className={cx('card')}>
                <Card />
            </div>

            <div>
                <Product />
            </div> 
        </div>
    );
}

export default Home;
