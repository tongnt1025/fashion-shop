import classNames from 'classnames/bind';
import { Fragment,useContext } from 'react';
import Slider from '../../components/Slider';
import Card from '../../components/card';
import Product from '../../Layout/components/Product';
import styles from './Home.module.scss'
import { useLocation } from 'react-router-dom';
const cx = classNames.bind(styles);
function Home(children) {
    
    
    return (
        <div>
             
             <div className={cx('slider')}>
                <Slider />
            </div>
            <h5>{children.userName}</h5>
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
