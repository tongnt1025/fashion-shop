import images from '../../../asset/image';
import classNames from 'classnames/bind';
import styles from './Product.module.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from '../../../components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
function Product() {
    return (
        <Container className={cx('container')}>
            <Row>
               <p>TOP SẢN PHẨM BÁN CHẠY TRONG TUẦN</p>
                <Col>
                    <div className={cx('item')}>
                        <div className={cx('list-img')}>
                            <img src={images.product1}></img>
                            <img src={images.product2}></img>
                        </div>
                        <span className={cx('name')}>Quan jean 11</span>
                        <div className={cx('price')}>
                            <span>10000</span>
                            <span className={cx('price-old')}>10000</span>
                        </div>
                        <Button small animate leftIcon={<FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>}>
                            CHỌN MUA
                        </Button>
                    </div>
                </Col>
                <Col>
                    <div className={cx('item')}>
                        <div className={cx('list-img')}>
                            <img src={images.product1}></img>
                        </div>
                        <span className={cx('name')}>Quan jean 11</span>
                        <div className={cx('price')}>
                            <span>10000</span>
                            <span className={cx('price-old')}>10000</span>
                        </div>
                        <Button small animate leftIcon={<FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>}>
                            CHỌN MUA
                        </Button>
                    </div>
                </Col>
                <Col>
                    <div className={cx('item')}>
                        <div className={cx('list-img')}>
                            <img src={images.product1}></img>
                        </div>
                        <span className={cx('name')}>Quan jean 11</span>
                        <div className={cx('price')}>
                            <span>10000</span>
                            <span className={cx('price-old')}>10000</span>
                        </div>
                        <Button small animate leftIcon={<FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>}>
                            CHỌN MUA
                        </Button>
                    </div>
                </Col>
                <Col>
                    <div className={cx('item')}>
                        <div className={cx('list-img')}>
                            <img src={images.product1}></img>
                        </div>
                        <span className={cx('name')}>Quan jean 11</span>
                        <div className={cx('price')}>
                            <span>10000</span>
                            <span className={cx('price-old')}>10000</span>
                        </div>
                        <Button small animate leftIcon={<FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>}>
                            CHỌN MUA
                        </Button>
                    </div>
                </Col>
                
            </Row>
        </Container>
    );
}

export default Product;
