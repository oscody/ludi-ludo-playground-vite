import { useRef, useState, useEffect } from "react";
import { AviratiLudoBoard } from "./avirati-ludo/AviratiLudoBoard";

const BOARD_SIZE = 15;

function LUDIContainer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [cellSize, setCellSize] = useState(40); // default

  useEffect(() => {
    function updateCellSize() {
      if (containerRef.current) {
        console.log("containerRef.current", containerRef.current);
        const { width, height } = containerRef.current.getBoundingClientRect();
        console.log("width", width);
        console.log("height", height);
        const size = Math.floor(Math.min(width, height) / BOARD_SIZE);
        setCellSize(size);
      }
    }
    updateCellSize();
    window.addEventListener("resize", updateCellSize);
    return () => window.removeEventListener("resize", updateCellSize);
  }, []);

  return (
    <div ref={containerRef} style={{ width: "100%", height: "100%" }}>
      <h1>Board Container</h1>
      <p>Cell size: {cellSize}px</p>
      {/* Render your board using cellSize */}
      <AviratiLudoBoard cellSize={cellSize} />
    </div>
  );
}

export default LUDIContainer;