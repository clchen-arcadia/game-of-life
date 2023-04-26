import React, { useState } from "react";
import { IGrid } from "./types";
import Cell from "./Cell";

/**
 *
 */
function Grid({ nrows, ncols, chanceStartLive }: IGrid) {
    const [grid, setGrid] = useState(createBoard());

    function createBoard(): boolean[][] {
        return Array.from({ length: nrows }).map(
            row => Array.from({ length: ncols }).map(
                cell => Math.random() < chanceStartLive
            )
        );
    }

    function nextGenClick(): void {
        //resetting the board
        setGrid(oldGrid => getNewGrid(oldGrid));
    }

    function getNewGrid(oldGrid: boolean[][]): boolean[][] {
        const newGrid = [];

        for (let i = 0; i < nrows; i++) {
            const newRow = [];

            for (let j = 0; j < ncols; j++) {
                const legalNeighbors = [
                    [i - 1, j],
                    [i + 1, j],
                    [i, j - 1],
                    [i, j + 1],
                    [i - 1, j - 1],
                    [i - 1, j + 1],
                    [i + 1, j - 1],
                    [i + 1, j + 1],
                ].filter(
                    c => (
                        c[0] >= 0
                        && c[0] < nrows
                        && c[1] >= 0
                        && c[1] < ncols
                    )
                );

                let nextGenAlive = null;
                const currAlive = oldGrid[i][j];

                const liveNeighbors = legalNeighbors.reduce(
                    (liveNum, coord) => oldGrid[coord[0]][coord[1]] ? liveNum + 1 : liveNum,
                    0
                );

                if (!currAlive) {
                    if (liveNeighbors === 3) {
                        nextGenAlive = true;
                    } else {
                        nextGenAlive = false;
                    }
                } else {
                    if (liveNeighbors <= 1 || liveNeighbors >= 4) {
                        nextGenAlive = false;
                    } else {
                        nextGenAlive = true;
                    }
                }

                newRow.push(nextGenAlive);
            }

            newGrid.push(newRow);
        }

        return newGrid;
    }

    return (
        <div>
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
            <button className="nextGenButton" onClick={nextGenClick}>
                Next Generation!
            </button>
        </div>

    );
}

export default Grid;
