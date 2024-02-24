import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import avt1 from "../img/avatarfeedback1.svg";
import "../style/css/slide.css";

const Slide = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 3,
    speed: 500
  };
  return (
    <div className="slide-container">
      <Slider {...settings}>

        <div>
          <div className="slide">
            <div className="style-slide">
              <div className="slide-item-top">
                <h2>Chị Phạm Khách Linh</h2>
                <h3>Nhân viên kinh doanh</h3>
                <p>
                  Tôi không bỏ lỡ bất cứ deadline nào nhờ MYS, hệ thống sẽ nhắc việc
                  khi đến hạn hoặc quá hạn nhờ đó mà vị trí bận rộn như tôi không bị
                  lỡ mất bất cứ công việc quan trọng nào!
                </p>
              </div>
              <div className="slide-item-bottom">
                <img src={avt1} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="slide">
            <div className="style-slide">
              <div className="slide-item-top">
                <h2>Chị Phạm Khách Linh</h2>
                <h3>Nhân viên kinh doanh</h3>
                <p>
                  Tôi không bỏ lỡ bất cứ deadline nào nhờ MYS, hệ thống sẽ nhắc việc
                  khi đến hạn hoặc quá hạn nhờ đó mà vị trí bận rộn như tôi không bị
                  lỡ mất bất cứ công việc quan trọng nào!
                </p>
              </div>
              <div className="slide-item-bottom">
                <img src={avt1} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="slide">
            <div className="style-slide">
              <div className="slide-item-top">
                <h2>Chị Phạm Khách Linh</h2>
                <h3>Nhân viên kinh doanh</h3>
                <p>
                  Tôi không bỏ lỡ bất cứ deadline nào nhờ MYS, hệ thống sẽ nhắc việc
                  khi đến hạn hoặc quá hạn nhờ đó mà vị trí bận rộn như tôi không bị
                  lỡ mất bất cứ công việc quan trọng nào!
                </p>
              </div>
              <div className="slide-item-bottom">
                <img src={avt1} alt="" />
              </div>
            </div>
          </div>
        </div>
        
      </Slider>
    </div>
  );
}

export default Slide;
