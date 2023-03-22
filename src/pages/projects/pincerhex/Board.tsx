import React, { useEffect, useState } from "react";

import "./board.css";

// START Board {{{
type BoardProps = { size: number };
type Board = DeepReadonly<Piece[][]>;

function placePiece(board: Board, cell: Cell, piece: Piece) {
  return board.map((row, r) =>
    cell[0] === r ? row.map((color, c) => c === cell[1] ? piece : color) : row
  );
}

export function Board({ size }: BoardProps) {
  // const socket = useSocket();
  const [board, setBoard] = useState<Board>(() => createMatrix(size));
  const [toPlay, setToPlay] = useState(() => BLACK);

  function onClick(cell: string) {
    const idx = cellToIdx(cell, size);
    if (idx === None) return;
    if (board[idx[0]][idx[1]] !== EMPTY) return;
    setBoard((board) => placePiece(board, idx, toPlay));
    // socket.sendCommand(["seto", cell]);
    setToPlay((v) => opp[v]);
  }

  useEffect(() => {
    setBoard(() => createMatrix(size));
  }, [size]);

  // useEffect(() => {
  //   const pieceHandler = socket.addEventListener("move", (e) => {
  //     const idx = e.data;
  //     setBoard((board) => placePiece(board, idx, toPlay));
  //   });
  //   socket.size = size;
  //   return () => {
  //     socket.removeEventListener("move", pieceHandler);
  //   };
  // }, [socket, size]);

  return (
    <div className="board">
      {board.map((row, idx) => (
        <Row row={row} idx={idx} key={idx} onClick={onClick} />
      ))}
    </div>
  );
}

function createMatrix(size: number): Piece[][] {
  return Array(size).fill([]).map(() => Array(size).fill(EMPTY));
}
// END Board }}}

// START Row {{{
type RowProps = {
  row: DeepReadonly<Piece[]>;
  idx: number;
  onClick: (c: string) => void;
};

function useHexSize() {
  return parseInt(
    getComputedStyle(document.documentElement).getPropertyValue("--hex-size"),
  );
}

function Row({ row: line, idx: row, onClick }: RowProps) {
  const hexSize = useHexSize();
  return (
    <div
      className="row"
      style={{
        marginTop: `-${hexSize * 0.28}px`,
        marginLeft: `${hexSize * 0.5 * row}px`,
      }}
    >
      {line.map((c, col) => {
        const cell = cellStr(row, col);
        return <Cell color={c} key={cell} onClick={onClick} cell={cell} />;
      })}
    </div>
  );
}

function cellStr(row: number, col: number): string {
  const colStr = String.fromCharCode(col + "a".charCodeAt(0));
  return `${colStr}${(row + 1).toString()}`;
}
// END Row }}}

// START Cell {{{
export type Piece = number & { __brand: "Piece" };
export const WHITE = 0 as Piece, BLACK = 1 as Piece, EMPTY = 2 as Piece;

export const opp: Record<Piece, Piece> = {
  [BLACK]: WHITE,
  [WHITE]: BLACK,
} as const;
export const toStr = { [BLACK]: "black", [WHITE]: "white" } as const;

function Cell({ color, onClick, cell }: CellProps) {
  return (
    <div
      style={{
        cursor: color === EMPTY ? "pointer" : "default",
      }}
      title={cell}
      className="hex"
      onClick={() => onClick(cell)}
    >
      {colorToClass(color) && (
        <div className="piece-container">
          <div className={colorToClass(color)} />
        </div>
      )}
    </div>
  );
}

type CellProps = {
  color: Piece;
  onClick: (c: string) => void;
  cell: string;
};

function colorToClass(c: Piece) {
  switch (c) {
    case WHITE:
      return "piece white";
    case BLACK:
      return "piece black";
    case EMPTY:
    default:
      return "";
  }
}
// END Cell }}}

// START DeepReadonly {{{
type DeepReadonly<T> = T extends primitive ? T
  : T extends Array<infer U> ? DeepReadonlyArray<U>
  : DeepReadonlyObject<T>;
type primitive = string | number | boolean | undefined | null;
type DeepReadonlyArray<T> = ReadonlyArray<DeepReadonly<T>>;
type DeepReadonlyObject<T> = { readonly [P in keyof T]: DeepReadonly<T[P]> };
// END DeepReadonly }}}

// START cellToIdx {{{
type Option<T> = T | typeof None;
export type Cell = [row: number, col: number];
export const None = Symbol("None");

export function cellToIdx(c: string, size: number): Option<Cell> {
  if (c.length <= 1) return None;
  try {
    const col = c.slice(0, 1).charCodeAt(0) - "a".charCodeAt(0);
    if (col < 0 || col > size) return None;
    const row = parseInt(c.slice(1)) - 1;
    if (row < 0 || row > size) return None;
    return [row, col];
  } catch {
    return None;
  }
}
// END cellToIdx }}}
