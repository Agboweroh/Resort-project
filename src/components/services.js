import React, { Component } from 'react'
import {FaCocktail,FaHiking,FaShuttleVan, FaBeer} from 'react-icons/fa'
import Title from './Title'

export class services extends Component {
    state = {
        services:[
            {
                icon :<FaCocktail/>,
                title : 'Free Cocktail',
                info : "Lorem ipsum, dolor sit amet consectetur adipisicing elit  Porro ea tenetur facere eveniet nam aut magni fugiat!."
                 
            },
            {
                icon :<FaHiking/>,
                title : 'Endless Hiking',
                info : "Lorem ipsum, dolor sit amet consectetur adipisicing elit  Porro ea tenetur facere eveniet nam aut magni fugiat!."
                 
            },
            {
                icon :<FaShuttleVan/>,
                title : 'Free Shuttle',
                info : "Lorem ipsum, dolor sit amet consectetur adipisicing elit  Porro ea tenetur facere eveniet nam aut magni fugiat!."
                 
            },
            {
                icon :<FaBeer/>,
                title : 'Strongest beer',
                info : "Lorem ipsum, dolor sit amet consectetur adipisicing elit  Porro ea tenetur facere eveniet nam aut magni fugiat!."
                 
            }
        

            
        ]
        
    }

    render() {
        return (
            <section className="services">
                <Title title="services"/>
        <div className="services-center">
            {this.state.services.map((item,index)=>{
                return(
                    <article key ={index} className="service">
                    <span>{item.icon}</span>
                    <h6>{item.title}</h6>
                    <p>{item.info}</p>


                    
                    </article>
                )
            })}
        </div>
                 </section>
        )
    }
}

export default services
