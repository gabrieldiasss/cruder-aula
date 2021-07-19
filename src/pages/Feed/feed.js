import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { Link } from 'react-router-dom'
import './feed.css'

import More from '../../images/more.svg'

import HeaderMain from '../../components/HeaderMain/HeaderMain'

function Feed() {

    const [ posts, setPosts ] = useState([])

    useEffect(() => {
        axios.get("https://upload-my-api.herokuapp.com/post")
        .then((response) => {
            setPosts(response.data)
        })

        .catch(() => {
            console.log("Deu errrado")
        })

    }, [])

    function deletePost(id) {

        axios.delete(`https://upload-my-api.herokuapp.com/post/delete/${id}`)

        setPosts(posts.filter(post => post._id !== id ))

    }


    return(

        <div>

            <HeaderMain />

            <main>

                <div className="cards">

                    {posts.map((post, key) => {

                        return(
                            
                            <div className="card" key={key} >

                                <header>
                                    <h2>{post.title}</h2>
                                    <img src={More} />
                                </header>

                                <div className="line"></div>

                                <p>{post.description}</p>

                                <div className="btns" >

                                    <div className="btn-edit" >
                                        <Link to={{ pathname: `/edit/${post._id}` }} >
                                            <button>Edit</button>
                                        </Link>
                                    </div>

                                    <div className="btn-readmore" >
                                    <Link to={{pathname: `/lermais/${post._id}` }} >
                                            <button>Ler mais</button>
                                        </Link>
                                    </div>

                                    <div className="btn-delete" >
                                        <button onClick={() => deletePost(post._id) } >delete</button>
                                    </div>

                                </div>
                            </div>
                        )

                    })}

                    
                </div>

            </main>
            
        </div>
    )
}

export default Feed