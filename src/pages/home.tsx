import * as React from 'react'
import {Link} from "react-router-dom"

export const HomePage = () => {
    return <>
        <p>Home Page</p>
        <Link to='/'>Back</Link>
    </>
}
