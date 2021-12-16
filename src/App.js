import './App.css';
import Body from './components/Body';
import {makeStyles} from '@material-ui/core/styles'

import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#5E03AE',
    },
    secondary: {
      main: '#96a5ee',
    },
    background: {
      paper:'#ccd4ff'
    },

  }
})
const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: 'Verdana',
    position: 'absolute',
    top: '0px',
    right: '0px',
    bottom:'0px',
    left: '0px',
    minHeight:'100%',
    background: 'transparent',
    backgroundSize:'cover',
    backgroundImage:' linear-gradient(#6495ED 8%, #4fbbc4 60%,  #CCCCFF 90%)',
  },
}));
function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
    <ThemeProvider theme={theme}>
      <Body></Body>
      
      </ThemeProvider>
      </div>
  );
}

export default App;
