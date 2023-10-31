import classNames from 'classnames/bind';
import images from '../../../assets/images';
import styles from './Footer.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
const cx = classNames.bind(styles);
function Footer() {
    return (
        <div className={cx('wrapper')}>
            <Container className={cx('container')}>
                <Row>
                    <Col>
                        <div className={cx('inner')}>
                            <span className={cx('title')}>TỔNG ĐÀI HỖ TRỢ</span>
                            <div className={cx('des')}>
                                <div>Liên hệ đặt hàng</div>
                                <div>Thắc mắc đơn hàng</div>
                                <div>Góp ý, khiếu nại</div>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className={cx('inner')}>
                            <span className={cx('title')}>VỀ YOLO</span>
                            <div className={cx('des')}>
                                <div>Giới thiệu</div>
                                <div>Liên hệ</div>
                                <div>Tuyển dụng</div>
                                <div>Tin tức</div>
                                <div>Hệ thống cửa hàng</div>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className={cx('inner')}>
                            <span className={cx('title')}>CHĂM SÓC KHÁCH HÀNG</span>
                            <div className={cx('des')}>
                                <div>Chính sách đổi trả</div>
                                <div>Chính sách bảo hành</div>
                                <div>Chính sách hoàn tiền</div>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className={cx('inner', 'last')}>
                            <div className={cx('inner-img')}>
                                <img src={images.logo}></img>
                            </div>
                            <div className={cx('des')}>
                                Hướng đến mục tiêu mang lại niềm vui ăn mặc mới mỗi ngày cho hàng triệu người tiêu dùng
                                Việt. Hãy cùng Yolo hướng đến một cuộc sống năng động, tích cực hơn.
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Footer;
