import { useState } from "react";
import { IGrid } from "./types";
import Cell from "./Cell";

/**
 *
 */
function Grid({nrows, ncols, chanceStartLive}: IGrid) {
    const [grid, setGrid] = useState(createBoard())

    function createBoard(): boolean[][] {
        return Array.from({length: nrows}).map(
            row => Array.from({length: ncols}).map(
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
