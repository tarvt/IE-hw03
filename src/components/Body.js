import React, { useState }  from 'react';
import Game from './Game';
import Header from './Header';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const useStyles = makeStyles((theme) => ({
  footer: {
        opacity: '60%', 
        margin:'30px auto',
        left: '0',
        bottom: '0',
        width: '60%',
        backgroundColor: '#CCCCFF',
        zIndex: '9',
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    form:{
        display: 'flex',
        backgroundColor: '#d8e4fc',
        width: '60%',
        margin: 'auto',
        padding: '10px 12px',
        borderRadius: '10px!important',
        marginbottom: '5%',
  },
    textf: {
      marginleft: '10%',
      margin: '30px auto',
      
      backgroundColor: 'balck',
    }
  
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



  return (
    <div >
    <Header></Header>

    <div id="game">
        {clicked === true && (
        <Game player1={text1} player2={text2} />)}
        {clicked === false && (       <div className={classes.form}>
        <TextField sx={{ m: 1 }} onChange={onTextChange1}  label="palyer1" variant="outlined" />
        <TextField sx={{ m: 1 }} onChange={onTextChange2}  label="player2" variant="outlined" />
        <Button size="small" onClick={() => UpdateNames()} endIcon={<PlayArrowIcon />} >start game</Button>
        </div>
        )}
        </div>
    <div className={classes.footer} id="footer">
     <p> made by Taravat Monsef </p><p>internet engineering exercise 3</p>
    </div>
    </div>
  );
}