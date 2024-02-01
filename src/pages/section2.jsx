import React from "react";
import '../css/page1.css';
import s1 from '../img/s1.svg';
import s2 from '../img/s2.svg';
import s3 from '../img/s3.svg';
import s4 from '../img/s4.svg';
import s5 from '../img/s5.svg';

const Section2 = () =>{
    return(
        <>
            <div className="section2">
                <div className="sec1">
                    <div className="s1">
                        <div className="in-s1">
                            <h1>Ưu điểm nổi trội của MYS</h1>
                            <p>Với những ưu điểm và tính năng vượt trội của MYS, công nghệ và giải pháp của chúng tôi sẽ giúp bạn đạt được mục tiêu, tối ưu hoá năng suất của doanh nghiệp.</p>
                        </div>
                    </div>
                    <div className="s2">
                        <div className="in-s2">
                            <img src={s1} alt="" />
                            <h3>Dễ sử dụng và tiện lợi và tiết kiệm thời gian</h3>
                            <p>Giao diện đơn giản và thân thiện, giúp người dùng dễ dàng sử dụng và tiết kiệm thời gian</p>
                        </div>
                    </div>
                    <div className="s2">
                        <div className="in-s2">
                            <img src={s2} alt="" />
                            <h3>Hỗ trợ đa nền tảng</h3>
                            <p>Ứng dụng hiện có mặt trên iOS, Android và Website</p>
                        </div>
                    </div>
                </div>

                <div className="sec1">
                    <div className="s2" style={{margin:'0'}}>
                        <div className="in-s2">
                            <img src={s3} alt="" />
                            <h3>Chi phí thấp</h3>
                            <p>Cho phép người dùng sử dụng miễn phí các tính năng cơ bản</p>
                        </div>
                    </div>
                    <div className="s2">
                        <div className="in-s2">
                            <img src={s4} alt="" />
                            <h3>Hiệu quả</h3>
                            <p>Giúp tăng hiệu suất công việc và đưa ra quyết định chính xác</p>
                        </div>
                    </div>
                    <div className="s2">                        
                        <div className="in-s2">
                            <img src={s5} alt="" />
                            <h3>Hỗ trợ công nghệ AI</h3>
                            <p>Người dùng sử dụng ứng dụng được hỗ trợ bởi công nghệ thông minh AI</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    )
    
}

export default Section2;