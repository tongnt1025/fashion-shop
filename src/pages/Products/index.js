import classNames from 'classnames/bind';
import styles from './Products.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown19, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import Button from '../../components/Button';
import getAllProducts from '../../assets/fake-data/products';
import { useNavigate } from 'react-router-dom';
const cx = classNames.bind(styles);
function Products() {
    const navigate = useNavigate();
    const [arrayCheckbox, setArrayCheckbox] = useState(['ao-thun','ao-somi','quan-jean']);
    const [products, setProducts] = useState(getAllProducts());
    // let data = {};
    // for (let i = 0; i < arrayCheckbox.length; i++) {
    //     let key = `data${i}`;
    //     let dataNew = { [key]: arrayCheckbox[i] };
    //     data = { ...data, ...dataNew };
    // }
    
    // axios
    //     .post('https://nguyentong1025.000webhostapp.com/apiCustomerProduct.php/', data)
    //     .then((response) => {
    //         console.log(response.data.data);
    //         setProducts(response.data.data);
           
    //     })
    //     .catch((error) => {
    //         console.error('Error fetching data:', error);
    //         // Handle the error, e.g., set an error state or show an error message
    //     });
   
    const handleChange = (e) => {
        setArrayCheckbox((prev) => {
            if (e.target.checked) {
                return [...prev, e.target.value];
            } else {
                return prev.filter((item) => item !== e.target.value);
            }
        });
    };
    console.log(arrayCheckbox);
    useEffect(()=>{
      setProducts((prev)=>{
           let newProducts=[];
           if(arrayCheckbox.length===0){
            return getAllProducts();
           }
           prev=getAllProducts();
           for(let i=0;i<prev.length;i++){
                for(let j=0;j<arrayCheckbox.length;j++){
                    if(prev[i].categorySlug===arrayCheckbox[j]){
                        newProducts.push(prev[i]);
                        console.log(123);
                    }
                }
           }
           return newProducts;
        });
    },[arrayCheckbox])
    const handleClick = (product) => {
        localStorage.setItem('productDesc', JSON.stringify(product));
        navigate('/productdesc');
    };
    return (
        <Container className={cx('container')}>
            <Row>
                <Col xl={3}>
                    <div>
                        <span className={cx('title')}>Danh Mục Sản Phẩm</span>
                        <ul>
                            <li>
                                <input
                                    checked={arrayCheckbox.includes('ao-thun')}
                                    type="checkbox"
                                    className={cx('custom-checkbox')}
                                    onChange={(e) => handleChange(e)}
                                    value="ao-thun"
                                />{' '}
                                Áo thun
                            </li>
                            <li>
                                <input
                                    checked={arrayCheckbox.includes('ao-somi')}
                                    type="checkbox"
                                    className={cx('custom-checkbox')}
                                    onChange={(e) => handleChange(e)}
                                    value="ao-somi"
                                />{' '}
                                Áo sơ mi
                            </li>
                            <li>
                                <input
                                    checked={arrayCheckbox.includes('quan-jean')}
                                    type="checkbox"
                                    className={cx('custom-checkbox')}
                                    onChange={(e) => handleChange(e)}
                                    value="quan-jean"
                                />{' '}
                                Quần jean
                            </li>
                        </ul>
                    </div>
                </Col>
                <Col xl={9}>
                    <Row>
                        {products.map((product, index) => {
                            return (
                                <Col xl={4} key={index}>
                                    <div className={cx('item')} onClick={(e) => handleClick(product)}>
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
                </Col>
            </Row>
        </Container>
    );
}

export default Products;
