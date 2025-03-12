import React from 'react'
import Container from './Container'
import proLogis from "../assets/prologis.png"
import tower from "../assets/tower.png"
import equinix from "../assets/equinix.png"
import reality from "../assets/realty.png"

function CompaniesLogo() {
  return (
    <div>
        <Container>
            <div className='wrapper mt-10'>
                <img src={proLogis} alt="" className='item item1 mt-3'/>
                <img src={tower} alt="" className='item item2'/>
                <img src={equinix} alt="" className='item item3 mt-3'/>
                <img src={reality} alt="" className='item item4'/>
                <img src={proLogis} alt="" className='item item5 mt-3'/>
                <img src={tower} alt="" className='item item6'/>
                <img src={equinix} alt="" className='item item7 mt-3'/>
                <img src={reality} alt="" className='item item8'/>
            </div>
        </Container>
    </div>
  )
}

export default CompaniesLogo