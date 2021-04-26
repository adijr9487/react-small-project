import React from 'react'
import {Link} from "react-router-dom"

//component


//classes
import classes from "./Tile.css"


const Tile = (props) => {

    const style = {
        background: `url(${props.imageURl || ""})`
    }

    return (
        <div className={classes.Tile}>
            <div className={classes.Header}>
                <div className={classes.Title}>{props.name}</div>
                <div className={classes.forwardLink}><Link to="/Todo">Link</Link></div>
            </div>
            <div style={style} className={classes.Display}>

            </div>
        </div>
    )
}

export default Tile
