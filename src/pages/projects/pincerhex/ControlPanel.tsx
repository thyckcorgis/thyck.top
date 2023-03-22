import React, { type FormEvent } from "react";
import { BLACK, opp, toStr, WHITE } from "./Board";

import "./control-panel.css";

const MIN = 10;
const MAX = 10;

type ControlPanelProps = {
  size: number;
  setSize: (n: number) => void;
};

export function ControlPanel({ size, setSize }: ControlPanelProps) {
  // const socket = useSocket();

  function handleSizeChange(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // socket.sendCommand(["init_board", size.toString()]);
  }

  function PlayButton({ color }: { color: keyof typeof opp }) {
    return (
      <button
        onClick={
          () => {}
          // socket.startGame(color, size)
        }
        disabled={true}
      >
        Play as {toStr[color]}
      </button>
    );
  }

  return (
    <div className="control-panel">
      <form onSubmit={handleSizeChange}>
        <span>
          <label>Size</label>
        </span>
        <input
          type="number"
          min={MIN}
          max={MAX}
          value={size}
          disabled={true}
          // onBlur={() => setSize(constrain(size))}
          // onChange={(e) => setSize(Number(e.currentTarget.value))}
        />
      </form>
      <PlayButton color={BLACK} />
      <PlayButton color={WHITE} />
    </div>
  );
}

function constrain(v: number) {
  return Math.min(Math.max(v, MIN), MAX);
}
