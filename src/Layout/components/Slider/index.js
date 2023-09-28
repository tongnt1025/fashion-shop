import classNames from 'classnames/bind';
import styles from './Slider.module.scss';
import Button from '../../../components/Button';
const cx = classNames.bind(styles);
function Slider() {
    const slider = [
        {
            title: 'POLO NỮ PIMA CAO CẤP',
            content:
                'Nhắc đến sự đẳng cấp là không thể không nhắc đến dòng vải pima. Nó tạo nên chất lượng tốt nhất cho bất kỳ sản phẩm thời trang nào. Sợi vải pima dài và dày hơn sợi cotton thông thường gấp đôi nhờ công nghệ dệt tân tiến. Điều đó làm cho kết cấu áo polo chắc chắn, bền chặt, hạn chế tối đa xù lông, mềm mượt, bền màu, vô cùng đảm bảo sức khoẻ người dùng',
            
        },
        {
            title:'Polo Nữ Dáng Suông Modal',
            content:''
        },
        {
            title:'Polo Nữ Coolmax Lacoste',
            content:'Mẫu áo polo nữ được làm bằng chất liệu coolmax đem lại cảm giác mát lạnh khi mặc. Thiết kế mẫu áo polo coolmax này có kiểu dáng cực kỳ thoải mái. Tạo sự gọn gàng hứa hẹn sẽ là mẫu áo polo vô cùng hot trong thời điểm sắp tới'
        }
    ];
    return <div className={cx('wrapper')}>
        {
            <div>
                <p>{slider[0].title}</p>
                <p>{slider[0].content}</p>
                <Button large>XEM CHI TIẾT</Button>
            </div>
        }
    </div>;
}

export default Slider;
