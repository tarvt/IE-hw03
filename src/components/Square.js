import React from 'react'
import Button from '@mui/material/Button';import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";


export default function Square(props) {
  const theme = useTheme();
  const desktop = useMediaQuery(theme.breakpoints.up("lg"));
  const tablet = useMediaQuery(theme.breakpoints.up("sm"));
  const mobile = useMediaQuery(theme.breakpoints.up("xs"));

  const sizebtn = () => {
    if (desktop || tablet) return {
    maxWidth: '105px',maxHeight: '105px',minWidth: '105px',minHeight: '100px',
  };
    if (mobile) return {
      maxWidth: '70px',maxHeight: '70px',minWidth: '70px',minHeight: '70px',
    };
  };
    const sizeicn = () => {
    if (desktop || tablet) return {
    fontSize: 50,
  };
    if (mobile) return {
      fontSize: 30,
    };
  };
  const handleIcon = (value) => {
    if (value === 'O') {
      return <CircleOutlinedIcon style={ sizeicn()} />;
    }
    else if (value === 'X') {
      return <ClearOutlinedIcon style={ sizeicn()} />;
    }
    
    else return null;
  };
  
  return (
    
    <div>
      <Button style={ sizebtn()}
        onClick={props.onClick}
        startIcon={ handleIcon(props.value)}>
      </Button>
      </div>
    )
};



