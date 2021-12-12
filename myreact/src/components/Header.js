import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: '10px!important',
        opacity: '60%',
        padding: '20px',
        width: '60%',
        margin:'30px auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#CCCCFF',
        color : '#800080'
    },
  
}));

export default function Header() {
  const classes = useStyles();
  return (
    <div className={classes.root} id="header">
     <h1>Tic Toc Toe </h1>
    </div>
  );
}