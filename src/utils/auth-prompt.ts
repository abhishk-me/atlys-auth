import { useDispatch, useSelector } from 'react-redux';
import { IState } from '../store/config';
import { authPromptAction } from '../store/auth/action';


export const useAuthPrompt = () => {
  const dispatch = useDispatch();
  const { authenticated } = useSelector((state: IState) => state.authReducer);

  const prompt = () => {
    dispatch(authPromptAction(true));
  };

  return { authenticated, prompt };
};