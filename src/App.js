import './App.css';
import Game from './components/Game';
import Footer from './components/Footer';
import {makeStyles} from '@material-ui/core/styles'
import Header from './components/Header';
import { createMuiTheme, ThemeProvider } from '@mui/material';

const theme = createMuiTheme({
  palette: {
    primary: {
      main:'#5E03AE'
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
    background: 'transparent',
    
    backgroundImage:' linear-gradient(to bottom left, #40E0D0 8%, #CCCCFF 57%, #6495ED 90%)',
  },
}));
function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
    <ThemeProvider theme={theme}>
    
      <Header />
      <Game  />
      <Footer/>
      </ThemeProvider>
      </div>
  );
}

export default App;
