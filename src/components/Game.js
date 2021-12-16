import React, { useReducer } from 'react';
import Board from './Board';
import Alert from '@mui/material/Alert';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import List from '@mui/material/List';
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';


export default function Game(props) {
  // defining sizes for making the website responsive
  const theme = useTheme();
    const desktop = useMediaQuery(theme.breakpoints.up("lg"));
    const tablet = useMediaQuery(theme.breakpoints.up("sm"));
    const mobile = useMediaQuery(theme.breakpoints.up("xs"));
    const styleGame = () => {

    if (desktop ) return {
      backgroundColor: '#d8e4fc', borderRadius: '10px!important', width: '60%',
        margin: 'auto', padding: '10px 12px', display: 'flex', justifycontent: 'space-between'
      };
    if ( tablet ) return {backgroundColor:'#d8e4fc',
      width: '80%', margin: 'auto', justifycontent: 'space-between'
    };
    if (mobile ) return {backgroundColor:'#d8e4fc',
      width: '90%', margin: 'auto', justifycontent: 'space-between'
    };
  };
  
    const stylebrd = () => {
      if (desktop) return {
        width: '55%', margin: 'auto', borderradius: '10px',
      };
       if ( tablet ) return {
          width: '50%',margin: 'auto'};
      if (mobile) return {
        backgroundColor:'#d8e4fc',
         width: '75%',margin: 'auto',justifycontent: 'space-between'};
  };

  const stylebtn = () => {
    if (desktop ) return {
       width: '40%',fontSize: 15 ,
    };
      if (mobile || tablet) return {
      height:'40px', width: '40%',fontSize: 10 , zindex: '10 !important'};
  };
  const styletest = () => {
    if (desktop ) return {
     display: 'inline',
      width: '400px',
      fontSize:'1.4em'
    };
    if (mobile || tablet) return {
      display: 'inline',
      width: '200px',
    fontSize:'0.9em'};
    
  };
  //refresh the page
  const newgame = () => {
    window.location.reload();
  };

  const [state, dispatch] = useReducer(reducer, {
    xIsNext: true,
    history: [{ squares: Array(9).fill(null) }],
  });
  const { xIsNext, history } = state;
  const jumpTo = (step) => {
    dispatch({ type: 'JUMP', payload: { step } });
  };
  const handleClick = (i) => {
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    const winner = calculateWinner(squares);
    if (winner || squares[i]) {
      return;
    }
    squares[i] = xIsNext ? 'X' : 'O';
    dispatch({ type: 'MOVE', payload: { squares } });
  };
  const current = history[history.length - 1];
  const winner = calculateWinner(current.squares);

  const status = winner
    ? winner === 'D'
      ? 'Draw'
      : 'Winner is ' + (winner ==='X' ? props.player1 : props.player2 )
    : 'Next player is ' + (xIsNext ? props.player1 : props.player2 );
// this functions fills in the list of privous moves
  const moves = history.map((step, move) => {
    if (move > 0) { 
    const desc = 'Go to move #' + move;
      return (
      <ListItem key={move} disablePadding>
        <ListItemButton sx={{ m:0.5}} onClick={() => jumpTo(move)}>{desc}</ListItemButton>  
      </ListItem>
      
    );
    }
    return null;
  });
  

  const [drawer, setdrawer] = React.useState({
    left: false,
  });
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setdrawer({ ...drawer, [anchor]: open });
  };
  // show the list of moves
  const tmovelist = (anchor) => (
    <Box
      style = {styletest()}
    onClick={toggleDrawer(anchor, false)}
    onKeyDown={toggleDrawer(anchor, false)}
    >
     
    <IconButton color="primary" ><CloseIcon /></IconButton>
      <List >{moves}</List>
      <Button  style={stylebtn() } sx={{ m: 0.5,color:"secondary" }} variant="outlined" endIcon={<RestartAltIcon />} onClick={() => jumpTo(0)}>restart</Button>
    
    </Box>
  );

  return (
    <Box style={styleGame()}>
      
      <Box sx={{ p: 2 , m:2}} style={stylebrd()}>
        <Board
          onClick={(i) => handleClick(i)}
          squares={current.squares}
        ></Board>
      </Box>

      <Box style={stylebrd()}>
          <Alert icon={winner ? <EmojiEventsIcon/> : <DirectionsRunIcon/>}
          severity={winner ? "success" : "info"} >{status}</Alert>
          <Button style={stylebtn() } sx={{ m: 1 }} variant="contained"  onClick={() => newgame()}>new game</Button>
      <React.Fragment key={'left'}  >
          <Button style={stylebtn() } sx={{ m: 1 }} variant="contained" onClick={toggleDrawer('left', true)}>show moves</Button>
          <SwipeableDrawer
            sx = {{width:'100px'}}
            anchor={'left'}
            open={drawer['left']}
            onClose={toggleDrawer('left', false)}
            onOpen={toggleDrawer('left', true)}
          >
            {tmovelist('left')}
          </SwipeableDrawer>
        </React.Fragment>
      </Box>
    </Box>
  );
}
// a function to calculate the winner 
const calculateWinner = (squares) => {
  const winnerLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  let isDraw = true;
  for (let i = 0; i < winnerLines.length; i++) {
    const [a, b, c] = winnerLines[i];
    if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
        return squares[a];
    }
    if (!squares[a] || !squares[b] || !squares[c]) {
      isDraw = false;
    }
  }
  if (isDraw) return 'D';
  return null;
};
// if state changes reducer will handle the nwe state
const reducer = (state, action) => {
  switch (action.type) {
    case 'JUMP':
      return {
        // keep the last state but change isnext and history
        ...state,
        xIsNext: action.payload.step % 2 === 0,
        history: state.history.slice(0, action.payload.step + 1),
      };
    case 'MOVE':
      return {
        // keep the last state but change isnext and add to history
        ...state,
        history: state.history.concat({
          squares: action.payload.squares,
        }),
        xIsNext: !state.xIsNext,
      };
    default:
      return state;
  }
};