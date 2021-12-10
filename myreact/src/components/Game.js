import React, { useReducer } from 'react';
import Board from './Board';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@mui/material/Alert';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';



const useStyles = makeStyles((theme) => ({
  game: {
    alignItems: 'center',
    backgroundColor: 'white',
    width: '60%',
    display: 'flex',
    margin:'0px auto',
    border: '2px solid black',
    padding:'20px',
    flexDirection:'row',    
  },
  gameinfo: {
    marginLeft:'20px',
  }

  
}));

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

export default function Game() {
  const classes = useStyles();
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
    : 'Next player is ' + (xIsNext ? 'X' : 'O');

  const moves = history.map((step, move) => {
    const desc = move ? 'Go to #' + move : 'Start the Game';
    return (
      <ListItem key={move} disablePadding>
        <ListItemButton style={ {backgroundColor:"#c2c8d1"}} onClick={() => jumpTo(move)}>{desc}</ListItemButton>
      </ListItem>

    );
  });

  return (
    <div className={winner ? classes.game : classes.game }>
      <div>
        <Board
          onClick={(i) => handleClick(i)}
          squares={current.squares}
        ></Board>
      </div>
      <div className={classes.gameinfo}>
        <Alert severity={winner ? "success" : "info"} >{status}</Alert>
        <List>{moves}</List>
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