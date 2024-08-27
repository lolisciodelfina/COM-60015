import React from 'react'
import {Link} from "react-router-dom"

const Error = () => {
    return (
        <div>
            <h2>Error 404, página no encontrada</h2>
            <Link to="/" >Volver a HOME</Link>
        </div>

    )
}

export default Error