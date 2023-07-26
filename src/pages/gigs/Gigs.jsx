import React, { useState } from 'react'
import {gigs} from "../../data";
import "./Gigs.scss"
import Gigcard from '../../components/gigCard/Gigcard';
 const Gigs = () => {
  const [sort, setSort] = useState("sales")
  const [open,setOpen] = useState(false);

  const reSort =(type) =>{
    setSort(type);
    setOpen(false);
  }
  return (
    <div className='gigs'>
      <div className="container">
        <div className="breadcrumbs">FIVERR &Graphics & design</div>
        <h1>AI Artisst</h1>
        <p>Explore the boundaries of art and technology with Fiverr`s AI artist</p>
        <div className="menu">
          <div className="left">
            <span>Budget</span>
            <input type="text" placeholder='min' />
            <input type="text" placeholder='max' />
            <button>Apply</button>
          </div>
          <div className="right">
            <span className='sortBy'>SortBy:</span>
            <span className='sortType'>{sort === "sales" ? "Best Selling" : "Newest"}</span>
            <img src="./img/down.png" alt="" onClick={()=>setOpen(!open)} />
           {open && <div className="rightMenu">
            { sort === "sales"? <span onClick={()=>reSort("createdAt")}>Newest</span> 
            :
              <span onClick={()=>reSort("sales")}>Best Selling</span>}
            </div>}
          </div>
        </div>
        <div className="cards">
          {gigs.map(gig=>(
            <Gigcard key={gig.id} item={gig}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Gigs