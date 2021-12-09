import React from 'react'
import Button from '@mui/material/Button';
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";


export default function Square(props) {
  const theme = useTheme();
  const desktop = useMediaQuery(theme.breakpoints.up("lg"));
  const tablet = useMediaQuery(theme.breakpoints.up("sm"));
  const mobile = useMediaQuery(theme.breakpoints.up("xs"));

  const sizes = () => {
    if (desktop) return {maxWidth: '100px', maxHeight: '100px', minWidth: '100px', minHeight: '100px'};
    if (tablet) return {maxWidth: '50px', maxHeight: '50px', minWidth: '50px', minHeight: '100px'};
    if (mobile) return {maxWidth: '10px', maxHeight: '10px', minWidth: '5x', minHeight: '30px'};
  };

    return (
        <Button style={sizes()} variant="outlined" color="primary"
             onClick={props.onClick}>
            {props.value}</Button>
    )
}