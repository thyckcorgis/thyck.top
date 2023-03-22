import React, { useState } from "react";
import { Board } from "./Board";
import { ControlPanel } from "./ControlPanel";

export default function PincerHex() {
  const [size, setSize] = useState(10);
  return (
    <div style={{ margin: "2rem", display: "flex" }}>
      <Board size={size} />
      <ControlPanel
        size={size}
        setSize={setSize}
      />
    </div>
  );
}
