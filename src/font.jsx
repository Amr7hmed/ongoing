import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressCard, faAirFreshener } from '@fortawesome/free-solid-svg-icons'
class FontAwesomeIcons extends React.Component {  
 
    render(){
        return(
            <div>
                <h6><FontAwesomeIcon icon={faAddressCard} color="blue" /> Font Awesome Address Icon</h6>
                
                <h6><FontAwesomeIcon icon={faAirFreshener} color="red" /> Font Awesome Solid Icon</h6>
            </div>
        )
    }
     
}  
   
export default FontAwesomeIcons;