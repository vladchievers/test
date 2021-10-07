import React from 'react';
import Aside from './aside/Aside';
import { Content } from './content/Content';


export const Layout = () => {
    return (
        <div className='grid'>
            <Aside />
            <Content />
        </div>
    )
}