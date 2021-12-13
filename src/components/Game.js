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
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';

const reducer = (state, action) => {
  switch (action.type) {
    case 'JUMP':
      return {
        ...state,
        xIsNext: action.payload.step % 2 === 0,
        history: state.history.slice(0, action.payload.step + 1),
      };
    case 'MOVE':
      return {
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

export default function Game(props) {
  // defining sizes for making the website responsive
  const theme = useTheme();
    const desktop = useMediaQuery(theme.breakpoints.up("lg"));
    const tablet = useMediaQuery(theme.breakpoints.up("sm"));
    const mobile = useMediaQuery(theme.breakpoints.up("xs"));
    const styleGame = () => {

    if (desktop || tablet) return {backgroundColor:'#d8e4fc',
    borderRadius: '10px!important',
    width: '60%',
    margin: 'auto',
    padding: '10px 12px',
    display: 'flex',
    justifycontent: 'space-between'};
    if (mobile) return {backgroundColor:'#d8e4fc',
    width: '90%',
    margin: 'auto',
    justifycontent: 'space-between'};
  };
    const styleSec = () => {
    if (desktop) return {
    width: '35%',
    marginbottom: '5%',
    margin: 'auto',
    padding:'10px 12px',
    borderradius: '10px',};
      if (mobile || tablet) return {
        backgroundColor: '#d8e4fc',
        marginbottom: '5%',
        width: '75%',
        margin: 'auto',
        justifycontent: 'space-between'};
  };

  //new game 
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
      : 'Winner is ' + winner
    : 'Next player is ' + (xIsNext ? props.player1 : props.player2 );
// this functions fills in the list of privous moves
  const moves = history.map((step, move) => {
    if (move > 0) { 
    const desc = 'Go to move #' + move;
    return (
      
      <ListItem key={move} disablePadding>
        <ListItemButton style={{ backgroundColor: "#c2c8d1" }} onClick={() => jumpTo(move)}>{desc}</ListItemButton>
      </ListItem>

    );
  }
  });

  return (
    <div style={styleGame()}>
      
      <div style={styleSec()}>
        <Board
          onClick={(i) => handleClick(i)}
          squares={current.squares}
        ></Board>
      </div>
      <div style={styleSec()}>
        <Button sx={{ m: 1 }} style={{ marginBottom: '10px' }} variant="contained" endIcon={<RestartAltIcon />} onClick={() => jumpTo(0)}>restart</Button>
        <Button sx={{ m: 1 }} style={{marginBottom:'10px'}} variant="contained" endIcon={<SportsEsportsIcon/>} onClick={() => newgame()}>new game</Button>
        <Alert icon={winner ? <EmojiEventsIcon/> : <DirectionsRunIcon/>}
          severity={winner ? "success" : "info"} >{status}</Alert>
        <List style={{}}>{moves}</List>
      </div>
    </div>
  );
}
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