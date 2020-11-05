import React, {useState} from 'react'
import '../styles/header.css'

export default function Header(props) {

    const [dropdown, setdropdown] = useState(false)

    const busqueda = e => {      
        props.callback(e.target.value)        
    }

    const cambiarRegion = (region) => {
        props.region(region)
    }

    return (
        <div className="container-header">
            <div>
                <input 
                    type="text"
                    className="buscador"
                    placeholder="Search for Country..."
                    value={EventTarget.value}
                    onChange={busqueda}/>                    
            </div>
            <div className={`${dropdown?'dropdown open':'dropdown'}`} onClick={()=> setdropdown(!dropdown)}>
                Filter by Region
                <ul>
                    <li onClick={()=>cambiarRegion('')}>Todos</li>
                    <li onClick={()=>cambiarRegion('Africa')}>Africa</li>
                    <li onClick={()=>cambiarRegion('Americas')}>Americas</li>
                    <li onClick={()=>cambiarRegion('Asia')}>Asia</li>
                    <li onClick={()=>cambiarRegion('Europe')}>Europe</li>
                    <li onClick={()=>cambiarRegion('Oceania')}>Oceania</li>
                </ul>
            </div>
        </div>
    )
}
