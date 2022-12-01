import React, { Component } from 'react'
import {useState} from 'react'
import axios from 'axios'
import {format} from "timeago.js"
import {Link} from 'react-router-dom'


export default class CharList extends Component{
    state = {
        chars: [],
    }

    async componentDidMount(){
        this.getChars()
        document.title = "Lista de personajes";
    }

    async getChars(){
        const res = await axios.get("https://dndbackapi.onrender.com/chars/")
        this.setState({chars: res.data})
    }
    deleteChar = async(id) => {
        await axios.delete('https://dndbackapi.onrender.com/chars' + id);
        this.getChars();
    }

    render(){
        return(
            <div className="row" id="colon" > 
            {
            this.state.chars.map(char => (
                <div className="col-4 border-0" key={char._id} id="tarjeta">
                    <div className='card border-0' id ="card">
                        <div className="" id="card"> 
                            <h5 id="nombre">{char.nombre}</h5>
                        </div>
                        <div className="card-body">
                            <p></p>
                                <p id="clase">{char.clase}</p>
                                <p id="raza">{char.raza}</p>


                                <p id="fuerza"> Fuerza: {char.fuerza}</p>
                                <p id="destreza">Destreza: {char.destreza}</p>
                                <p id="constitucion">Constitucion: {char.constitucion}</p>

                                <p id="inteligencia">Inteligencia: {char.inteligencia}</p>
                                <p id="sabiduria">Sabiduria: {char.sabiduria}</p>
                                <p id="carisma">Carisma: {char.carisma}</p>

                                <p id="frase">{char.frase}</p>
                                <Link  className='text-link' id="" to={"/editchar/" + char._id}
                               
                                >Editar</Link>


                                <button id="myButton"
                                onClick={() => this.deleteChar(char._id)}
                                >Eliminar</button>
                            </div>
                    </div>
                </div>
            ))
    }
    </div>
        )
    }
}