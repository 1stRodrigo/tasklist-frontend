//EXEMPLO DE CONTEUDO NOS HOOKS
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState } from '../types/reducers/RootState';
import { AppDispatch } from './index';

// Use esses hooks em vez dos hooks padrão de react-redux para ter a tipagem correta
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;