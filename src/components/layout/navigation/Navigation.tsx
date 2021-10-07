import React, { useEffect, useState } from 'react';
import s from './Navigation.module.css';
import { useStores } from '../../../hooks/useStore';
import { Search } from '../../parts/Search/Search';
import { observer } from 'mobx-react';
import { Logo } from '../../parts/Logo/Logo';
import { useDebounce } from '../../../hooks/useDebounce';
import { LogoIcon } from '../../icons/LogoIcon';
import { BurgerIcon } from '../../icons/BurgerIcon';

const SEARCH_DELAY = 800;


const Navigation = () => {
    const [value, setValue] = useState('');
    const store = useStores();
    const { searchData, isFetching, fetchSearchData} = store.searchStore;
    const { setToggle } = store.navStore;
    const debouncedValue = useDebounce(value, SEARCH_DELAY)

    useEffect(() => {
        if (debouncedValue) fetchSearchData({s: debouncedValue});
    }, [fetchSearchData, debouncedValue])

    return (
        <nav className={s.navigation}>
            <div className={s.burgerWrapper}>
                <button type="button" onClick={() => setToggle(true)}>
                    <BurgerIcon />
                </button>
            </div>
            <div className={s.logoWrapper}>
                <LogoIcon />
            </div>
            <div className={s.searchWrapper}>
                <Search value={value} onChange={setValue} list={searchData} isFetching={isFetching} />
            </div>
            <div className={s.navigationItems}>
                <Logo url='../images/user.jpg' />
            </div>
        </nav>
    )
}

export default observer(Navigation);