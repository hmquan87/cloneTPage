    import React, { useState } from "react";
    import face from "../style/img/face.png";
    import google from "../style/img/google.png";
    import SigninComponent from "../../components/SiginComponent";
    import { IoMdArrowBack } from "react-icons/io";
    import ForgotComponent from "../../components/ForgotComponent";
    const LoginForm = () => {

        const [showLoginForm, setShowLoginForm] = useState(false);
        const [showSigninForm, setShowSigninForm] = useState(false);
        const [showForgotForm, setShowForgotForm] = useState(false);

        const handleSigninForm = () => {
            setShowLoginForm(false);
            setShowForgotForm(false);
            setShowSigninForm(true);
        }

        const handleBackLoginForm = () => {
            setShowLoginForm(true);
            setShowForgotForm(false);
            setShowSigninForm(false);
        }

        const handleForgotForm = () => {
            setShowLoginForm(false);
            setShowForgotForm(true);
            setShowSigninForm(false);
        }
        
       
        const [email, setEmail] = useState('');        
        const [emailClickedOutside, setEmailClickedOutside] = useState(false);
        const [emailFocused, setEmailFocused] = useState(false);
        const [password, setPassword] = useState('');   
        const [passwordClickedOutside, setPasswordClickedOutside] = useState(false);
        const [passwordFocused, setPasswordFocused] = useState(false);

        const handleEmailFocus = () => {
            setEmailFocused(true);
        }

        const handleEmailBlur = () => {
            setEmailFocused(false);
        }

        const handlePasswordFocus = () => {
            setPasswordFocused(true);
        }

        const handlePasswordBlur = () => {
            setPasswordFocused(false);
        }
        const handleEmailClickOutside = () => {
            if (!email) 
                setEmailClickedOutside(true);
            
        }
        const handlePasswordClickOutside = () => {
            if (!password) 
                setPasswordClickedOutside(true);
            
        }

        return(
            <>
            {!showForgotForm && !showSigninForm && (
                <form action="" className="login-form">
                    <div className="login-form-text">
                        <div className="login-text">
                            Đăng nhập
                        </div>
                        <p className="login-description">
                            Hoàn thành các thông tin chi tiết dưới đây
                        </p>
                    </div>
                    <div className="gr-form-item">
                        <div className="title-login">
                            Email hoặc tên tài khoản
                        </div>
                        <div className={`form-item-input ${emailClickedOutside && !email ? 'focused-error' : ''}`}>
                            <input 
                                id="email" 
                                type="text" 
                                placeholder="Email"
                                onFocus={handleEmailFocus}
                                onBlur={() => {handleEmailBlur(); handleEmailClickOutside();}}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />

                        </div>
                        <div className={`form-item-input-error ${emailClickedOutside && !email ? 'show' : ''}`}>
                            Email không được để trống
                        </div>
                    </div>
                    <div className="gr-form-item">
                        <div className="title-login">
                            Mật khẩu
                        </div>
                        <div className={`form-item-input ${passwordClickedOutside && !password ? 'focused-error' : ''}`}>
                            <input 
                                id="password" 
                                type="password" 
                                placeholder="Mật khẩu"
                                onFocus={handlePasswordFocus}
                                onBlur={() => {handlePasswordBlur(); handlePasswordClickOutside();}}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className={`form-item-input-error ${passwordClickedOutside && !password ? 'show' : ''}`}>
                            Mật khẩu không được để trống
                        </div>

                    </div>
                    <div className="forgot-pass">
                        <button id="text-link" onClick={handleForgotForm}>Quên mật khẩu</button>
                    </div>
                    <div className="btn1">
                        <button id="btn-login" type="submit">Đăng nhập</button>
                    </div>
                    <div className="btn">
                        <button id="btn-gf" type="submit"> <img src={google} id="img-gg" alt="" /> Đăng nhập vời Google</button>
                    </div>
                    <div className="btn">
                        <button id="btn-gf" type="submit"> <img src={face} id="img-fb" alt="" /> Đăng nhập vời Facebook</button>
                    </div>
                    <div className="signin-btn">
                        Bạn chưa có tài khoản? 
                        <button id="text-signin" onClick={handleSigninForm}>Đăng ký ngay</button>
                    </div>
                </form>
            )}

            {showSigninForm && (
                <>
                <button id="backbtn" onClick={handleBackLoginForm}><IoMdArrowBack size={30} /></button>
                <SigninComponent />
                </>
            )}

            {showForgotForm &&(
                <>
                <button id="backbtn" onClick={handleBackLoginForm}><IoMdArrowBack size={30} /></button>
                <ForgotComponent />
                </>
            )}
            </>
        )
    }

    export default LoginForm;