import React from 'react';
import s from './Logo.module.css';

interface ILogo {
    url: string;
    size?: string;
}

export const Logo = ({url, size = 'md'}: ILogo) => (
    <div className={`
            ${s.logo}
            ${size === 'sm' ? s.sm : ''}
            ${size === 'md' ? s.md : ''}
            ${size === 'lg' ? s.lg : ''}
        `}>
        <img src={url || '/images/songLogo.svg'} alt="logo"/>
    </div>
)