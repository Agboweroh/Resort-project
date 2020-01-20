import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import Services from '../components/services'
import FeaturedRoom from '../components/FeaturedRoom'
import SingleRoom from '../pages/SingleRoom'

import {useHistory} from 'react-router-dom'
//import {Link} from 'react-router-dom'

export default function Home() {
    let history = useHistory();
    const handleClick = ()=>{
        history.push('/rooms');

    }

    return (
    <>
    <Hero>
    <Banner title= "Luxurious rooms" subtitle = "deluxe rooms starting from $300"  >
    <button type="button" className="btn-primary" onClick={handleClick}>
      Go home
    </button>

    </Banner>
    
    </Hero>
    <Services/>
    <FeaturedRoom/>
    
    </>

    )
        
   
}
