import React from 'react';
import { Logo } from '../Logo/Logo';
import s from './Album.module.css';

interface IProps {
    url: string;
    title: string;
    author: string;
}

export const Album = ({ url, title, author }: IProps) => (
    <div className={s.album}>
        <Logo url={url} size="lg" />
        <div className={s.title}>{title}</div>
        <div className={s.author}>{author}</div>
    </div>
)