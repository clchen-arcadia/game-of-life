import "./Cell.css"

/**
 * A single cell on the board
 *
 * No state, just one prop
 *
 * - isLive: boolean, is the cell alive?
 */
function Cell({isLive}: {isLive: boolean}) {
    const classes = `Cell ${isLive ? "Cell-live" : ""}`
    return (
        <td className={classes} />
    );
}

export default Cell
