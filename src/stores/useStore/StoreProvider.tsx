import { createContext, ReactNode, ReactElement } from 'react';
import RootStore,  { IRootStore } from '../RootStore';

export const StoreContext = createContext<IRootStore>({} as IRootStore);

export interface IStoreComponent {
  children: ReactNode;
};

export const StoreProvider  = ({
  children,
}: IStoreComponent): ReactElement => {
  return (
    <StoreContext.Provider value={RootStore}>{children}</StoreContext.Provider>
  )
};