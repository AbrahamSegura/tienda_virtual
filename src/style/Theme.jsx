import { ThemeProvider as TP} from "styled-components";

const theme = {
  color:{
    primary: '#0551e7',
    segundary: '#1dcefe',
    white:'#fff',
    grey: '#999a9f',
    shadowPrimary:'#a6c1f7',
    shadowSegundary:'#cff4ff'
  },
  bgColor:{
    ligth: '#fff',
    dark: '#333'
  },
  shadow:{
    box: '0px 2px 4px rgba(0, 0, 0, .15)'
  }
}

export const ThemeProvider = ({children})=> <TP theme={theme}>{children}</TP>