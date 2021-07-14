import React from 'react'

import { Link } from 'react-router-dom'
import './feed.css'

import More from '../../images/more.svg'

import HeaderMain from '../../components/HeaderMain/HeaderMain'

function Feed() {
    return(
        <div>

            <HeaderMain />

            <main>

                <div className="cards">

                    <div className="card" >

                        <header>
                            <h2>Curso consumindo api</h2>
                            <img src={More} />
                        </header>

                        <div className="line"></div>

                        <p>Nesse curso eu ensino vcs a consumirem uma api, com react.js, uma api feita em node js e mongoDB,</p>

                        <div className="btns" >

                            <div className="btn-edit" >
                                <Link to="/edit" >
                                    <button>Edit</button>
                                </Link>
                            </div>

                            <div className="btn-readmore" >
                               <Link to="/lermais" >
                                    <button>Ler mais</button>
                                </Link>
                            </div>

                            <div className="btn-delete" >
                                <button>delete</button>
                            </div>

                        </div>
                    </div>

                </div>

            </main>
            
        </div>
    )
}

export default Feed