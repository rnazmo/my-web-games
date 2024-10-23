// Define types
type Cell = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7; // 0 represents an empty cell, 1-7 represents different tetromino pieces
type Board = Cell[][]; // A 2D array of Cells
type Tetromino = {
  shape: number[][];
  color: number;
};

const BOARD_WIDTH = 10;
const BOARD_HEIGHT = 20;

const createEmptyBoard = (): Board =>
  Array(BOARD_HEIGHT)
    .fill(0)
    .map(() => Array(BOARD_WIDTH).fill(0));

// テトリミノの形を定義（T字型）
const TETROMINO_T = [
  [0, 1, 0],
  [1, 1, 1],
  [0, 0, 0],
];

interface Position {
  x: number;
  y: number;
}

export default function Tetris() {
  const board = createEmptyBoard();

  board[1][1] = 1;
  board[1][2] = 2;

  const currentTetrominoShape = TETROMINO_T;

  const currentTetrominoPosition = {
    x: 5,
    y: 5,
  };

  for (let y = 0; y < currentTetrominoShape.length; y++) {
    for (let x = 0; x < currentTetrominoShape[y].length; x++) {
      if (currentTetrominoShape[y][x]) {
        board[currentTetrominoPosition.y + y][currentTetrominoPosition.x + x] =
          1;
      }
    }
  }

  // TODO: implement game logic here

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <div className="grid grid-cols-10 gap-px bg-gray-300 p-px">
          {/* Render the grid */}
          {board.map((row, y) =>
            row.map((cell, x) => (
              <div
                key={`${x},${y}`}
                className={`w-6 h-6 ${cell ? `bg-gray-400` : "bg-gray-100"}`}
              />
            )),
          )}
        </div>
      </div>
    </div>
  );
}
