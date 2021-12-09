import Image from './img/st13.jpg';
import './App.css';
import Game from './components/Game';
import Button from '@mui/material/Button';
import Footer from './components/Footer';
import {makeStyles} from '@material-ui/core/styles'
import Header from './components/Header';

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
    <div className={classes.root}>
      <Header />
      <Game />
      <Footer/>
    </div>
     
  );
}

export default App;
