import { useDispatch } from 'react-redux';
import { StoreDispatchType } from '../store';

const useStoreDispatch = () => useDispatch<StoreDispatchType>();

export default useStoreDispatch;
