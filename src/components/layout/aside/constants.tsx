import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { HomeIcon } from '../../icons/HomeIcon'
import { SearchIcon } from '../../icons/SearchIcon';

export const MENU = [
    {
        id: uuidv4(),
        label: 'HOME',
        icon: <HomeIcon />,
        href: '/',
    },
    {
        id: uuidv4(),
        label: 'BROWSE',
        icon: <SearchIcon />,
        href: '/',
    },
]