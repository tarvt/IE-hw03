import React, { Component } from 'react';
import Square from './Square';
import Grid from '@material-ui/core/Grid';
export default class Board extends Component {
    renderSquare(i){
        return <Square value={this.props.squares[i]}
        onClick={()=>this.props.onClick(i)}
        />
    }
    
    render() {
        return (
            <div>
            
 
            <Grid container rowSpacing={1}>
                   <Grid item xs={4}> {this.renderSquare(0)}</Grid>
                    <Grid item xs={4}>{this.renderSquare(1)}</Grid>
                     <Grid item xs={4}>{this.renderSquare(2)}</Grid>
            </Grid>
                <Grid container rowSpacing={1}>
                    <Grid item xs={4}>{this.renderSquare(3)}</Grid>
                    <Grid item xs={4}>{this.renderSquare(4)}</Grid>
                    <Grid item xs={4}>{this.renderSquare(5)}</Grid>
                </Grid>
                <Grid container rowSpacing={1}>
                    <Grid item xs={4}>{this.renderSquare(6)}</Grid>
                    <Grid item xs={4}>{this.renderSquare(7)}</Grid>
                    <Grid item xs={4}>{this.renderSquare(8)}</Grid>
                </Grid>

            </div>

            
        )
    }
}
