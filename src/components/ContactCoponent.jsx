import React, { useState } from "react";
import "../pages/style/css/contact.css";
import contact from '../pages/style/img/contact.png';

const ContactCoponent = () => {

    const [name, setName] = useState('');
    const [nameFocus, setNameFocus] = useState(false);
    const [nameClickOutside, setNameClickOutside] = useState(false)

    const handleNameFocus = () => {
        setNameFocus(true)
    }
    const handleNameBlur = () => {
        setNameFocus(false)
    }
    const handleNameClickOutside = () => {
        if (!name) setNameClickOutside(true)
    }

    const [email, setEmail] = useState('');
    const [emailFocus, setEmailFocus] = useState(false);
    const [emailClickOutside, setEmailClickOutside] = useState(false);
    const handleEmailFocus = () => {
        setEmailFocus(true);
    }

    const hadnleEmailBlur = () => {
        setEmailFocus(false);
    }

    const handleEmailClickOutside = () => {
        if (!email)
            setEmailClickOutside(true)
    }

    const [phone, setPhone] = useState('');
    const [phonelFocus, setPhoneFocus] = useState(false);
    const [phoneClickOutside, setPhoneClickOutside] = useState(false);
    const handlePhoneFocus = () => {
        setPhoneFocus(true);
    }

    const hadnlePhoneBlur = () => {
        setPhoneFocus(false);
    }

    const handlePhoneClickOutside = () => {
        if (!phone)
            setPhoneClickOutside(true)
    }

    const [mess, setMess] = useState('')
    const [messFocus, setMessFocus] = useState(false)
    const [messClickOutside, setMessClickOutside] = useState(false)

    const handleMessFocus = () => {
        setMessFocus(true)
    }
    const handleMessBlur = () => {
        setMessFocus(false)
    }
    const handleMessClickOutside = () => {
        if (!mess) setMessClickOutside(true)
    }

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
                            <div className={`form-item-input w ${nameClickOutside && !name ? 'focused-error' : ''}`}>
                                <input
                                    type="text"
                                    placeholder="Họ và tên*"
                                    onFocus={handleNameFocus}
                                    onBlur={() => { handleNameBlur(); handleNameClickOutside(); }}
                                    value={name}
                                    onChange={(e) => { setName(e.target.value) }}
                                />
                            </div>
                            <div className={`form-item-input-error ${nameClickOutside && !name ? 'show' : ''}`}>
                                Họ tên không dược để trống
                            </div>
                        </div>
                        <div className="item-ct-input ml">
                            <div className={`form-item-input w ${phoneClickOutside && !phone ? 'focused-error' : ''}`}>
                                <input
                                    type="text"
                                    id="sdt"
                                    placeholder="Số điện thoại*"
                                    onFocus={handlePhoneFocus}
                                    onBlur={() => { hadnlePhoneBlur(); handlePhoneClickOutside(); }}
                                    value={phone}
                                    onChange={(e) => { setPhone(e.target.value) }}
                                />
                            </div>
                            <div className={`form-item-input-error ${phoneClickOutside && !phone ? 'show' : ''}`}>
                                Số điện thoại không hợp lệ
                            </div>
                        </div>
                    </div>
                    <div className="ct-input">
                        <div className="item-ct-input1">
                            <div className={`form-item-input ${emailClickOutside && !email ? 'focused-error' : ''}`}>
                                <input
                                    type="text"
                                    placeholder="Email*"
                                    onFocus={handleEmailFocus}
                                    onBlur={() => { handleNameBlur(); handleEmailClickOutside() }}
                                    value={email}
                                    onChange={(e) => { setEmail(e.target.value) }}
                                />
                            </div>
                            <div className={`form-item-input-error ${emailClickOutside && !email ? 'show' : ''}`}>
                                Email không được để trống
                            </div>

                        </div>
                    </div>
                    <div className="ct-input">
                        <div className="item-ct-input1">
                            <div className={`form-item-input ${!mess && messClickOutside ? 'focused-error' : ''}`}>
                                <textarea
                                    id="ct-input-mess"
                                    type="text"
                                    placeholder="Lời nhắn*"
                                    onFocus={handleMessFocus}
                                    onBlur={() => { handleMessBlur(); handleMessClickOutside(); }}
                                    value={mess}
                                    onChange={(e) => { setMess(e.target.value) }}
                                />
                            </div>
                            <div className={`form-item-input-error ${!mess && messClickOutside ? 'show' : ''}`}>
                                Lời nhắn không được để trống
                            </div>
                        </div>
                    </div>
                    <div className="sub">
                        <button id="submit" type="submit">Gửi tin nhắn</button>
                    </div>
                </div>


            </div>
        </div>
    )
}


export default ContactCoponent;