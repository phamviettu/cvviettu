import React, { Component, useEffect } from 'react';
import '../scss/MainStyle.scss';
import { Progress, Timeline, Modal } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css'

import Aos from 'aos'
import "aos/dist/aos.css"

export default class HomePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            textOnModal: null,
            efImg: "0",
        }
    }

    showModal = (e) => {
        if(e === "Điểm") {
            this.setState({textOnModal:"Điểm",visible: true})
        }
        else if(e === "Bằng"){
            this.setState({textOnModal:"Bằng tốt nghiệp",visible: true})
        }
    };
    
    handleOk = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };
    
    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    componentDidMount() {
        Aos.init();
        setTimeout(() => this.setState({efImg: "1"}), 200);
    }
 
    render() {
        const {textOnModal} = this.state
        return (
            <div className="container">
                    <div data-aos="zoom-out" className = "row container_boby container_info mt-5"> 
                            <div className = "col-md-3 container_e_1">
                                {
                                    this.state.efImg === "0"
                                    ?
                                        null
                                    :
                                    <img 
                                        data-aos="zoom-in"
                                        className = "image_avata rounded-circle"
                                        src = "https://scontent-hkt1-1.xx.fbcdn.net/v/t1.0-9/83166617_869778333460514_7414003787947311104_n.jpg?_nc_cat=107&_nc_sid=09cbfe&_nc_ohc=VhzwdPBxUJcAX8_4Y8m&_nc_ht=scontent-hkt1-1.xx&oh=3e3a1bbe7a175a3bb166ca8322826b00&oe=5F4D8D6E">
                                    </img>
                                }
                                
                            </div>
                            <div className = "col-md-9 container_e_2 row m-0 pt-4">
                                <div className = "col-sm container_e_4_1">
                                    <div className = "name_info">PHẠM VIỆT TÚ</div>
                                    <div className = "container_info_content row m-0 mt-2">
                                        <div className = "info_content_title">Tuổi</div>
                                        <div className = "info_content_value">21</div>
                                    </div>
                                    <div className = "container_info_content row m-0 mt-2">
                                        <div className = "info_content_title">Giới tính</div>
                                        <div className = "info_content_value">Nam</div>
                                    </div>
                                    <div className = "container_info_content row m-0 mt-2">
                                        <div className = "info_content_title">Địa chỉ</div>
                                        <div className = "info_content_value">266 Hùng Vương</div>
                                    </div>
                                    <div className = "info_content_title_socaial_1 mt-2">Mạng xã hội</div>
                                    <img 
                                    onClick = {() => window.location='https://www.facebook.com/profile.php?id=100012850665848'}
                                    className = "socaial_icon_1 mt-2"
                                    src="https://image.flaticon.com/icons/svg/145/145802.svg"></img>
                                </div>
                                <div className = "col-sm container_e_4">
                                    <div className = "name_info_hide"></div>
                                    <div className = "container_info_content row m-0 mt-2">
                                        <div className = "info_content_title">Điện thoại</div>
                                        <div className = "info_content_value">0946841587</div>
                                    </div>
                                    <div className = "container_info_content row m-0 mt-2">
                                        <div className = "info_content_title">Email</div>
                                        <div className = "info_content_value">300998pt@gmail.com</div>
                                    </div>
                                    <div className = "container_info_content row m-0 mt-2">
                                        <div className = "info_content_title">Website</div>
                                        <div className = "info_content_value"></div>
                                    </div>
                                    <div className = "info_content_title_socaial_2 mt-2">Mạng xã hội</div>
                                    <img 
                                    onClick = {() => window.location='https://www.facebook.com/profile.php?id=100012850665848'}
                                    className = "socaial_icon_2 mt-2"
                                    src="https://image.flaticon.com/icons/svg/145/145802.svg"></img>
                                </div>
                            </div>     
                    </div>
                    <div className = "row container_boby ">
                        <div data-aos="fade-up" className = "main_title mt-5 mb-5 col-sm-12">LỜI NGỎ</div>
                        <Timeline data-aos="fade-up">
                            <Timeline.Item>
                                <span>
                                    Xin chào Quý công ty tôi tên là Phạm Việt Tú một Developer React Native 
                                    có kiến ​​thức chuyên sâu bao gồm JavaScript, Redux, HTML5, Scss, 
                                    am hiểu về cấu trúc của React Native, vòng đời của Component. 
                                    Được biết Quý công ty đang có nhu cầu tuyển dụng vị trí lập trình front end React Native 
                                    thông quy website của Quý công ty <a href = "https://2nf.com.vn/vi/tuyen-dung-senior-react-native-3" target = "blank">https://2nf.com.vn/vi/tuyen-dung-senior-react-native-3 </a> 
                                    với vốn kiến thức của mình tôi tự tin có thể đảm nhiệm được nhiệm vụ mà Quý công giao phó.
                                </span>
                            </Timeline.Item>
                        </Timeline>
                        <Timeline data-aos="fade-up">
                            <Timeline.Item>
                                Tôi rất mong sự hợp tác và đóng góp chung vào sự phát triển của công ty. 
                            </Timeline.Item>
                        </Timeline>
                    </div>
                    <div className = "row container_boby ">
                        <div data-aos="fade-up" className = "main_title col-sm-12">KĨ NĂNG</div>
                        <div data-aos="fade-right" className = "col-sm container_e_3 mt-5">
                            <div className = "title_e mt-2">NGÔN NGỮ</div>
                            <div className = "mt-2">HTML5 & SCSS</div>
                            <Progress percent={70} status="active" />
                            <div className = "mt-2">JavaScript</div>
                            <Progress percent={80} status="active" />
                            <div className = "mt-2">Java</div>
                            <Progress percent={55} status="active" />
                            <div className = "mt-2">C</div>
                            <Progress percent={50} status="active" />
                        </div>
                        <div className = "col-sm-1 mt-5">
                            
                        </div>
                        <div data-aos="fade-left" className = "col-sm container_e_3 mt-5 mb-4">
                            <div className = "title_e mt-2">FRAMEWORK</div>
                            <div className = "mt-2">Node Js</div>
                            <Progress percent={70} status="active" />
                            <div className = "mt-2">React Js</div>
                            <Progress percent={80} status="active" />
                            <div className = "mt-2">React Native</div>
                            <Progress percent={85} status="active" />
                            <div className = "mt-2">Bootstrap</div>
                            <Progress percent={70} status="active" />
                        </div>
                    </div>
                    <div data-aos="fade-up" className = "container_boby container_e_5 mt-5"> 
                        <div className = "title_e">KỸ NĂNG KHÁC</div>
                        <div className = "row col-sm container_boby">
                            <div className = "row col-md-6 m-0">
                                <div className = "col-sm-6 container_e_6">
                                    <div className = "container_e_7 mt-2">
                                        <Progress type="circle" percent={55} />
                                    </div>
                                    <div className = "title_circle">Tiếng anh</div>
                                </div>
                                <div className = "col-sm-6 container_e_6">
                                    <div className = "container_e_7 mt-2">
                                        <Progress type="circle" percent={70} />
                                    </div>
                                    <div className = "title_circle">Giao tiếp</div>
                                </div>
                            </div>
                            <div className = "row col-md-6 m-0">
                                <div className = "col-sm-6 container_e_6">
                                    <div className = "container_e_7 mt-2">
                                        <Progress type="circle" percent={80} />
                                    </div>
                                    <div className = "title_circle">Làm việc nhóm</div>
                                </div>
                                <div className = "col-sm-6 container_e_6">
                                    <div className = "container_e_7 mt-2">
                                        <Progress type="circle" percent={80} />
                                    </div>
                                    <div className = "title_circle">Sáng tạo</div>
                                </div>
                            </div>
                        </div>
                    </div> 
                    <div data-aos="fade-up" className = "main_title mt-5 col-sm-12">HỌC VẤN</div>
                    <div className = "row container_boby">    
                        <div data-aos="fade-up" className = "col-sm-6 container_e_8 mt-5">
                            <div className = "title_e mt-2">HỌC TẠI TRƯỜNG</div>
                            <div className = "mt-4">➤ Tốt nghiệp <span className = "text-primary text_btn" onClick = {() => this.showModal("Bằng")}>bằng...</span> trường cao đẳng nghề FPT Polytechnic Tây Nguyên vào 20/12/2020.</div>
                            <div className = "mt-2">➤ Các môn được học ở trường tiếng anh, photoshop, cơ sở dữ liệu, lập trình Java, lập trình với Javascript, lập trình Android, thiết kế web với HTML5&CSS3, lập trình mobile đa nền tảng, lập trình sever cho Android, kỹ năng làm việc...   </div>
                            <div className = "mt-2">➤ Các dự án làm tại trường <a href = "#">dự án Coffee</a>, <a href = "#">dự án AppChat</a>, <a href = "#">dự án tốt nghiệp</a>.</div>
                            <div className = "mt-2">➤ Ngoài ra còn tìm hiểu thêm một số ngôn ngữ khác <a href = "https://www.python.org/" target="_blank">Python</a>, <a href = "https://developer.apple.com/swift/" target="_blank">Swift</a>, <a href = "https://kotlinlang.org/" target="_blank">Kotlin</a> và các công nghệ khác như <a href = "https://www.docker.com/" target="_blank">Docker</a>, <a href = "https://quasar.dev/" target="_blank">Quasar</a>, <a href = "https://sass-lang.com/" target="_blank">SASS & SCSS</a>.</div>
                            <div className = "mt-2 mb-3">➤ <span className = "text-primary text_btn" onClick = {() => this.showModal("Điểm")}>Điểm của tôi</span>.</div>
                        </div>
                        <div data-aos="fade-up" className = "col-sm-6 mt-5">
                            <Timeline mode = "alternate">
                                <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
                                    Tốt nghiệp cấp 3 trường thpt Cư M'gar (05/05/2017).
                                </Timeline.Item>
                                <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
                                    Bắt đầu học tại trường cao đẳng nghề FPT Polytechnic Tây Nguyên (15/09/2018).
                                </Timeline.Item>
                                <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
                                    Hiện tại là sinh viên năm cuối trường đẳng nghề FPT Polytechnic Tây Nguyên.
                                </Timeline.Item>
                                <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
                                    Tốt nghiệp.
                                </Timeline.Item>
                            </Timeline>
                        </div>
                    </div>
                    <div data-aos="fade-up" className = "main_title mt-5 col-sm-12">KINH NGHIỆM</div>
                    <div className = "container_boby mt-5">
                        <Timeline>
                            <Timeline.Item data-aos="fade-up"> 
                                <strong>➤ Dự án Coffee (15/4/2019-19/5/2019).</strong><br/>   
                                ● Tham gia dự án Coffee của của lớp vào cuối kỳ 3 do cô Đỗ Thị Bích Vân là giáo viên hướng dẫn.<br/>
                                ● Sản phẩm là ứng dụng order và quản lý quán coffee được viết bằng ngôn ngữ Java, server Nodejs, công nghệ lưu trữ MySql, phần mềm làm việc 
                                là Android Studio mục tiêu đề ra là làm những chức năng cần thiết của 1 ứng dụng order và quản lý     
                                như các sản phẩm trên thị trường, những công việc mà tôi phụ trách là viết giao diện màn hình chào, 
                                màn hình đăng nhập đăng ký, màn hình thêm xóa sửa sản phẩm, màn hình order, màn hình thanh toán, 
                                đóng góp ý kiến để cải thiện ứng dụng và tham gia xây dựng server. <br/>
                                ● Sản phẩm hoàn thiện tốt tuy nhiên 
                                vẫn còn một số lỗi trong quá trình chạy thực tế và được cả nhóm cải thiện sau đó.<br/>
                                ● Đây là dự án đầu tiên mà tôi tham gia làm việc nhóm nên còn có một số khó khăn 
                                trong quá trình làm việc tuy nhiên thông qua dự án này tôi đã rút được bài học về cách làm việc nhóm, kỹ năng thuyết trình và cải thiện ở những dự án tiếp theo.<br/>
                                ● <a href = "#">Link sản phẩm</a>.
                            </Timeline.Item>
                            <Timeline.Item data-aos="fade-up">
                                <strong>➤ Dự án AppChat (21/7/2019-25/9/2019).</strong><br/>
                                ● Dự án AppChat được làm vào cuối kỳ 4, cô Đỗ Thị Bích Vân là giáo viên giám sát đây là dự án làm cá nhân.<br/> 
                                ● Sản phẩm là ứng dụng viết tin nhắn và gọi video theo thời gian thực, ứng dụng được viêt bằng ngôn ngữ Java và công nghệ lưu trữ dữ liệu FireBase, 
                                phần mềm làm việc là Android Studio, sản phẩm gồm những chức năng tìm bạn, kết bạn, hủy kết bạn, 
                                gợi ý kết bạn, thêm vào danh sách đen (chặn tin nhắn), ẩn danh (ẩn thông tin cá nhân), 
                                nhắn tin (text, hình ảnh, icon), gỡ nội dung tin nhắn theo mốc thời gian, gọi điện video, 
                                gửi thông báo đến thiết bị, thêm xóa sửa thông tin cá nhân (nội dựng, hình ảnh).<br/>
                                ● Thông qua dự án này tôi đã cải thiện khả năng tìm kiếm tài liệu về những công nghệ mới như FireBase, Video calls và quản lý thời gian khi làm việc.
                                <br/>➤ <a href = "#">Link sản phẩm</a>.
                            </Timeline.Item>
                            <Timeline.Item data-aos="fade-up">     
                                <strong>➤ Dự án Quản lý kho hàng thiết bị điện (15/4/2019-27/5/2020).</strong><br/>
                                ● Đây dự án cá nhân mà tôi làm cho gia đình.<br/>
                                ● Sản phẩm gồm 2 phần là ứng dụng và website dùng để quản lý kho hàng thiết bị điện, 
                                ứng dụng và website được xây dựng từ 2 framework React Native cho ứng dụng và React Js cho website, 
                                các công nghệ mà tôi sử dụng là GraphQL, Docker, Prisma, ứng dụng dùng để kiểm tra giá bán của sản phẩm, 
                                kiểm tra bảo hành và thời gian bảo hành của sản phẩm thông qua việc quét mã QR, 
                                chức năng của website gồm thêm, xóa, sửa thông tin sản phẩm thông kê theo ngày, tuần, tháng, năm,                                     
                                lưu lịch sử mua hàng, báo cáo số lượng sản phẩm trong kho hàng.<br/>
                                ● Sản phẩm hoạt động tốt đem lại sự thuận tiện cho người bán.<br/>
                                ● <a href = "#">Link sản phẩm</a>.
                            </Timeline.Item>
                            <Timeline.Item data-aos="fade-up">➤ <strong>Dự án tốt nghiệp.</strong></Timeline.Item>
                        </Timeline>
                    </div>
                    <div data-aos="fade-up" className = "main_title col-sm-12">THÔNG TIN KHÁC</div>
                    <div className = "row container_boby">
                        <div data-aos="fade-up" className = "col-md-4 container_e_3 mt-5">
                            <div className = "title_e mt-2 mb-4">SỞ THÍCH</div>
                            <Timeline>
                                <Timeline.Item color="green">Đá bóng</Timeline.Item>
                                <Timeline.Item color="green">Nghe nhạc</Timeline.Item>
                                <Timeline.Item color="green">Xem phim</Timeline.Item>
                                <Timeline.Item color="green">Hay học hỏi</Timeline.Item>
                                <Timeline.Item color="green">Ngủ</Timeline.Item>
                            </Timeline>
                        </div>
                        <div className = "col-sm-1"></div>
                        <div data-aos="fade-up" className = "col-md-7 container_e_8 mt-5">
                            <div className = "title_e mt-2 mb-4">ĐIỂM MẠNH VÀ ĐIỂM YẾU</div>
                            <div className = "row">
                                    <div className = "col-sm-6">
                                        <div className = "mb-4"><strong>ĐIỂM MẠNH</strong></div>
                                        <Timeline>
                                            <Timeline.Item color="green">Trung thực</Timeline.Item>
                                            <Timeline.Item color="green">Sáng tạo</Timeline.Item>
                                            <Timeline.Item color="green">Biết lắng nghe</Timeline.Item>
                                            <Timeline.Item color="green">Biết quản lý thời gian</Timeline.Item>
                                        </Timeline>
                                    </div>
                                    <div className = "col-sm-6">
                                        <div className = "mb-4"><strong>ĐIỂM YẾU</strong></div>
                                        <Timeline>
                                            <Timeline.Item color="red">Nói hơi ít</Timeline.Item>
                                            <Timeline.Item color="red">Hơi rụt rè</Timeline.Item>
                                        </Timeline>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-up" className = "main_title col-sm-12 mt-5">NGƯỜI THAM CHIẾU</div>
                    <div data-aos="fade-up" className = "container_boby mt-5">
                        <Timeline>
                            <Timeline.Item>Họ và tên: Đỗ Thị Bích Vân</Timeline.Item>
                            <Timeline.Item>Số đện thoại: </Timeline.Item>  
                            <Timeline.Item>Email: </Timeline.Item>                             
                        </Timeline>
                    </div> 
                    <Modal
                        title={textOnModal}
                        visible={this.state.visible}
                        onOk={this.handleOk}
                        onCancel={this.handleCancel}
                        footer = {null}
                        >        
                        {
                            (textOnModal === "Điểm")
                            ?
                            <>
                            <p>Lập trình cơ sở với Javascript: 8.3 điểm</p>
                            <p>Tiếng Anh: 6.5 điểm</p>
                            <p>Lập trình Java: 7.9 điểm</p>
                            <p>Lập trình Android: 7.8 điểm</p>
                            <p>Thiết kế web với HTML5&CSS3: 8.6 điểm</p>
                            <p>Dự án mẫu: 8.4 điểm</p>
                            <p>Dự án 1: 7.6 điểm</p>
                            <p>Lập trình Mobile đa nền tảng: 9.3 điểm</p>
                            <p>Lập trình Sever cho Android: 9.8 điểm</p>
                            </>
                            :
                            (textOnModal === "Bằng tốt nghiệp")
                            ?
                            <p>Hình ảnh bằng tốt nghiệp ở đây</p>
                            :
                            null
                        }
                    </Modal>  
            </div>    
        );
    }
}