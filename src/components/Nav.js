import React from 'react'
import '../styles/nav.css'
import {useState} from 'react'

export default function Nav(props) {

    const [darkMode, setDarkMode] = useState(true)

    const onDarkMode= () => {
        setDarkMode(!darkMode)
        console.log(darkMode);
        props.darkMode(darkMode)
    }    
    return (
        <div className="container-nav">
            <nav>
                <div>
                    <h3>Where in the world?</h3>
                </div>
                <div>
                    <div className="btn-darkMode" onClick={(onDarkMode)}>
                        Dark Mode
                    </div>
                </div>
            </nav>
        </div>
    )
}
