import { DefaultTheme } from "styled-components"
/*
  Theme largely inspired by material design theme
  https://material.io/design/color/#color-theme-creation
*/

const theme: DefaultTheme = {
  colors: {
    primary: {
      500: "#B84A62",
    },
    secondary: { 500: "#54457F" },
    surface: { 500: "#ddd" },
    background: { 500: "#fff" },
    error: { 500: "#E63B2E" },
    on: {
      primary: "#fff",
      secondary: "#fff",
      surface: "#000",
      background: "#000",
      error: "#fff",
    },
  },
  fontSize: {
    h1: "3rem",
    h2: "1.5rem",
    h3: "1.125rem",
    body1: "1rem",
    body2: "0.875rem",
  },
}
export default theme
