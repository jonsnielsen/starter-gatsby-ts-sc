// import original module declarations
import "styled-components"
// for TypeScript to accept the css prop (typescript) on HTML elements
import * as types from "styled-components/cssprop"

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: { 500: string }
      secondary: { 500: string }
      surface: { 500: string }
      background: { 500: string }
      error: { 500: string }
      on: {
        primary?: string
        secondary?: string
        surface?: string
        background?: string
        error?: string
      }
    }
    fontSize: {
      h1: string
      h2: string
      h3: string
      body1: string
      body2: string
    }
    // letterSpacing: {
    //   tightest: string
    //   tight: string
    //   normal: string
    //   wide: string
    //   widest: string
    // }
    // lineHeight: {
    //   tightest: number
    //   tight: number
    //   normal: number
    //   wide: number
    //   widest: number
    // }
    spacing: {
      //   0: number
      //   px: string
      // 1: string
      //   2: string
      //   3: string
      4: string
      //   5: string
      6: string
      //   7: string
      //   8: string
      //   9: string
      //   10: string
      //   11: string
      //   12: string
      //   13: string
      //   14: string
      //   15: string
      //   16: string
    }
    // screens: {
    //   sm: string
    //   md: string
    //   lg: string
    //   xl: string
    // }
    fontFamily: {
      primary: {
        bold: string  
        // medium: string
        // light: string
      }
      secondary: {
        // bold: string
        medium: string
        // light: string
      }
    }
    extra: {
      contentMaxWidth: string
      contentPadding: string
    }
  }
}
