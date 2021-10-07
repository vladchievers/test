import React from 'react';
import Navigation from '../navigation/Navigation';
import {Route, Switch} from 'react-router-dom';
import s from './Content.module.css';
import { Main } from '../../pages/main/Main';
import Artist from '../../pages/artist/Artist';


export const Content = () => {
    return (
        <main className={s.content}>
            <Navigation />
            <Switch>
                <Route exact path='/' component={Main} />
                <Route path='/artist/:id' component={Artist} />
            </Switch>
        </main>
    )
}