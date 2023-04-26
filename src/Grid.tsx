import { useState }, React from "react";
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

    function nextGenClick(): void{
        //resetting the board
        setGrid(oldGrid => {
        })
    }
    
    function getNewGrid(oldGrid:boolean[][]){
        for(let i = 0; i < oldGrid.length; i++){
            for(let j = 0; j < oldGrid[i].length; j++){
                const legalNeighbors = [
                                            [i-1,j],
                                            [i+1,j],
                                            [i,j-1],
                                            [i,j+1],
                                            [i-1,j-1],
                                            [i-1,j+1],
                                            [i+1,j-1],
                                            [i+1,j+1],
                                        ].filter(
                                            c => (
                                                c[0] >= 0
                                                && c[0] < nrows
                                                && c[1] >= 0
                                                && c[1] < ncols
                                            )
                                        );
                const liveNeighbors = legalNeighbors.reduce(
                    (liveNum, coord) => oldGrid[coord[0]][coord[1]] ? liveNum+1 : liveNum,
                    0
                );
                if(liveNeighbors <= 1 || liveNeighbors >= 4) 
            }
        }
        
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
                NextGen
            </button>
        </div>

    )
}

export default Grid;
