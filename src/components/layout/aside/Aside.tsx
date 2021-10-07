import { observer } from 'mobx-react';
import React from 'react';
import { useStores } from '../../../hooks/useStore';
import { CloseIcon } from '../../icons/CloseIcon';
import { LogoIcon } from '../../icons/LogoIcon';
import s from './Aside.module.css';
import { Menu } from './menu/Menu';


const Aside = () => {
    const store = useStores();
    const { isToggle, setToggle } = store.navStore;
    return (
        <aside className={`${s.aside} ${isToggle ? s.open : ''}`}>
            <div className={s.logoWrapper}>
                <LogoIcon />
            </div>
            <Menu setToggle={setToggle}/>
            <button className={s.close} onClick={() => setToggle(false)}>
                <CloseIcon />
            </button>
        </aside>
    )
}

export default observer(Aside);