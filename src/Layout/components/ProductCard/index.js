import images from '../../../asset/image';
import classNames from 'classnames/bind';
import styles from './ProductCard.module.scss';
import Button from '../../../components/Button';
function ProductCard() {
    return (
        <div>
            <div className="list-img">
                <img src={images.product1}></img>
            </div>
            <span></span>
            <span>10000</span>
            <Button>vcvcv</Button>
        </div>
    );
}

export default ProductCard;
