import React from 'react'
import Button from '@mui/material/Button';

export default function Square(props) {
    return (
        <Button variant="contained" color="primary" onClick={props.onClick }>{props.value  }</Button>
    )
}