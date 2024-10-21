// Define types
type Cell = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7; // 0 represents an empty cell, 1-7 represents different tetromino pieces
type Board = Cell[][]; // A 2D array of Cells
type Tetromino = {
  shape: number[][];
  color: number;
};

// Define Tetromino shapes
const TETROMINOES: Tetromino[] = [
  { shape: [[1, 1, 1, 1]], color: 1 }, // I
  {
    shape: [
      [1, 1],
      [1, 1],
    ],
    color: 2,
  }, // O
  {
    shape: [
      [1, 1, 1],
      [0, 1, 0],
    ],
    color: 3,
  }, // T
  {
    shape: [
      [1, 1, 1],
      [1, 0, 0],
    ],
    color: 4,
  }, // L
  {
    shape: [
      [1, 1, 1],
      [0, 0, 1],
    ],
    color: 5,
  }, // J
  {
    shape: [
      [1, 1, 0],
      [0, 1, 1],
    ],
    color: 6,
  }, // S
  {
    shape: [
      [0, 1, 1],
      [1, 1, 0],
    ],
    color: 7,
  }, // Z
];

const BOARD_WIDTH = 10;
const BOARD_HEIGHT = 20;

const createEmptyBoard = (): Board =>
  Array(BOARD_HEIGHT)
    .fill(0)
    .map(() => Array(BOARD_WIDTH).fill(0));

export default function Tetris() {
  const board = createEmptyBoard();

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
                className={`w-6 h-6 ${
                  cell ? `bg-color-${cell}` : "bg-gray-100"
                }`}
              />
            )),
          )}
        </div>
      </div>
    </div>
  );
}
