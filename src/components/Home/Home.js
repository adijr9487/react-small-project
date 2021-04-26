import React from 'react'

//components
import Tile from "./Tiles/Tile"

//classes
import classes from "./Home.css"

const Home = (props) => {
    return (
        <div className={classes.Home}>

            <div className={classes.Heading}>
                React Small Project
            </div>

            <div className={classes.Tiles}>
                <Tile name="Todo"/>
                {/* <Tile name="Calculator"/>
                <Tile name="Breakout"/> */}
            </div>
        </div>
    )
}

export default Home
