import React, { Component } from 'react';
import Square from './Square';
import Grid from '@material-ui/core/Grid';
import ButtonGroup from '@mui/material/ButtonGroup';
import Divider from '@mui/material/Divider';

export default function Board(props) {
    
    const renderSquare = (i) => {
        return <Square value={props.squares[i]}
        onClick={()=> props.onClick(i)}
        />
    }
    
    return (
            <div>
            <ButtonGroup variant="text" aria-label="text button group">
                    <Grid item xs={4}> {renderSquare(0)}</Grid>
                    <Divider style={{ background: 'black' }} orientation="vertical" flexItem></Divider>
                    <Grid item xs={4}>{renderSquare(1)}</Grid>
                    <Divider style={{ background: 'black' }} orientation="vertical" flexItem></Divider>
                     <Grid item xs={4}>{renderSquare(2)}</Grid>
            </ButtonGroup>
                <br />
                <Divider style={{ background: 'black' }} />
            <ButtonGroup variant="text" aria-label="text button group">
                    <Grid item xs={4}>{renderSquare(3)}</Grid>
                    <Divider style={{ background: 'black' }} orientation="vertical" flexItem></Divider>
                    <Grid item xs={4}>{renderSquare(4)}</Grid>
                    <Divider style={{ background: 'black' }} orientation="vertical" flexItem></Divider>
                    <Grid item xs={4}>{renderSquare(5)}</Grid>
             
                </ButtonGroup>
                <br />
                <Divider style={{ background: 'black' }} />
                <ButtonGroup variant="text" aria-label="text button group">
                    <Grid item xs={4}>{renderSquare(6)}</Grid>
                    <Divider style={{ background: 'black' }} orientation="vertical" flexItem></Divider>
                    <Grid item xs={4}>{renderSquare(7)}</Grid>
                    <Divider style={{ background: 'black' }} orientation="vertical" flexItem></Divider>
                    <Grid item xs={4}>{renderSquare(8)}</Grid>
              </ButtonGroup>
            <br />
            </div>

            
        )
    
};
