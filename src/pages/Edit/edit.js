import React, { useEffect } from 'react'
import axios from 'axios'

import Header from '../../components/Header/Header'

import { useHistory, useParams } from 'react-router-dom'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const validationPost = yup.object().shape({
    title: yup.string().required("O título é obrigatório").max(40, "O título precisa ter menosde 40 caracteres"),
    description: yup.string().required("A descrição é obrigatório").max(150, "A descrição precisa ter menosde 150 caracteres"),
    content: yup.string().required("O conteúdo é obrigatório").max(500, "O conteúdo precisa ter menosde 500 caracteres")
})

function Edit() {

    const { id } = useParams()

    let history = useHistory()

    
    const addPost = data => axios.put(`https://upload-my-api.herokuapp.com/post/edit/${id}`, data)
    .then(() => {
        console.log("Deu tudo certo")
        history.push("/")
    })
    .catch(() => {
        console.log("DEU ERRADO")
    })

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(validationPost)
    })

    useEffect(() => {
        axios.get(`https://upload-my-api.herokuapp.com/post/${id}`)
        .then((response) => {
            reset(response.data)
        })
        
    }, [])

    return(
        <div>
            <Header />
            
            <main>

                <div className="card-post" >

                    <h1>Criar postagem</h1>
                    <div className="line-post" ></div>

                    <div className="card-body-post" >

                        <form onSubmit={handleSubmit(addPost)} >

                            <div className="fields" >
                                <label>Título</label>
                                <input type="text" name="title" {...register("title")} />
                                <p className="error-message">{errors.title?.message}</p>
                            </div>

                            <div className="fields" >
                                <label>Descrição</label>
                                <input type="text" name="description" {...register("description")} />
                                <p className="error-message">{errors.description?.message}</p>
                            </div>

                            <div className="fields" >
                                <label>Conteúdo</label>
                                <textarea type="text" name="content" {...register("content")} ></textarea>
                                <p className="error-message">{errors.content?.message}</p>
                            </div>

                            <div className="btn-post" >
                                <button type="submit" >Enviar</button>
                            </div>

                        </form>

                    </div>

                </div>

            </main>
        </div>
    )
}

export default Edit
