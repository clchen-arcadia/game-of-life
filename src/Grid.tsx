import { useState } from "react";
import { IGrid } from "./types";
import Cell from "./Cell";


const ROWS = 10;
const COLS = 10;

function Grid({nrows = ROWS, ncols = COLS, chanceStartLive = 0.25}: IGrid) {
    const [grid, setGrid] = useState(createBoard())

    function createBoard(): boolean[][] {
        return Array.from({length: ROWS}).map(
            row => Array.from({length: COLS}).map(
                cell => Math.random() < chanceStartLive
            )
        );
    }


    return (
        <table className="Grid">
            {grid.map(
                row => <tr>
                    {row.map(
                        cellBool =>
                        <Cell isLive={cellBool} />
                    )}
                </tr>
            )}
        </table>
    )
}

export default Grid;
