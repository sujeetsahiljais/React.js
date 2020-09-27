import React, { Component } from 'react';
import './Sujeetavatar.css';
import Sujeetlist from './Sujeetlist';
import 'tachyons';

    class Sujeetavatar extends Component {

        constructor(){
            super();
            this.state ={
                name: "Welcome to Sujeet World"
            }
        }

        namechange(){
            this.setState({
                name: "Subscribe to Sujeet Technical Channel"
            } )
        }
        
        render() {

            const sujeetlistarray =[
                {
                    id:1,
                    name: "Sujeet",
                    work: "Web Developer",

                },

                {
                    id:2,
                    name: "Sahil",
                    work: "Software Developer",
                },
                {
                    id:3,
                    name: "Sanskar",
                    work: "Android Developer",
                },
                {
                    id:4,
                    name: "Jaiswal",
                    work: "Game Developer",
                },
            ]
             const arraysujeetcard = sujeetlistarray.map((sujeetcard, i) =>{
                 return <Sujeetlist key={i} id={sujeetlistarray[i].name} 
                                   name={sujeetlistarray[i].name}
                                   work={sujeetlistarray[i].work} />
             })
            return ( 
                <div className="mainpage">
                    <h1> {this.state.name} </h1>
                         {arraysujeetcard}
                       <button onClick= {()=> this.namechange()}> Subscribe Me </button>
                       </div>
                     )

        }
    }    


export default Sujeetavatar;
