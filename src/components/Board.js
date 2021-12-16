import React  from 'react';
import Square from './Square';
import Grid from '@material-ui/core/Grid';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

export default function Board(props) {
    const theme = useTheme();
    const desktop = useMediaQuery(theme.breakpoints.up("lg"));
    const tablet = useMediaQuery(theme.breakpoints.up("sm"));
    const mobile = useMediaQuery(theme.breakpoints.up("xs"));

  const sizes = () => {
      if (desktop || tablet) return {
        width: 320,
        height: 320,
        margin:'auto',
      };

    if (mobile) return  {
        width: 215,
        height: 215,
        margin:'auto',
    };
    };
    const renderSquare = (i) => {
        return <Square value={props.squares[i]}
        onClick={()=> props.onClick(i)}
        />
    }
    //<Box style={sizes() } sx={{'&:hover': {opacity: [0.9, 0.8, 0.7],},}}>
    return (
        <Box style={sizes() } sx={{'&:hover': {opacity: [0.9, 0.8, 0.7],},}}>
              <Grid container spacing={0} >
                    {renderSquare(0)}
                    <Divider style={{ background: 'black' }} orientation="vertical" flexItem></Divider>
                    {renderSquare(1)}
                    <Divider style={{ background: 'black' }} orientation="vertical" flexItem></Divider>
                   {renderSquare(2)}

                
            </Grid>
                <Divider style={{ background: 'black' }} />
            <Grid container spacing={0}>
                    {renderSquare(3)}
                   <Divider style={{ background: 'black' }} orientation="vertical" flexItem></Divider>
                    {renderSquare(4)}
                   <Divider style={{ background: 'black' }} orientation="vertical" flexItem></Divider>
                    {renderSquare(5)}
             
                </Grid>
                <Divider style={{ background: 'black' }} />
                <Grid container spacing={0} direction="row" >
                    {renderSquare(6)}
                   <Divider style={{ background: 'black' }} orientation="vertical" flexItem></Divider>
                    {renderSquare(7)}
                    <Divider style={{ background: 'black' }} orientation="vertical" flexItem></Divider>
                    {renderSquare(8)}
              </Grid>
              
        </Box>

            
        )
    
};

