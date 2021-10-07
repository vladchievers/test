import React, { Dispatch } from 'react';
import { Link } from 'react-router-dom';
import { IData } from '../../../stores/searchStore/SearchStore';
import { SearchIcon } from '../../icons/SearchIcon';
import { Logo } from '../Logo/Logo';
import s from './Search.module.css';

interface ISearch {
    value: string;
    onChange: Dispatch<React.SetStateAction<string>>;
    list: IData[] | null;
    isFetching: boolean;
}

export const Search = ({ value, onChange, list, isFetching }: ISearch) => {
    return (
        <div className={s.search}>
            <div className={s.inputWrapper}>
                <input 
                    type="search" 
                    value={value} 
                    onChange={(e) => onChange(e.target.value)} 
                    placeholder="Search for songs, artists etc ..."
                />
                <span className={s.icon}><SearchIcon /></span>
            </div>
            {
               value && list &&
                <div className={s.list}>
                    {isFetching && <div className={s.item}><span>Loading...</span></div>}
                    {!isFetching && list.length === 0 && <div>No items...</div>}
                    {
                        !isFetching && list.map(el => (
                            <Link 
                                to={`/artist/${el.idArtist}`} 
                                onClick={() => onChange('')} 
                                key={el.idArtist} 
                                className={s.item}
                            >
                                <Logo url={el.strArtistThumb || ''} size='sm' />
                                <span>{el.strArtist}</span>
                            </Link>
                        ))
                    }
                </div> 
            }
        </div>
    );
};