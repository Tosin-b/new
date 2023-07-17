import React from 'react'
import "./home.scss"
import Feature from '../../components/featured/Feature'
import TrustedBy from '../../components/trustedBy/TrustedBy'
import Slide from '../../components/slide/Slide';
import {cards} from "../../data"
import CatCard from '../../components/catCard/CatCard';
 const home = () => {
  return (
    <div className='home'>
      <Feature/>
      <TrustedBy/>
      <Slide >
        {cards.map((card) => (
          <CatCard key={card.id} card={card} />
        ))}
      </Slide>
    </div>
  )
}
export default home
