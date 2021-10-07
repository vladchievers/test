import React from 'react';
import { IData } from '../../../../stores/searchStore/SearchStore';
import { Album } from '../../../parts/Album/Album';
import s from './Albums.module.css';

interface IProps {
    albums: IData[] | null;
}

export const Albums = ({ albums }: IProps) => (
    <div className={s.albums}>
        <h3>Albums</h3>
        <div className={s.albumsList}>
            {
                albums?.map(album => (
                    <Album  
                        key={album.idAlbum} 
                        author={album.strArtist || ''} 
                        url={album.strAlbumThumb || ''} 
                        title={album.strAlbum || ''}
                    />
                ))
            }
        </div>
        
    </div>
);