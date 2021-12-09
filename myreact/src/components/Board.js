import React, { Component } from 'react';
import Square from './Square';
import Grid from '@material-ui/core/Grid';
import ButtonGroup from '@mui/material/ButtonGroup';
import Divider from '@mui/material/Divider';
export default class Board extends Component {
    renderSquare(i){
        return <Square value={this.props.squares[i]}
        onClick={()=>this.props.onClick(i)}
        />
    }
    
    render() {
        return (
            <div>
            <ButtonGroup variant="text" aria-label="text button group">
                    <Grid item xs={4}> {this.renderSquare(0)}</Grid>
                    <Divider style={{ background: 'black' }} orientation="vertical" flexItem></Divider>
                    <Grid item xs={4}>{this.renderSquare(1)}</Grid>
                    <Divider style={{ background: 'black' }} orientation="vertical" flexItem></Divider>
                     <Grid item xs={4}>{this.renderSquare(2)}</Grid>
            </ButtonGroup>
                <br />
                <Divider style={{ background: 'black' }} />
            <ButtonGroup variant="text" aria-label="text button group">
                    <Grid item xs={4}>{this.renderSquare(3)}</Grid>
                    <Divider style={{ background: 'black' }} orientation="vertical" flexItem></Divider>
                    <Grid item xs={4}>{this.renderSquare(4)}</Grid>
                    <Divider style={{ background: 'black' }} orientation="vertical" flexItem></Divider>
                    <Grid item xs={4}>{this.renderSquare(5)}</Grid>
             
                </ButtonGroup>
                <br />
                <Divider style={{ background: 'black' }} />
                <ButtonGroup variant="text" aria-label="text button group">
                    <Grid item xs={4}>{this.renderSquare(6)}</Grid>
                    <Divider style={{ background: 'black' }} orientation="vertical" flexItem></Divider>
                    <Grid item xs={4}>{this.renderSquare(7)}</Grid>
                    <Divider style={{ background: 'black' }} orientation="vertical" flexItem></Divider>
                    <Grid item xs={4}>{this.renderSquare(8)}</Grid>
              </ButtonGroup>
            <br />
            </div>

            
        )
    }
}
