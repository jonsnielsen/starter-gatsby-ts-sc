import { useContext, useEffect } from 'react';
import UpdateThemeContext from './UpdateThemeContext';

const useDispatchTheme = (newTheme: any) => {
  const updateTheme = useContext(UpdateThemeContext);
  useEffect(() => {
    updateTheme({ type: 'UPDATE_THEME', payload: newTheme });
  }, []);
};

export default useDispatchTheme;
