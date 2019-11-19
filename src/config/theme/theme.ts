import { useContext } from 'react';
import { DefaultTheme, ThemeContext } from 'styled-components';

/*
  Theme largely inspired by material design theme
  https://material.io/design/color/#color-theme-creation
*/

const theme: DefaultTheme = {
  colors: {
    primary: {
      500: '#B84A62',
    },
    secondary: { 500: '#54457F' },
    surface: { 500: '#f1f1f1' },
    background: { 500: '#fff' },
    error: { 500: '#E63B2E' },
    on: {
      primary: '#fff',
      secondary: '#fff',
      surface: '#000',
      background: '#000',
      error: '#fff',
    },
  },
  fontSize: {
    h1: '3rem',
    h2: '1.5rem',
    h3: '1.125rem',
    body1: '1rem',
    body2: '0.875rem',
  },
  // letterSpacing: {
  //   tightest: '-0.5em',
  //   tight: '-0.25em',
  //   normal: '0',
  //   wide: '0.25em',
  //   widest: '0.5em'
  // },
  // lineHeight: {
  //   tightest: 1,
  //   tight: 1.375,
  //   normal: 1.5,
  //   wide: 1.625,
  //   widest: 2,
  // },
  /*spacing scale inspired by the book 'refactoring ui' by Adam Wathan and Steve Schoger */
  spacing: {
    //   0: 0,
    //   px: "1px",
    //   1: "0.25rem",
    //   2: "0.5rem",
    //   3: "0.75rem",
    4: '1rem',
    //   5: "1.5rem",
    6: '2rem',
    //   7: "3rem",
    //   8: "4rem",
    //   9: "6rem",
    //   10: "8rem",
    //   11: "12rem",
    //   12: "16rem",
    //   13: "24rem",
    //   14: "32rem",
    //   15: "40rem",
    //   16: "48rem",
  },
  // screens: {
  //   sm: "640px",
  //   md: "768px",
  //   lg: "1024px",
  //   xl: "1280px",
  // },
  fontFamily: {
    primary: {
      bold: `'Anton', sans-serif`,
    },
    secondary: {
      medium: `'airbus', sans-serif`,
    },
  },
  extra: {
    contentMaxWidth: '960px',
    contentPadding: 'REPLACED BELOW',
  },
};

/**
 * Allows components to access theme without having to use the 'withStyle' HOC
 */
export const useTheme = () => useContext(ThemeContext);

export default theme;
