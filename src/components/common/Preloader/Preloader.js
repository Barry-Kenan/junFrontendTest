import React from 'react';
import preloader from '../../../assets/images/preloaderWIFI.svg';
import s from './Preloader.module.css';


const Preloader = () => {
    return (
        <div className={s.content}>
            <img src={preloader}/>
        </div>
    );

};

export default Preloader;