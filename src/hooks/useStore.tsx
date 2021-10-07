import { useContext } from 'react';
import { StoreContext } from '../stores/useStore/StoreProvider';

export const useStores = () => useContext(StoreContext);