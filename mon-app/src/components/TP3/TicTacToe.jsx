import { useEffect, useState } from 'react';
import Cases from './Cases';
import StatutMorpion from './StatutMorpion';

const STORAGE_KEY = 'morpion-board';
const EMPTY_BOARD = Array(9).fill(null);
const winningLines = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6],
];

function loadBoard() {
  try {
    const savedBoard = JSON.parse(localStorage.getItem(STORAGE_KEY));
    const normalizedBoard = Array.isArray(savedBoard)
      ? savedBoard.map((cell) => cell === 'X' ? 'vert' : cell === 'O' ? 'rouge' : cell)
      : null;
    const isValidBoard = Array.isArray(normalizedBoard)
      && normalizedBoard.length === 9
      && normalizedBoard.every((cell) => cell === null || cell === 'vert' || cell === 'rouge');

    return isValidBoard ? normalizedBoard : EMPTY_BOARD;
  } catch {
    return EMPTY_BOARD;
  }
}

function getWinner(board) {
  const line = winningLines.find(([a, b, c]) => (
    board[a] && board[a] === board[b] && board[a] === board[c]
  ));
  return line ? board[line[0]] : null;
}

export default function TicTacToe() {
  const [board, setBoard] = useState(loadBoard);
  const winner = getWinner(board);
  const isDraw = !winner && board.every(Boolean);
  const nextMark = board.filter(Boolean).length % 2 === 0 ? 'vert' : 'rouge';

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(board));
    } catch {
      // Le jeu reste utilisable si le navigateur bloque le stockage local.
    }
  }, [board]);

  function play(index) {
    if (board[index] || winner || isDraw) return;
    setBoard((current) => current.map((mark, cell) => (
      cell === index ? nextMark : mark
    )));
  }

  function reset() {
    setBoard(EMPTY_BOARD);
  }

  return (
    <section className="morpion" aria-label="Jeu de morpion">
      <StatutMorpion winner={winner} isDraw={isDraw} nextMark={nextMark} onReset={reset} />
      <Cases board={board} disabled={Boolean(winner) || isDraw} onPlay={play} />
    </section>
  );
}
