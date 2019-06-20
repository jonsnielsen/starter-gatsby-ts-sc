// import original module declarations
import "styled-components"

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
  }
}
