import { useContext, useLayoutEffect } from 'react';
import UpdateThemeContext from './UpdateThemeContext';

const useDispatchTheme = (newTheme: IUpdatedTheme) => {
  const updateTheme = useContext(UpdateThemeContext);

  useLayoutEffect(() => {
    updateTheme({ type: 'UPDATE_THEME', payload: newTheme });
  }, []);
};

export default useDispatchTheme;

export interface IUpdatedTheme {
  colors: { background: { 500: '#abba' }; on: { background: '#fff' } };
}
