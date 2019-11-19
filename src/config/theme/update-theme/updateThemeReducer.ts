import deepmerge from '../../../utils/deepmerge';
import theme from '../theme';
import { IUpdatedTheme } from './useThemeUpdater';

export interface Action {
  type: 'UPDATE_THEME';
  payload: IUpdatedTheme;
}

type State = any;

function updateThemeReducer(state: State, action: Action) {
  switch (action.type) {
    case 'UPDATE_THEME':
      const resultTheme = deepmerge(theme, action.payload, {});
      return resultTheme;
    default:
      throw new Error('No such actiontype exists!');
  }
}

export default updateThemeReducer;
