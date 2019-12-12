import * as React from 'react'
import {Link} from "react-router-dom"
import Button from 'react-bootstrap/Button';

export const HomePage = () => {
    return <>
        <p>Home Page</p>
        <Link to='/'>Back</Link>
        <Button>This is a Bootstrap button</Button>
    </>
}
