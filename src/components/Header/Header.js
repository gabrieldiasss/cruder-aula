import React from 'react'

import { Link } from 'react-router-dom'

import Back from '../../images/back-button.svg'



function Header() {
    return (

        <header>
            <div className="container">

                <Link to="/" >
                    <img src={Back} style={{width: '50px'}} />
                </Link>

            </div>
        </header>

    )
}

export default Header