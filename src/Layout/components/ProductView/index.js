import images from '../../../assets/images'; 
import classNames from 'classnames/bind';
import styles from './Product.module.scss';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from '../../../components/Button';
import { Navigate } from 'react-router-dom';
import { Fragment, createContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef, useState } from 'react';
import ProductDesc from '../../../components/ProductDesc';
import getAllProducts from '../../../assets/fake-data/products';
import { useNavigate } from 'react-router-dom';
const cx = classNames.bind(styles);
function Product() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
       
            setProducts(getAllProducts());
        
    }, []);
    const navigate=useNavigate();
    let bestSellingProduct = [];
    let newProducts = [];
    for (let i = 0; i < products.length; i++) {
        if (i < 4) {
            bestSellingProduct.push(products[i]);
        } else if (i < 12) {
            newProducts.push(products[i]);
        }
    }
   const handleClick=(product)=>{
        localStorage.setItem('productDesc',JSON.stringify(product));
        navigate('/productdesc')
   }
    return (
        <Container className={cx('container')}>
            <p>TOP SẢN PHẨM BÁN CHẠY TRONG TUẦN</p>
            <Row>
                {bestSellingProduct.map((product, index) => {
                    return (
                        <Col xl={3} key={index}>
                                    <div className={cx('item')} onClick={(e)=> handleClick(product)}>
                                        <div className={cx('list-img')}>
                                            <img src={product.image01}></img>
                                            <img src={product.image02}></img>
                                        </div>
                                        <span className={cx('name')}>{product.title}</span>
                                        <div className={cx('price')}>
                                            <span>{product.price}</span>
                                        </div>
                                        <Button
                                            small
                                            animate
                                            leftIcon={<FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>}
                                        >
                                            CHỌN MUA
                                        </Button>
                                    </div>
                        </Col>
                    );
                })}
                <p>SẢN PHẨM MỚI</p>
                {newProducts.map((product, index) => {
                    return (
                        <Col xl={3} key={index}>
                            <div className={cx('item')} onClick={(e)=> handleClick(product)}>
                                <div className={cx('list-img')}>
                                    <img src={product.image01}></img>
                                    <img src={product.image02}></img>
                                </div>
                                <span className={cx('name')}>{product.title}</span>
                                <div className={cx('price')}>
                                    <span>{product.price}</span>
                                </div>
                                <Button
                                    small
                                    animate
                                    leftIcon={<FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>}
                                >
                                    CHỌN MUA
                                </Button>
                            </div>
                        </Col>
                    );
                })}
                <div className={cx('banner')}>
                    <img src={images.banner}></img>
                </div>
                <p>PHỔ BIẾN</p>
                {products.map((product, index) => {
                    return (
                        <Col xl={3} key={index} onClick={(e)=> handleClick(product)}>
                            <div className={cx('item')}>
                                <div className={cx('list-img')}>
                                    <img src={product.image01}></img>
                                    <img src={product.image02}></img>
                                </div>
                                <span className={cx('name')}>{product.title}</span>
                                <div className={cx('price')}>
                                    <span>{product.price}</span>
                                </div>
                                <Button
                                    small
                                    animate
                                    leftIcon={<FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>}
                                >
                                    CHỌN MUA
                                </Button>
                            </div>
                        </Col>
                    );
                })}
            </Row>
        </Container>
    );
}
export default Product;
