import {observable, makeAutoObservable, action, runInAction} from 'mobx';
import SearchService from '../../services/SearchService';


export interface IData { [key: string]: string | null };

export interface ISearchStore {
  fetchSearchData: (params: {s: string}) => void;
  searchData: IData[] | null;
  isFetching: boolean;
}

class SearchStore implements ISearchStore {
    constructor() {
        makeAutoObservable(this);
    }

    @observable searchData: IData[] | null = null;
    @observable isFetching = false;

    @action fetchSearchData = async (params: {s: string}) => {
        this.isFetching = true;
        try {
            const {status, data: { artists }} = await SearchService.getSearchData(params);

            if (status === 200 || status === 201) {
                runInAction(() => {
                this.searchData = artists;
                this.isFetching = false;
                });
            }
        } catch (err) {
            console.error(err);
            this.isFetching = false;
        }
    };
}

export default new SearchStore();
