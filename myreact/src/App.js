import Image from './img/st13.jpg';
import './App.css';
import Game from './components/Game';
import Footer from './components/Footer';
import {makeStyles} from '@material-ui/core/styles'
import Header from './components/Header';
import { createMuiTheme, ThemeProvider } from '@mui/material';


const theme = createMuiTheme({
  palette: {
    primary: {
      main:'#000000'
    },
    
  }
})
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundImage: `url(${Image})`,
    backgroundRepeat: 'repeat',
  },
}));
function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
    <div className={classes.root}>
      <Header />
      <Game />
      <Footer/>
    </div>
     </ThemeProvider>
  );
}

export default App;
