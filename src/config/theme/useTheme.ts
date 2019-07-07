import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

/**
 * Allows components to access theme without having to use the 'withStyle' HOC
 */

const useTheme = () => {
  const theme = useContext(ThemeContext);
  return theme;
};

export default useTheme;
