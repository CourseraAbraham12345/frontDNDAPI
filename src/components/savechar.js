import React, { Component } from 'react'
import axios from 'axios'
import { useParams } from "react-router-dom";

//const randomQuote = require('random-lotr-movie-quote');
//console.log(randomQuote().dialog);




function withParams(Component) {
    return props => <Component {...props} params={useParams()} />;
  }


  

class CreateChar extends Component {

    constructor(props){
        super(props);

        this.state = {
            
        _id: '',
        nombre: "",
        clase: "Guerrero",
        raza: "Humano",
        frase: "",
        

        fuerza: Math.floor(Math.random() * (18 - 1 + 1) + 1),
        destreza: Math.floor(Math.random() * (18 - 1 + 1) + 1),
        constitucion: Math.floor(Math.random() * (18 - 1 + 1) + 1),
        inteligencia: Math.floor(Math.random() * (18 - 1 + 1) + 1),
        sabiduria: Math.floor(Math.random() * (18 - 1 + 1) + 1),
        carisma: Math.floor(Math.random() * (18 - 1 + 1) + 1),
        val: 0,

        editing: false,
        _id: ''
           
        };

         
    }


  



    async componentDidMount(){

        const res = await axios.get('https://dndbackapi.onrender.com/chars/')
        document.title = "Crear personaje";
        
        const headers = {
            'Accept': 'application/json',
            'Authorization': 'Bearer o8NRU9N9v8VAcMaY32og'
        }
        axios.get("https://the-one-api.dev/v2/quote", {headers: headers})
        .then(res =>{
            const quotes = res.data
            const quote =  quotes.docs[Math.floor(Math.random() * quotes.docs.length)];
            const realquote = quote.dialog;
            this.setState({realquote});
            console.log(realquote)
        })
       

        this.setState({
        })

        if(this.props.params.id){
            const res = await axios.get('https://dndbackapi.onrender.com/chars/' + this.props.params.id);
            this.setState({
               _id: this.props.params.id,

               nombre: res.data.nombre,
               clase: res.data.clase,
               raza: res.data.raza,
               frase: res.data.frase,

            fuerza: res.data.fuerza,
            destreza: res.data.destreza,
            constitucion: res.data.constitucion,
            inteligencia: res.data.inteligencia,
            sabiduria: res.data.sabiduria,
            carisma: res.data.carisma,

            editing: true,
            _id: this.props.params.id


            })
        }
    }



