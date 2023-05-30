import { useEffect, useState } from 'react';
import '../../assets/css/css-informacoes/img360.css';

export const Img360 = (props) => {

    return (
        <div className="img360-div" >
            <span className="img360-produto-name">
                {props.prodInfo.name}
            </span>
            <iframe className='img360-iframe' src={props.prod.img_360} width="100%" height="100%" scrolling="no" id="frame-spec"></iframe>
        </div>
    )
}