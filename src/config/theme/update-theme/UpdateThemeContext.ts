import { createContext } from 'react';
import { Action } from './updateThemeReducer';
const DispatchThemeContext = createContext<React.Dispatch<Action>>(() => ({}));

export default DispatchThemeContext;
