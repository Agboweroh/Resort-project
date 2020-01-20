import React, { Component } from 'react'
import defaultBcg from '../images/room-1.jpeg'
import Hero from '../components/Hero'
import StyledHero from '../components/StyledHero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import {RoomContext} from '../Context'

export class SingleRoom extends Component {
    constructor(props){
        super(props)

        this.state = {
            slug : this.props.match.params.slug,
            defaultBcg 
        }
       

    }
    static contextType = RoomContext;
   
    render() {
        const {getRoom} = this.context;
        const room = getRoom(this.state.slug);
        if(!room){
            return (
            <div className="error">
            <h3>no such room found!...</h3>
            <Link to='/rooms' className="btn-primary">
                Kindly return back to rooms
            </Link>
            
            </div>
            );
        
        }
        const {name , description, price, pets, images,breakfast,size, capacity, extras}= room;

        return (
        <StyledHero img={images[0] || this.state.defaultBcg}>
            <Banner title ={`${name} room`}>
            
                <Link to='/rooms' className='btn-primary'>
                
                Back to rooms
                
                </Link>
            
            </Banner>
        
        </StyledHero>
        );
            
        
    }
}

export default SingleRoom
