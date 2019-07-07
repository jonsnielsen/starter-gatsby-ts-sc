import deepmerge from '../../../utils/deepmerge';
import theme from '../theme';

function updateTheme(payload: any) {
  return {
    type: 'UPDATE_THEME',
    payload,
  } as const;
}

export interface Action {
  type: 'UPDATE_THEME';
  payload: any;
}

type State = any;

// export type Action = ReturnType<typeof updateTheme>;

function updateThemeReducer(state: State, action: Action) {
  console.log('switching theme');
  switch (action.type) {
    case 'UPDATE_THEME':
      const resultTheme = deepmerge(theme, action.payload, {});
      return resultTheme;
    default:
      throw new Error('No such actiontype exists!');
  }
}

// export interface UpdateThemeAction { type: 'SET_THEME'; payload: {}; }

export default updateThemeReducer;
