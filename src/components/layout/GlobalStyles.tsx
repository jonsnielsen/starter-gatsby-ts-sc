import { createGlobalStyle } from 'styled-components';
import 'typeface-anton';

export default createGlobalStyle`
      /* @import url("https://fonts.googleapis.com/css?family=Anton&display=swap"); */
      html {
        background-color: ${({ theme }) => theme.colors.background[500]};
      }

      @font-face {
        font-family: "airbus";
        src: url("/airbus.woff2"), url("/airbus.woff");
      }

      h1,
      h2,
      h3,
      body,
      div,
      p,
      li,
      button,
      a {
        color: ${({ theme }) => theme.colors.on.background};
      }
      h1,
      h2,
      h3 {
        /* font-family: 'Anton', sans-serif; */
        font-family: ${({ theme }) => theme.fontFamily.primary.bold};
        font-weight: 900;
      }
      h1 {
        font-size: ${({ theme }) => theme.fontSize.h1};
      }
      h2 {
        font-size: ${({ theme }) => theme.fontSize.h2};
      }
      h3 {
        font-size: ${({ theme }) => theme.fontSize.h3};
      }
      body,
      div,
      p,
      li,
      button,
      a {
        font-size: ${({ theme }) => theme.fontSize.body1};
        font-family: ${({ theme }) => theme.fontFamily.secondary.medium};
      }
    `;
