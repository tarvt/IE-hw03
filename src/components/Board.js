import React  from 'react';
import Square from './Square';
import Grid from '@material-ui/core/Grid';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';

export default function Board(props) {

    const renderSquare = (i) => {
        return <Square value={props.squares[i]}
        onClick={()=> props.onClick(i)}
        />
    }
    
    return (
        <Box sx={{width: 310,height: 310,'&:hover': {opacity: [0.9, 0.8, 0.7],},}}>
            <Grid container spacing={0} columnSpacing={{ xs: 0, sm: 1, md: 2 }}>
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
