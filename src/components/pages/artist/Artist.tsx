import React, { useEffect } from 'react';
import s from './Artist.module.css';
import { useParams } from 'react-router-dom';
import { useStores } from '../../../hooks/useStore';
import { observer } from 'mobx-react';
import { Albums } from './albums/Albums';


const Artist = () => {
    const store = useStores();
    const { artistData,
            fetchArtistData,
            isArtistFetching,
            fetchAlbumsData,
            albumsData,
          } = store.artistStore;
    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        if (id) {
            fetchArtistData({i: id})
            fetchAlbumsData({i: id})
        } 
    }, [fetchArtistData, fetchAlbumsData, id]);

    if (isArtistFetching) return <div className={s.artist}>Loading...</div>;

    return (
        <div className={s.artist}>
            <div className={s.artistInfo}>
                <h2>{artistData?.strArtist}</h2>
                <div className={s.imageWrapper}>
                    <div className={s.image}>
                        <img src={artistData?.strArtistThumb || ''} alt={artistData?.strArtist || 'artist'} />
                    </div>
                </div>
            </div>
            {albumsData && <Albums albums={albumsData} />}
        </div>
    )
}

export default observer(Artist);