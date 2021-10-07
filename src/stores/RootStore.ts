import { makeAutoObservable } from 'mobx';
import ArtistStore, { IArtistStore } from './artistStore/ArtistStore';
import NavStore, { INavStore } from './navStore/NavStore';
import SearchStore, { ISearchStore } from './searchStore/SearchStore';

export interface IRootStore {
    artistStore: IArtistStore;
    searchStore: ISearchStore;
    navStore: INavStore;
  }

class RootStore implements IRootStore {
    artistStore: IArtistStore;
    searchStore: ISearchStore;
    navStore: INavStore;
    
  
    constructor() {
      makeAutoObservable(this);
      this.artistStore = ArtistStore;
      this.searchStore = SearchStore;
      this.navStore = NavStore;
    }
  }
  
  export default new RootStore();