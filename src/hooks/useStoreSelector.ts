import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootReducerType } from '../store';

const useStoreSelector: TypedUseSelectorHook<RootReducerType> = useSelector;

export default useStoreSelector;
