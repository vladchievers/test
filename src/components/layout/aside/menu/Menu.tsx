import React from 'react';
import s from './Menu.module.css';
import { MENU } from '../constants';
import { Link } from 'react-router-dom';

interface IProps {
    setToggle: (bool: boolean) => void;
}

export const Menu = ({ setToggle }: IProps) => {
    return (
        <ul className={s.menu}>
            {
                MENU.map(el => (
                    <li key={el.id} onClick={() => setToggle(false)}>
                        <Link to={el.href}>
                            {el.icon}
                            <span>{el.label}</span>
                        </Link>
                    </li>
                ))
            }
        </ul>
    )
}