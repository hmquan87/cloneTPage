import React from "react";
import "../style/css/page1.css";
import s1 from "../img/s1.svg";
import s2 from "../img/s2.svg";
import s3 from "../img/s3.svg";
import s4 from "../img/s4.svg";
import s5 from "../img/s5.svg";
import appstore from "../img/App-Store.svg";
import chplay from "../img/Play-Store.svg";
import img4 from "../img/image4.png";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
// import avt1 from "../img/avatarfeedback1.svg";
import Slide from "./slide";


const Section2 = () => {
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  // };
  return (
    <>
      <div className="section2">
        <div className="sec1">
          <div className="s1">
            <div className="in-s1">
              <h1>Ưu điểm nổi trội của MYS</h1>
              <p>
                Với những ưu điểm và tính năng vượt trội của MYS, công nghệ và
                giải pháp của chúng tôi sẽ giúp bạn đạt được mục tiêu, tối ưu
                hoá năng suất của doanh nghiệp.
              </p>
            </div>
          </div>
          <div className="s2">
            <div className="in-s2">
              <img src={s1} alt="" />
              <h3>Dễ sử dụng và tiện lợi và tiết kiệm thời gian</h3>
              <p>
                Giao diện đơn giản và thân thiện, giúp người dùng dễ dàng sử
                dụng và tiết kiệm thời gian
              </p>
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

        <div className="sec1" style={{ marginTop: "30px" }}>
          <div className="s2" style={{ margin: "0" }}>
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
              <p>
                Giúp tăng hiệu suất công việc và đưa ra quyết định chính xác
              </p>
            </div>
          </div>
          <div className="s2">
            <div className="in-s2">
              <img src={s5} alt="" />
              <h3>Hỗ trợ công nghệ AI</h3>
              <p>
                Người dùng sử dụng ứng dụng được hỗ trợ bởi công nghệ thông minh
                AI
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="section2_1">
        <div className="bg-st">
          <div className="bg-st-left">
            <div className="text-bg-st-1">
              Trải nghiệm ứng dụng quản lý
              <br />
              công việc TinaMYS
            </div>

            <div className="text-bg-st-2">
              Khám phá sức mạnh đột phá với TinaMYS - giải pháp quản trị mục
              tiêu, công việc cho doanh nghiệp: Đa chiều - thông minh - linh
              hoạt - hiệu quả
            </div>

            <div className="btn-bg-st">
              <img id="img-bg-st-1" src={appstore} alt="" />
              <img
                id="img-bg-st-1"
                src={chplay}
                alt=""
                style={{ marginLeft: "30px" }}
              />
            </div>
          </div>
          <div className="bg-st-right">
            <img id="img-bg-st-r" src={img4} alt="" />
          </div>
        </div>
      </div>
      <div className="section2_2">
        <Slide/>
      </div>
    </>
  );
};

export default Section2;
