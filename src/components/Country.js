import React,{useState,useEffect} from 'react'
import {useParams, Link} from 'react-router-dom'
import '../styles/country.css'

export default function Country(props) {
        
    const {nombre} = useParams()
    const [pais,setPais] = useState([])

    useEffect(() => {
        const obtenerDatos = async () => {
            const data = await fetch(`https://restcountries.eu/rest/v2/name/${nombre}`)
            const p = await data.json()
            setPais(p[0])
        }      
        obtenerDatos()
    },[nombre])
    
    let itemCurrencies;
    if (pais.currencies){
        itemCurrencies = pais.currencies.map(item => item.name)
    }
    let itemLanguages;
    if (pais.languages){
        itemLanguages = pais.languages.map(item => item.name)
    }
    let itemBorders = [];
    if (pais.borders){
        itemBorders = pais.borders.map(item => item)
    }

    return (
        <div className="container">
            <div className="container-body">                
                <Link to="/" className="btn-back">Back</Link>                
                <div className="container-country">
                    <div className="flag">
                        <img src={pais.flag} alt=""/>       
                    </div>
                    <div className="info">
                        <h2>{pais.name}</h2>
                        <div className="info-body">
                            <div>
                                <p><strong>Native Name: </strong>{pais.nativeName}</p>
                                <p><strong>Population: </strong>{pais.population}</p>
                                <p><strong>Region: </strong>{pais.region}</p>
                                <p><strong>Sub Region: </strong>{pais.subregion}</p>
                                <p><strong>Capital: </strong>{pais.capital}</p>
                            </div>
                            <div>
                                <p><strong>Top Level Domain: </strong>{pais.topLevelDomain}</p>
                                <p><strong>Currencies: </strong>{itemCurrencies}</p>
                                <p><strong>Languages: </strong>{itemLanguages}</p>
                            </div>                        
                        </div>
                        <div className="info-footer">
                            <p><strong>Border Countries:</strong></p>
                            {       
                                                                                      
                                itemBorders.map(item => 
                                    <div                                         
                                        key={item} 
                                        className="border-country"
                                        >
                                            {item }
                                    </div>
                                )
                            }
                            
                        </div>
                    </div>
                </div>  
            </div>          
        </div>
    )
}
