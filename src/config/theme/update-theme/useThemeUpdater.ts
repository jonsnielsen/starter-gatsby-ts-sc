import { useContext, useLayoutEffect } from 'react';
import UpdateThemeContext from './UpdateThemeContext';

const useThemeUpdater = (newTheme: IUpdatedTheme) => {
  const updateTheme = useContext(UpdateThemeContext);
  useLayoutEffect(() => {
    updateTheme({ type: 'UPDATE_THEME', payload: newTheme });
  }, []);
};

export default useThemeUpdater;

export interface IUpdatedTheme {
  colors: { background: { 500: string }; on: { background: string } };
}