    onSubmit = async (e) => {
        e.preventDefault();
        const newChar ={
           

            nombre: this.state.nombre,
            clase: this.state.clase,
            raza: this.state.raza,
            frase: this.state.frase,

            fuerza: this.state.fuerza,
            destreza: this.state.destreza,
            constitucion: this.state.constitucion,
            inteligencia: this.state.inteligencia,
            sabiduria: this.state.sabiduria,
            carisma: this.state.carisma,


        }
        if(this.state.editing){
            await axios.put('https://dndbackapi.onrender.com/chars' + this.state._id, newChar)
        }else{
            await axios.post('https://dndbackapi.onrender.com/chars', newChar);
        }

        window.location.href = '/';
    }
    onInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
           
        })
    }
    onChangeDate = date => {
        this.setState({date})
    }

    render(){
    
        
        return(
            <div className="col-md-6 offset-md-3">
                 <div className="card card-body" id="cardchar">
                    <h4 id="titulo">Aqui inicia tu destino</h4>
                    <div className="form-group">

                    {/* Nombre */}
                    <label id="nombrechar">Nombre: </label>
                    <input 
                            type="text" 
                            className="" 
                            placeholder="Tu nombre, lord" 
                            name="nombre"
                            onChange={this.onInputChange}
                            value={this.state.nombre}
                            id="inputchar" 
                            required/> 

                    {/* Clase */}
                    <label id="nombrechar">Clase: </label>
                    <select
                    className="form-control"
                    name="clase"
                    onChange={this.onInputChange}
                    value={this.state.clase}
                    id="selectchar" 
                    >
                        <option defaultChecked>Guerrero</option>
                        <option>Mago</option>
                        <option>Bribon</option>



                    </select>
                    <br></br>
                     {/* Raza */}
                     <label id="nombrechar">Raza: </label>
                    <select
                    className="form-control"
                    name="raza"
                    onChange={this.onInputChange}
                    value={this.state.raza}  
                    id="selectchar"                 
                    >
                        <option defaultChecked>Humano</option>
                        <option>Elfo</option>
                        <option>Enano</option>
                        <option>Mediano</option>
                    </select>
                </div>

            <div className="container">
                <div className="row" id="att1">
                        <div className="col-sm" id="divatributos"  >
                        Fuerza
                        <input  onChange={this.onInputChange} value={this.state.fuerza} type="number" id="atributos" name="fuerza" min="1" max="5"></input>
                        </div>
                        <div className="col-sm" id="divatributos">
                        Destreza
                        <input  onChange={this.onInputChange} value={this.state.destreza} type="number" id="atributos" name="destreza" min="1" max="5"></input>
                        </div>
                        <div className="col-sm" id="divatributos">
                        Constitucion
                        <input  onChange={this.onInputChange} value={this.state.constitucion} type="number" id="atributos" name="constitucion" min="1" max="5"></input>
                        </div>
                </div>
            </div>

            <div className="container">
                <div className="row" id="att2">
                        <div className="col-sm" id="divatributos">
                        Inteligencia
                        <input  onChange={this.onInputChange} value={this.state.inteligencia} type="number" id="atributos" name="inteligencia" min="1" max="5"></input>
                        </div>
                        <div className="col-sm" id="divatributos">
                        Sabiduria
                        <input  onChange={this.onInputChange} value={this.state.sabiduria} type="number" id="atributos" name="sabiduria" min="1" max="5"></input>
                        </div>
                        <div className="col-sm" id="divatributos" >
                        Carisma
                        <input  onChange={this.onInputChange} value={this.state.carisma} type="number" id="atributos" name="carisma" min="1" max="5"></input>
                        </div>
                </div>
            </div>

            <div className="container">
                <div className='row'>
                <div className="form-group">
                    {/* Frase */}
                    <label id="frasechar">Tu forntuna dicta lo siguiente...</label>

                    <textarea 
                            type="text" 
                            className=""  
                            name="frase"
                            onChange={this.onInputChange}
                            value={this.state.realquote}
                            id="frasearea"
                            required/>
                            </div>
                </div>
            </div>
                <div>
                <form onSubmit={this.onSubmit}>
                        <button type="submit" className="" id="myButton">
                            ¿Seras capaz de unirlos? 
                        </button>
                    </form>

                          {/* ejemplo de funcion */}
                          {/*
                        <button className="btn btn-primary" 
                        onClick={() => this.setState({val: this.state.val + 1})}>
                            {this.state.val}
                        </button> */}

                        <button className="btn btn-secondary btn-sm" id="myButton"
                        onClick={() => this.setState({
                            fuerza: Math.floor(Math.random() * (18 - 1 + 1) + 1),
                            destreza: Math.floor(Math.random() * (18 - 1 + 1) + 1),
                            constitucion: Math.floor(Math.random() * (18 - 1 + 1) + 1),
                            inteligencia: Math.floor(Math.random() * (18 - 1 + 1) + 1),
                            sabiduria: Math.floor(Math.random() * (18 - 1 + 1) + 1),
                            carisma: Math.floor(Math.random() * (18 - 1 + 1) + 1),
                            frase: this.componentDidMount()
                           
                            })}>
                            No me gusta mi destino! 
                        </button>
                        </div>
            </div>
        </div>
        )
    }
}


export default withParams(CreateChar);