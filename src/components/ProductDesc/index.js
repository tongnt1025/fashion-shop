import { createContext, useContext, useEffect, useState } from 'react';
import { json, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from './ProductDesc.module.scss';
import Button from '../Button';
import classNames from 'classnames/bind';
import { connect } from 'react-redux';
import { addTask } from '../../taskActions';
const cx = classNames.bind(styles);
function ProductDesc({ carts, addTask }) {
    let value = JSON.parse(localStorage.getItem('productDesc'));
    const [count, setCount] = useState(0);
    const [active, setActive] = useState('');
    const handlePlus = () => {
        setCount((prev) => {
            return prev + 1;
        });
    };
    const handleSize = (e) => {
        setActive((prev) => {
            return e.target.innerHTML;
        });
    };
    const handleSub = (e) => {
        setCount((prev) => {
            return prev === 0 ? 0 : prev - 1;
        });
    };
    const handleAddCart = () => {
        const newTask = {
            img: value.image01,
            name:value.title,
            quantity: count,
            totalPrice: count * value.price,
            size:active
        };
        alert("Thêm giỏ hàng vào thành công");
       return addTask(newTask);
    };
    return (
        <Container className={cx('container')}>
            <Row>
                <Col xl={5}>
                    <div className={cx('col-left')}>
                        <div className={cx('img')}>
                            <img src={value.image01}></img>
                        </div>
                    </div>
                </Col>
                <Col xl={7}>
                    <div className={cx('col-right')}>
                        <div className={cx('name')}>{value.title}</div>
                        <div className={cx('price')}>{value.price}</div>
                        <div className={cx('title')}>Kích cỡ</div>
                        <div className={cx('size')}>
                            <span
                                onClick={(e) => handleSize(e)}
                                className={cx('size-item') + (active === 'S' ? [' ' + styles.active] : '')}
                            >
                                S
                            </span>
                            <span
                                onClick={(e) => handleSize(e)}
                                className={cx('size-item') + (active === 'M' ? [' ' + styles.active] : '')}
                            >
                                M
                            </span>
                            <span
                                onClick={(e) => handleSize(e)}
                                className={cx('size-item') + (active === 'XL' ? [' ' + styles.active] : '')}
                            >
                                XL
                            </span>
                        </div>
                        <div className={cx('quantity')}>Số lượng</div>
                        <button className={cx('plus')} onClick={() => handleSub()}>
                            -
                        </button>
                        <button className={cx('number')}> {count} </button>
                        <button className={cx('sub')} onClick={() => handlePlus()}>
                            +
                        </button>
                        <div className={cx('total')}>
                            Thành tiền
                            <div>{count * value.price}</div>
                        </div>
                        <div className={cx('desc')}>{value.description}</div>
                        <div className={cx('button')}>
                            <Button large onClick={ handleAddCart}>
                                THÊM VÀO GIỎ
                            </Button>
                            <Button large>MUA NGAY</Button>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}
const mapStateToProps = (state) => {
    return {
        carts: state.carts,
    };
};

const mapDispatchToProps = {
    addTask,
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductDesc);
