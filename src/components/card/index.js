import classNames from 'classnames/bind';
import styles from './Card.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faCreditCard, faGem, faHandHoldingHeart } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
function Card() {
    return (
        <div className={cx('wrapper')}>
            <Container className={cx('container')}>
                <Row>
                    <Col>
                        <div className={cx('card-item')}>
                            <FontAwesomeIcon className={cx('icon')} icon={faBagShopping}></FontAwesomeIcon>
                            <div className={cx('content')}>
                                <span className={cx('title')}>Mien phi giao hang</span>
                                <span  className={cx('desc')}>Mien phi ship voi don hang 239k</span>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className={cx('card-item')}>
                            <FontAwesomeIcon className={cx('icon')} icon={faBagShopping}></FontAwesomeIcon>
                            <div className={cx('content')}>
                                <span className={cx('title')}>Mien phi giao hang</span>
                                <span  className={cx('desc')}>Mien phi ship voi don hang 239k</span>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className={cx('card-item')}>
                            <FontAwesomeIcon className={cx('icon')} icon={faBagShopping}></FontAwesomeIcon>
                            <div className={cx('content')}>
                                <span className={cx('title')}>Mien phi giao hang</span>
                                <span  className={cx('desc')}>Mien phi ship voi don hang 239k</span>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className={cx('card-item')}>
                            <FontAwesomeIcon className={cx('icon')} icon={faBagShopping}></FontAwesomeIcon>
                            <div className={cx('content')}>
                                <span className={cx('title')}>Mien phi giao hang</span>
                                <span  className={cx('desc')}>Mien phi ship voi don hang 239k</span>
                            </div>
                        </div>
                    </Col>
                   
                </Row>
               
            </Container>
        </div>
    );
}

export default Card;
