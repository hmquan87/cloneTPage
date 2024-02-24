import React from 'react';
import '../style/css/page1.css';
import { AiOutlineDownload } from "react-icons/ai";
import imgst1 from '../img/image-section-one.png';
import Item1 from './item1';
import Section2 from './section2';
import Idea from './idea';



const Page1 = () => {
    
 

    return (
        <div className="all">            
            <div className="page1">
                <div className="top">
                    <div className="page1-top">
                        <div className="title">
                            <h1 id='tt1' >Thay đổi cách quản lý công việc</h1>
                            <h1>Mapping Your Success</h1>
                        </div>
                        <div className="list">
                            <Idea/>
                        </div>
                        <div className="top-btn">
                            <button id='btn1'> <AiOutlineDownload id='download' size={20}/><p>Tải Profile</p> </button>
                            <button id='btn2'> <p>Trải nghiệm ngay!</p> </button>
                        </div>   
                        <img id='imgp1' src={imgst1} alt="" />
                    </div>                 
                </div>
                
                <div className="bottom">                    
                    <Item1/>
                    <Section2/>
                    
                </div>
            </div> 
            
        </div>
    );
}



export default Page1;