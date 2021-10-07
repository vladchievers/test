import { observable, makeAutoObservable, action, runInAction } from 'mobx';
import ArtistService from '../../services/ArtistService';
import { IData } from '../searchStore/SearchStore';



export interface IArtistStore {
    fetchArtistData: (params: {i: string}) => void;
    fetchAlbumsData: (params: {i: string}) => void; 
    artistData: IData | null;
    isArtistFetching: boolean;
    albumsData: IData[] | null;
}

class ArtistStore implements IArtistStore {
    constructor() {
        makeAutoObservable(this);
    }

    @observable artistData: IData | null = null;
    @observable isArtistFetching = false;
    @observable albumsData: IData[] | null = null;


    @action fetchArtistData = async (params: {i: string}) => {
        this.isArtistFetching = true;
        try {
            const {status, data: { artists }} = await ArtistService.getArtistData(params);

            if (status === 200 || status === 201) {
                runInAction(() => {
                    this.artistData = artists[0];
                    this.isArtistFetching = false;
                });
            }
        } catch (err) {
            console.error(err);
            this.isArtistFetching = false;
        }
    };


    @action fetchAlbumsData = async (params: {i: string}) => {
        try {
            const {status, data: { album }} = await ArtistService.getAlbumsData(params);

            if (status === 200 || status === 201) {
                runInAction(() => {
                    this.albumsData = album;
                });
            }
        } catch (err) {
            console.error(err);
        }
    };
}

export default new ArtistStore();
