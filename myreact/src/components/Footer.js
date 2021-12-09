import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
        margin:'30px auto',
        display: 'flex',
        left: '0',
        bottom: '0',
        width: '100%',
        backgroundColor: 'white',
        zIndex: '9',
        justifyContent: 'center',
        alignItems: 'center',
    },
  
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.root} id="footer">
     <p>made by Taravat Monsef <br />internet engineering exercise 3</p>
    </div>
  );
}