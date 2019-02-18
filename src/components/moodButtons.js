import React from "react"
import {Link} from "react-router-dom"

const MoodButtons = ({emotion}) => {
    return (
      <div>
        <Link to={`/${emotion}`}><button>{emotion}</button></Link>
      </div>
    )
}

export default MoodButtons
