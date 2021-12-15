import React from 'react'
import Button from '@mui/material/Button';

import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';



export default function Square(props) {


  const handleIcon = (value) => {
    if (value === 'O') {
      
      return <CircleOutlinedIcon style={{ fontSize: 50 }}/>;
    }
    else if (value === 'X') {
      return <ClearOutlinedIcon style={{ fontSize: 50 }}/>;
    }
    
    else return null;
  };
  
  return (
    <div>
        <Button style={{maxWidth: '100px', maxHeight: '100px', minWidth: '100px', minHeight: '100px'}} 
        onClick={props.onClick}
        startIcon={ handleIcon(props.value)}>
      </Button>
      </div>
    )
};

