import React, { Component } from 'react';
import '../scss/MainStyle.scss';
import { Progress, Timeline  } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css'

export default class HomePage extends Component {
    render() {
        return (
            <div className="container">
                    <div className = "row container_boby container_info mt-5"> 
                            <div className = "col-md-3 container_e_1">
                                <img 
                                className = "image_avata rounded-circle"
                                src = "https://scontent-hkt1-1.xx.fbcdn.net/v/t1.0-9/83166617_869778333460514_7414003787947311104_n.jpg?_nc_cat=107&_nc_sid=09cbfe&_nc_ohc=VhzwdPBxUJcAX8_4Y8m&_nc_ht=scontent-hkt1-1.xx&oh=3e3a1bbe7a175a3bb166ca8322826b00&oe=5F4D8D6E"></img>
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
                                    className = "socaial_icon_1 mt-3"
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
                        <div className = "main_title mt-5 col-sm-12">KĨ NĂNG</div>
                            <div className = "col-sm container_e_3 mt-5">
                                <div className = "title_e mt-2">NGÔN NGỮ</div>
                                <div className = "mt-2">HTML5 & SCSS</div>
                                <Progress percent={70} status="active" />
                                <div className = "mt-2">JavaScript</div>
                                <Progress percent={80} status="active" />
                                <div className = "mt-2">Java</div>
                                <Progress percent={50} status="active" />
                                <div className = "mt-2">C</div>
                                <Progress percent={40} status="active" />
                            </div>
                        <div className = "col-sm-1 mt-5">
                            
                        </div>
                            <div className = "col-sm container_e_3 mt-5 mb-4">
                                <div className = "title_e mt-2">FRAMEWORK</div>
                                <div className = "mt-2">Node Js</div>
                                <Progress percent={75} status="active" />
                                <div className = "mt-2">React Js</div>
                                <Progress percent={65} status="active" />
                                <div className = "mt-2">React Native</div>
                                <Progress percent={90} status="active" />
                                <div className = "mt-2">Bootstrap</div>
                                <Progress percent={70} status="active" />
                            </div>
                    </div>
                    <div className = "container_boby container_e_5 mt-5"> 
                        <div className = "title_e">KỸ NĂNG KHÁC</div>
                        <div className = "row col-sm container_boby">
                            <div className = "row col-md-6 m-0">
                                <div className = "col-sm-6 container_e_6">
                                    <div className = "container_e_7 mt-2">
                                        <Progress type="circle" percent={40} />
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
                    <div className = "main_title mt-5 col-sm-12">HỌC VẤN</div>
                    <div className = "row container_boby">    
                        <div className = "col-sm-6 container_e_8 mt-5">
                            <div className = "title_e mt-2">HỌC TẠI TRƯỜNG</div>
                            <div className = "mt-4">➤ Hiện tại đang là học sinh tại trường cao đẳng nghề FPT Polytechnic Tây Nguyên.</div>
                            <div className = "mt-2">➤ Các môn được học ở trường tiếng anh, photoshop, cơ sở dữ liệu, lập trình Java, lập trình với Javascript, lập trình Android, thiết kế web với HTML5&CSS3, lập trình mobile đa nền tảng, lập trình sever cho Android, kỹ năng làm việc...   </div>
                            <div className = "mt-2">➤ Các dự án làm tại trường <a href = "#">dự án mẫu</a>, <a href = "#">dự án 1</a>, <a href = "#">dự án 2</a>.</div>
                            <div className = "mt-2 mb-3">➤ Ngoài ra còn tìm hiểu thêm một số ngôn ngữ khác <a href = "https://www.python.org/" target="_blank">Python</a>, <a href = "https://developer.apple.com/swift/" target="_blank">Swift</a>, <a href = "https://kotlinlang.org/" target="_blank">Kotlin</a> và các công nghệ khác như <a href = "https://www.docker.com/" target="_blank">Docker</a>, <a href = "https://quasar.dev/" target="_blank">Quasar</a>, <a href = "https://sass-lang.com/" target="_blank">SASS & SCSS</a>.</div>
                        </div>
                        <div className = "col-sm-6 mt-5">
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
                    <div className = "main_title mt-5 col-sm-12">KINH NGHIỆM</div>
                    <div className = "container_boby mt-5">
                        <Timeline>
                            <Timeline.Item>➤ Tham gia dự án mẫu của của lớp vào cuối kỳ 3 do cô Đỗ Thị Bích Vân là giáo viên hướng dẫn sản phẩm là ứng dụng other và quản lý quán coffee được viết bằng ngôn ngữ Android, phần mềm làm việc là Android Studio mục tiêu đề ra là làm những chức năng cần thiết của 1 ứng dụng other và quản lý như các sản phẩm trên thị trường, những công việc phụ trách là viết giao diện màn hình chào, màn hình đăng nhập đăng ký, màn hình thêm xóa sửa sản phẩm, màn hình other, màn hình thanh toán, đóng góp ý kiến để cải thiện ứng dụng và tham gia xây dựng server. <br/>➤ Sản phẩm hoàn thiệt được 90% và được 9 điểm khi bảo vệ cuối môn tuy nhiên vẫn còn một số lỗi trong quá trình bảo vệ và được cả nhóm hoàn thiện.<br/>➤ Kết luận vì là dự án đầu tiên tham gia làm việc nhóm nên còn có một số khó khăn trong quá trình làm việc và đã rút được bài học thông qua dự án này.<br/>➤ <a href = "#">Link sản phẩm</a>.</Timeline.Item>
                            <Timeline.Item>➤ Làm dự án 1 vào cuối kỳ 4 do cô Đỗ Thị Bích Vân là giáo viên giám sát đây là dự án làm cá nhân, sản phẩm là ứng dụng viết tin nhắn và gọi video, ứng dụng được viêt bằng ngôn ngữ Android và FireBase, phần mềm làm việc là Android Studio, sản phẩm gồm những chức năng tìm bạn, kết bạn, hủy kết bạn, gợi ý kết bạn, thêm vào danh sách đen (chặn tin nhắn), ẩn danh (ẩn thông tin cá nhân), nhắn tin (text, hình ảnh, icon), gỡ nội dung tin nhắn theo mốc thời gian, gọi điện video, gửi thông báo đến thiết bị, thêm xóa sửa thông tin cá nhân (nội dựng, hình ảnh)...<br/>➤ Khó khăn: vì đây là dự án làm cá nhân nên số lượng công việc rất nhiều nhưng qua dự án này biết thêm những công nghệ mới như FireBase, ChatVideo và học được cách quản lý thời gian khi làm việc.<br/>➤ <a href = "#">Link sản phẩm</a>.</Timeline.Item>
                            <Timeline.Item>➤ Ngoài ra còn làm thêm một số dự án cá nhân như ứng dụng và website quản lý bán hàng thiết bị điện. <br/>➤<a href = "#">Link sản phẩm</a>.</Timeline.Item>
                            <Timeline.Item>➤ Dự án 2 (đang làm)</Timeline.Item>
                        </Timeline>
                    </div>
                    <div className = "main_title col-sm-12">THÔNG TIN KHÁC</div>
                    <div className = "row container_boby">
                        <div className = "col-md-4 container_e_3 mt-5">
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
                        <div className = "col-md-7 container_e_8 mt-5">
                            <div className = "title_e mt-2 mb-4">ĐIỂM MẠNH VÀ ĐIỂM YẾU</div>
                            <div className = "row">
                                    <div className = "col-sm-6">
                                        <div className = "mb-4">ĐIỂM MẠNH</div>
                                        <Timeline>
                                            <Timeline.Item color="green">Trung thực</Timeline.Item>
                                            <Timeline.Item color="green">Sáng tạo</Timeline.Item>
                                            <Timeline.Item color="green">Biết lắng nghe</Timeline.Item>
                                            <Timeline.Item color="green">Biết quản lý thời gian</Timeline.Item>
                                        </Timeline>
                                    </div>
                                    <div className = "col-sm-6">
                                        <div className = "mb-4">ĐIỂM YẾU</div>
                                        <Timeline>
                                            <Timeline.Item color="red">Nói hơi ít (nói với người thân thì lại nói rất nhiều)</Timeline.Item>
                                            <Timeline.Item color="red">Hơi nhát gái</Timeline.Item>
                                        </Timeline>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div className = "main_title col-sm-12 mt-5">NGƯỜI THAM CHIẾU</div>
                    <div className = "container_boby mt-5">
                        <Timeline>
                            <Timeline.Item>Họ và tên: Đỗ Thị Bích Vân</Timeline.Item>
                            <Timeline.Item>Số đện thoại: </Timeline.Item>  
                            <Timeline.Item>Email: </Timeline.Item>                             
                        </Timeline>
                    </div>   
            </div>         
        );
    }
}