import React, { useState } from "react";
import "../pages/style/css/contact.css";
import contact from '../pages/style/img/contact.png';

const ContactCoponent = () => {
    

    return (
        <div className="con-full">
            <div className="ct-full">
                <div className="img-ct-full">
                    <img src={contact} alt="" />
                </div>
                <div className="contact-form">
                    <h1>Liên hệ với chúng tôi</h1>
                    <div className="ct-input1">
                        <div className="item-ct-input">
                            <input
                                type="text"
                                placeholder="Họ và tên*"
                            />
                        </div>
                        <div className="item-ct-input">
                            <input
                                type="text"
                                placeholder="Số điện thoại*"
                            />
                        </div>
                    </div>
                    <div className="ct-input">
                        <div className="item-ct-input">
                            <input
                                type="text"
                                placeholder="Email*"
                            />
                        </div>
                    </div>
                    <div className="ct-input">
                        <textarea
                            id="ct-input-mess"
                            type="text"
                            placeholder="Lời nhắn*"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}


export default ContactCoponent;