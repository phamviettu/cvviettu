import React, { Component } from 'react';
import '../scss/MainStyle.scss';

export default class HomePage extends Component {
    render() {
        return (
            <div class="container">
                <div className = "container_homePage">
                    <div class="row container_info">
                        <div class="col-sm-3 container_info_avata">
                            <div className = "container_info_avata_image">
                                <img 
                                className = "image_avata"
                                src="https://scontent-hkt1-1.xx.fbcdn.net/v/t1.0-9/83166617_869778333460514_7414003787947311104_n.jpg?_nc_cat=107&_nc_sid=09cbfe&_nc_ohc=VhzwdPBxUJcAX8_4Y8m&_nc_ht=scontent-hkt1-1.xx&oh=3e3a1bbe7a175a3bb166ca8322826b00&oe=5F4D8D6E"></img>
                            </div>
                        </div>
                        <div class="col-sm-9 container_info_content ">
                            <div className = "info_titleName">PHẠM VIỆT TÚ</div>
                            <div className = "container_info_content_main">
                                <div className = "container_info_content_main_c">
                                    <div className = "container_info_content_main_c_t">
                                        <div className = "container_info_content_main_c_t_title">Tuổi</div>
                                        <div className = "container_info_content_main_c_t_value">21</div>
                                    </div>
                                    <div className = "container_info_content_main_c_t">
                                        <div className = "container_info_content_main_c_t_title">Giới tính</div>
                                        <div className = "container_info_content_main_c_t_value">Nam</div>
                                    </div>
                                    <div className = "container_info_content_main_c_t">
                                        <div className = "container_info_content_main_c_t_title">Địa chỉ</div>
                                        <div className = "container_info_content_main_c_t_value">266 Hùng vương</div>
                                    </div>          
                                </div>
                                <div className = "container_info_content_main_c">
                                    <div className = "container_info_content_main_c_t">
                                        <div className = "container_info_content_main_c_t_title">Email</div>
                                        <div className = "container_info_content_main_c_t_value">3009a21@gmail.com</div>
                                    </div>
                                    <div className = "container_info_content_main_c_t">
                                        <div className = "container_info_content_main_c_t_title">Điện thoại</div>
                                        <div className = "container_info_content_main_c_t_value">0987654321</div>
                                    </div>
                                    <div className = "container_info_content_main_c_t">
                                        <div className = "container_info_content_main_c_t_title">Website</div>
                                        <div className = "container_info_content_main_c_t_value">https://phamviettu.github.io/cvviettu/</div>
                                    </div>
                                </div>
                            </div>
                            <div className = "container_social">
                                <div className = "container_info_content_main_c_t_title">Mạng xã hội</div>
                                <div className = "container_social_item">
                                    <img 
                                    onClick = {() => window.location='https://www.facebook.com/profile.php?id=100012850665848'}
                                    className = "socaial_icon"
                                    src="https://image.flaticon.com/icons/svg/145/145802.svg"></img>
                                </div>   
                            </div>
                        </div>
                    </div>
                    <div class="row container_skill">
                        <div className = "main_title mt-5 col-sm-12">KĨ NĂNG</div>
                        <div class="col-sm-4 container_skill_c1 mt-5">
                            
                        </div>
                        <div class="col-sm-7 container_skill_c2 mt-5">
                            
                        </div>
                    </div>
                </div> 
            </div>         
        );
    }
}