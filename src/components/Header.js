import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@mui/material/Link';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
const useStyles = makeStyles((theme) => ({
  root: {
      borderRadius: '10px!important',
      opacity: '60%',
      padding: '20px',
      width: '60%',
      margin:'30px auto',
      justifyContent: 'center',
      textAlign: 'center',
      backgroundColor: '#CCCCFF',
      color: '#800080',
      position: 'relative',
    },
  
}));

export default function Header() {
  const classes = useStyles();
  return (
    <div className={classes.root} id="header">
    <h1>Tic Tac Toe</h1>
    <Link style={{ fontSize: 20 }} href="https://en.wikipedia.org/wiki/Tic-tac-toe">
    learn to play <LightbulbIcon fontSize="inherit" />
    </Link>
    </div>
  );
}