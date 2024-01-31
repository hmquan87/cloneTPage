import React from 'react';
import '../css/header.css';
import logo from '../img/logo.svg';
import appstore from '../img/App-Store.svg';
import chplay from '../img/Play-Store.svg';
import { FiPhoneCall } from "react-icons/fi";

import Imgnasion from './imgnasion';



const Header = () => {
    return (
        <div className="header">
            <div className="header-left">
                <img id='logo' src={logo} alt="" />
            </div>
            <div className="header-right">
                <img id='img1' src={appstore} alt="" />
                <img id='img1' src={chplay} alt="" />
                <button>Trải nghiệm</button>
                <div className="phones">
                    <FiPhoneCall  size={16} id='iconreact'/>
                    <p>Liên hệ với chúng tôi <br/>+(84) 246 329 5589</p>
                </div>
                <Imgnasion/>
            </div>
        </div>
    );
};

export default Header;