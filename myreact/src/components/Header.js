import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        padding: '20px',
        width: '60%',
        margin:'30px auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Nunito',
        backgroundColor: 'white',
        border:'2px solid black'
    },
  
}));

export default function Header() {
  const classes = useStyles();
  return (
    <div className={classes.root} id="header">
     <h1>Welcome to <br />tic toc toe game </h1>
    </div>
  );
}