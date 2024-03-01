import React, { useState } from "react";
import "../pages/style/css/login.css";
const SigninComponent = () => {
    // username
    const [username, setUsername] = useState('');
    const [usernameFocus, setUsernameFocus] = useState(false);
    const [usernameClickOutside, setUsernameClickOutside] = useState(false);
    const hanldeUserFocus = () => {
        setUsernameFocus(true);
    }
    const handleUserBlur = () => {
        setUsernameFocus(false);
    }
    const handleUserClickOutside = () => {
        if (!username)
            setUsernameClickOutside(true);
    }

    // email
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

    // password
    const [pass, setPass] = useState('');
    const [passFocus, setPassFocus] = useState(false)
    const [passClickOutside, setPassClickOutside] = useState(false)
    const handlePassFocus = () => {
        setPassFocus(true)
    }
    const handlePassBlur = () => {
        setPassFocus(false)
    }
    const handlePassClickOutside = () => {
        if (!pass)
            setPassClickOutside(true)
    }
    // pass-again
    const [again, setAgain] = useState('')  
    const [againFocus, setAgainFocus] = useState(false)
    const [againClickOutside, setAgainClickOutside] = useState(false)
    const handleAgainFocus = () => {
        setAgainFocus(true)
    }
    const handleAgainBlue = () => {
        setAgainFocus(false)
    }
    const handleAgainClickOutside = () => {
        if (!again)
            setAgainClickOutside(true)
    }



    return (
        <>
            <form action="" className="login-form">
                <div className="login-form-text">
                    <div className="login-text">
                        ĐĂNG KÝ
                    </div>
                </div>
                <div className="gr-form-item">
                    <div className="title-login" style={{ display: "flex", alignItems: "center", height: "24px" }}>
                        Họ và tên <p style={{ color: "red", margin: "0" }}>*</p>
                    </div>
                    <div className="form-item">
                        <div className={`form-item-input ${!username && usernameClickOutside ? 'focused-error' : ''}`}>
                            <input
                                id="email"
                                type="text"
                                placeholder="Họ và tên"
                                onFocus={hanldeUserFocus}
                                onBlur={() => { handleUserBlur(); handleUserClickOutside(); }}
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div className={`form-item-input-error ${usernameClickOutside && !username ? 'show' : ''}`}>
                            Họ và tên không được để trống
                        </div>
                    </div>
                </div>

                <div className="gr-form-item">
                    <div className="title-login" style={{ display: "flex", alignItems: "center", height: "24px" }}>
                        Tên tài khoản
                    </div>
                    <div className="form-item">
                        <div className="form-item-input">
                            <input id="user" type="text" placeholder="Tên tài khoản" />
                        </div>
                    </div>
                </div>

                <div className="gr-form-item" style={{ marginTop: "20px" }}>
                    <div className="title-login" style={{ display: "flex", alignItems: "center", height: "24px" }}>
                        Email <p style={{ color: "red", margin: "0" }}>*</p>
                    </div>
                    <div className="form-item">
                        <div className={`form-item-input ${!email && emailClickOutside ? 'focused-error' : ''}`}>
                            <input
                                id="email"
                                type="text"
                                placeholder="Email"
                                onFocus={handleEmailFocus}
                                onBlur={() => { hadnleEmailBlur(); handleEmailClickOutside(); }}
                                value={email}
                                onChange={(e) => { setEmail(e.target.value) }}
                            />
                        </div>
                        <div className={`form-item-input-error ${!email && emailClickOutside ? 'show' : ''}`}>
                            Email không được để trống
                        </div>
                    </div>
                </div>

                <div className="gr-form-item">
                    <div className="title-login" style={{ display: "flex", alignItems: "center", height: "24px" }}>
                        Mật khẩu <p style={{ color: "red", margin: "0" }}>*</p>
                    </div>
                    <div className="form-item">
                        <div className={`form-item-input ${!pass && passClickOutside ? 'focused-error' : ''}`}>
                            <input
                                id="password"
                                type="password"
                                placeholder="Mật khẩu"
                                onFocus={handlePassFocus}
                                onBlur={() => { handlePassBlur(); handlePassClickOutside(); }}
                                value={pass}
                                onChange={(e) => { setPass(e.target.value) }}
                            />
                        </div>
                        <div className={`form-item-input-error ${!pass && passClickOutside ? 'show' : ''}`}>
                            Mật khẩu không được để trống
                        </div>
                    </div>
                </div>

                <div className="gr-form-item">
                    <div className="title-login" style={{ display: "flex", alignItems: "center", height: "24px" }}>
                        Nhập lại mật khẩu <p style={{ color: "red", margin: "0" }}>*</p>
                    </div>
                    <div className="form-item">
                        <div className={`form-item-input ${!again && againClickOutside ? 'focused-error' : ''}`}>
                            <input
                                id="password"
                                type="password"
                                placeholder="Nhập lại mật khẩu "
                                onFocus={handleAgainFocus}
                                onBlur={() => { handleAgainBlue(); handleAgainClickOutside(); }}
                                value={again}
                                onChange={(e)=>{setAgain(e.target.value)}}
                            />
                        </div>
                        <div className={`form-item-input-error ${!again && againClickOutside ? 'show' : ''}`}>
                            Mật khẩu nhập lại không được để trống
                        </div>
                    </div>
                </div>

                <div className="btn1" style={{ marginTop: "-2px" }}>
                    <button id="btn-login" type="submit">Đăng ký</button>
                </div>

                <div className="signin-btn">
                    Bạn đã có tài khoản?
                    <button id="text-signin">Đăng nhập ngay</button>
                </div>
            </form>
        </>
    )
}

export default SigninComponent;