import {observable, makeAutoObservable, action, runInAction} from 'mobx';


export interface IData { [key: string]: string | null };

export interface INavStore {
  isToggle: boolean
  setToggle: (bool: boolean) => void;
}

class NavStore implements INavStore {
    constructor() {
        makeAutoObservable(this);
    }

    @observable isToggle: boolean = false;

    @action setToggle = (bool: boolean) => {
        runInAction(() => {
            this.isToggle = bool;
        });
    };
}

export default new NavStore();
