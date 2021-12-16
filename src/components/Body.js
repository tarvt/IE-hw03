import React, { useState }  from 'react';
import Game from './Game';
import Header from './Header';
import TextField from '@mui/material/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@mui/material/Button';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Container from '@mui/material/Container';
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  footer: {
        opacity: '60%', 
        margin: '30px auto',
        padding: '20px',
        textAlign: 'center',
        left: '0',
        bottom: '0',
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    form:{
        backgroundColor: '#d8e4fc',
        width: '60%',
        margin: 'auto',
        padding: '10px 12px',
        borderRadius: '10px!important',
        marginbottom: '5%',
  },

  
}));

export default function Body() {
    const [clicked, setclicked] = useState(false);
    const [text1, settext1] = useState('x');
    const [text2, settext2] = useState('o');
    const classes = useStyles();
    const onTextChange1 = (e) => { settext1(e.target.value);  };
    const onTextChange2 = (e) => { settext2(e.target.value); };
    const UpdateNames = () => {
        setclicked(true);
  };
  const theme = useTheme();
  const desktop = useMediaQuery(theme.breakpoints.up("lg"));
  const tablet = useMediaQuery(theme.breakpoints.up("sm"));
  const mobile = useMediaQuery(theme.breakpoints.up("xs"));

  const stylefooter = () => {
    if (desktop || tablet) return {
      fontSize: 20,
  };
    if (mobile) return {
      fontSize: 15,
    };
  };

  const styleform = () => {
    if (desktop || tablet) return {
        display: 'flex',
  };
    if (mobile) return {
      display: 'block',
    };
  };

  return (
    <div >
    <Header></Header>

    <div id="game">
        {clicked === true && (
        <Game player1={text1} player2={text2} />)}
        {clicked === false && (       <div style={styleform()} className={classes.form}>
        <TextField sx={{ m: 1 }} onChange={onTextChange1}  label="palyer1" variant="outlined" />
        <TextField sx={{ m: 1 }} onChange={onTextChange2}  label="player2" variant="outlined" />
        <Button sx={{ m: 1 }} size="small" onClick={() => UpdateNames()} endIcon={<PlayArrowIcon />} >start game</Button>
        </div>
        )}
        </div>
      <Container style={ stylefooter()}className={classes.footer} id="footer">
     <p> Made by Taravat Monsef </p><p>Internet Engineering Exercise 3</p>
    </Container>
    </div>
  );
}