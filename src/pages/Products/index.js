import classNames from 'classnames/bind';
import styles from './Products.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import Button from '../../components/Button';
import {useNavigate } from 'react-router-dom';
const cx = classNames.bind(styles);

function Products() {
    const navigate=useNavigate();
    const [arrayCheckbox, setArrayCheckbox] = useState([]);
    const [products, setProducts] = useState([]);
    let data = {};
    for (let i = 0; i < arrayCheckbox.length; i++) {
        let key = `data${i}`;
        let dataNew = { [key]: arrayCheckbox[i] };
        data = { ...data, ...dataNew };
    }

    axios.post('http://localhost/backend/apiCustomerProduct.php', data).then((response) => {
        setProducts(response.data.data);
    });
    const handleChange = (e) => {
        setArrayCheckbox((prev) => {
            if (e.target.checked) {
                return [...prev, e.target.value];
            } else {
                return prev.filter((item) => item !== e.target.value);
            }
        });
    };
    const handleClick=(product)=>{
        localStorage.setItem('productDesc',JSON.stringify(product));
        navigate('/productdesc')
   }
    return (
        <Container className={cx('container')}>
            <Row>
                <Col xl={3}>
                    <div>
                        <span className={cx('title')}>Danh Mục Sản Phẩm</span>
                        <ul>
                            <li>
                                <input type="checkbox" className={cx('custom-checkbox')} onChange={(e) => handleChange(e)} value="aothun" /> Áo thun
                            </li>
                            <li>
                                <input type="checkbox" className={cx('custom-checkbox')} onChange={(e) => handleChange(e)} value="aosomi" /> Áo sơ mi
                            </li>
                            <li>
                                <input type="checkbox" className={cx('custom-checkbox')} onChange={(e) => handleChange(e)} value="quanjean" /> Quần jean
                            </li>
                        </ul>
                    </div>
                </Col>
                <Col xl={9}>
                    <Row>
                        {products.map((product, index) => {
                            return (
                                <Col xl={4} key={index} >
                                    <div className={cx('item')} onClick={(e)=> handleClick(product)} >
                                        <div className={cx('list-img')}>
                                            <img src={product.imgmodel}></img>
                                            <img src={product.imgproduct}></img>
                                        </div>
                                        <span className={cx('name')}>{product.name}</span>
                                        <div className={cx('price')}>
                                            <span>{product.price}</span>
                                            <span className={cx('price-old')}>{product.pricepromotion}</span>
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
                </Col>
            </Row>
        </Container>
    );
}

export default Products;
