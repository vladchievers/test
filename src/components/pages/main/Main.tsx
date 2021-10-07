import React from 'react';
import s from './Main.module.css';


export const Main = () => {
    return (
        <div className={s.main}>
           <div className={s.sliderWrapper}>
                <img src="/images/slider.png"  alt="slider"/>
           </div>
        </div>
    )
}