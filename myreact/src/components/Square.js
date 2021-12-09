import React from 'react'
import Button from '@mui/material/Button';
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';



export default function Square(props) {
  const theme = useTheme();
  const desktop = useMediaQuery(theme.breakpoints.up("lg"));
  const tablet = useMediaQuery(theme.breakpoints.up("sm"));
  const mobile = useMediaQuery(theme.breakpoints.up("xs"));

  const sizes = () => {

    if (desktop) return {maxWidth: '100px', maxHeight: '100px', minWidth: '100px', minHeight: '100px' , borderRadius: '35',
        Color : '#ffffff',
        fontSize: '25px'};
    if (tablet) return {maxWidth: '50px', maxHeight: '50px', minWidth: '50px', minHeight: '100px'};
    if (mobile) return {maxWidth: '10px', maxHeight: '10px', minWidth: '5x', minHeight: '30px'};
  };
  
  const handleIcon = (value) => {
    console.log("we here1");
    if (value === 'X') {
      
      return <CircleOutlinedIcon />;
    }
    else if (value === 'O') {
      return <ClearOutlinedIcon />;
    }
    
    else return null;
  };
  
  return (
      
    <div>
      
        <Button style={sizes() } 
        onClick={props.onClick}
        startIcon={ handleIcon(props.value)}>
      </Button>
      </div>
    )
};

