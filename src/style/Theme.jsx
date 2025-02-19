import { ThemeProvider as TP} from "styled-components";

const theme = {
  color:{
    primary: '#0551e7',
    segundary: '#1dcefe',
    white:'#fff',
    red: "#ff6161",
    grey: '#999a9f',
    shadowPrimary:'#a6c1f7',
    shadowSegundary:'#cff4ff',
    shadowRed: "#fdacc0"
  },
  bgColor:{
    ligth: '#fff',
    dark: '#333'
  },
  shadow:{
    box: '2px 2px 1px 2px  rgba(0, 0, 0, .15)',
    text: '0px 0px 1px rgba(0, 0, 0, 0.6)'
  },
  media:{
    PHONE:"580px",
    TABLET:"850px",
    LAPTOP:"1270px",
    bordeRadius:"15px"
  }
}

export const ThemeProvider = ({children})=> <TP theme={theme}>{children}</TP>