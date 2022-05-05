import React from 'react'
import {BounceLoader,BarLoader,BeatLoader} from 'react-spinners'
function Spinner() {
    return (
        <div className="spinner">
           <BarLoader size="large"/>
        </div>
    )
}

export default Spinner
