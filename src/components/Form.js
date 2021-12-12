import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'



export default function Form(props) {
    var player1, player2;
    const onTextChange1 = (e) => { player1 = e.target.value;  };
    const onTextChange2 = (e) => { player2 =e.target.value };
  return (
    <div style={{display:'flex'}}>
        <TextField onChange={onTextChange1} value={player1} id="outlined-basic" label="Outlined" variant="outlined" />
        <TextField onChange={onTextChange2} value={player2} id="outlined-basic" label="Outlined" variant="outlined" />
          <Button onClick={props.onClick(player1, player2)} >Text</Button>
    </div>
  );
}