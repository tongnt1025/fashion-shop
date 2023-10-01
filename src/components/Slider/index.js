import classNames from 'classnames/bind';
import styles from './Slider.module.scss';
import Button from '../Button';
import images from '../../asset/image';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef, useState } from 'react';
const cx = classNames.bind(styles);
function Slider() {
    const arraySlide = [
        {
            img: images.slider1,
            color: '#4267b2',
            title: 'POLO NỮ PIMA CAO CẤP',
            content:
                'Nhắc đến sự đẳng cấp là không thể không nhắc đến dòng vải pima. Nó tạo nên chất lượng tốt nhất cho bất kỳ sản phẩm thời trang nào. Sợi vải pima dài và dày hơn sợi cotton thông thường gấp đôi nhờ công nghệ dệt tân tiến. Điều đó làm cho kết cấu áo polo chắc chắn, bền chặt, hạn chế tối đa xù lông, mềm mượt, bền màu, vô cùng đảm bảo sức khoẻ người dùng',
        },
        {
            img: images.slider2,
            color: '#fe7e73',
            title: 'Polo Nữ Dáng Suông Modal',
            content:
                'Polo nữ dáng suông Modal sử dụng công nghệ vải cao cấp thân thiện với môi trường sản xuất độc quyền chống co rút vải, áo polo nữ vải modal là sản phẩm thích hợp cho các bạn có môi trường làm việc năng động như hiện nay',
        },
        {
            img: images.slider3,
            color: '#fbb96b',
            title: 'Polo Nữ Coolmax Lacoste',
            content:
                'Mẫu áo polo nữ được làm bằng chất liệu coolmax đem lại cảm giác mát lạnh khi mặc. Thiết kế mẫu áo polo coolmax này có kiểu dáng cực kỳ thoải mái. Tạo sự gọn gàng hứa hẹn sẽ là mẫu áo polo vô cùng hot trong thời điểm sắp tới',
        },
    ];
    const index = useRef(0);
    const [sliders, setSliders] = useState(arraySlide[index.current]);
    const handleClickRight = () => {
        return setSliders(() => {
            return arraySlide[
                index.current < arraySlide.length - 1 ? (index.current = index.current + 1) : (index.current = 0)
            ];
        });
    };
    const handleClickLeft = () => {
        return setSliders(() => {
            return arraySlide[
                index.current > 0 ? (index.current = index.current - 1) : (index.current = arraySlide.length - 1)
            ];
        });
    };
    useEffect(() => {
        setInterval(() => {
            return setSliders(() => {
                return arraySlide[
                    index.current < arraySlide.length - 1 ? (index.current = index.current + 1) : (index.current = 0)
                ];
            });
        }, 7000);
    }, []);
    console.log(index.current);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('slider-top')}>
                    <div className={cx('content')}>
                        <span className={cx('title')}>{sliders.title}</span>
                        <span className={cx('desc')}>{sliders.content}</span>
                    </div>
                    <div className={cx('img')} style={{ backgroundColor: sliders.color }}>
                        <img src={sliders.img}></img>
                    </div>
                </div>
                <div>
                    <Button
                        large
                        animate
                        style={{ backgroundColor: sliders.color }}
                        leftIcon={<FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>}
                        className={cx('btn-des')}
                    >
                        XEM CHI TIẾT
                    </Button>
                </div>

                <div className={cx('icons')}>
                    <FontAwesomeIcon className={cx('icon')} onClick={() => handleClickLeft()} icon={faAngleLeft} />
                    {index.current + 1}/{arraySlide.length}
                    <FontAwesomeIcon className={cx('icon')} onClick={() => handleClickRight()} icon={faAngleRight} />
                </div>
            </div>
        </div>
    );
}

export default Slider;
