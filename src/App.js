import './App.css';
import {useEffect,useState} from 'react'
import Nav from './components/Nav'
import Header from './components/Header'
import Card from './components/Card'
import Country from './components/Country'
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {

  const [paises, setPaises] = useState([])
  const [paisesFiltrados, setPaisesFiltrados] = useState([])
  const [region, setRegion] = useState('')
  const [darkMode, setDarkMode] = useState(false)
  const mainClass = darkMode ? 'darkmode' : 'lightmode'

  const getapi = () => {
    fetch('https://restcountries.eu/rest/v2/all')
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      setPaises(data)
      setPaisesFiltrados(data)
      console.log(data.length);
    })
    .catch(() => {
      console.log('Error Fetch');
    })
  }

  const filtroBusqueda = resinput => {  
    setPaisesFiltrados(paises.filter(pais => pais.name.toLowerCase().includes(resinput.toLowerCase())))
  }

  const paisPorRegion = resRegion => {
    setRegion(resRegion)
    console.log(region)
  }

  useEffect(() => {
    getapi()    
  },[])

  const filtrado = () => {
    let p = []
    if(region === ''){
      p = paisesFiltrados.map((pais) => {
        return(
          <Card key={pais.name}
            name={pais.name}
            population={pais.population}
            region={pais.region}
            capital={pais.capital}
            flag={pais.flag}/>
        )
      })
    }else{
      p = paisesFiltrados.filter(pais => pais.region === region).map(pais => {
        return(
          <Card key={pais.name}
            name={pais.name}
            population={pais.population}
            region={pais.region}
            capital={pais.capital}
            flag={pais.flag}/>
        )
      })
    }
    return p
  }

  const onDarkMode = value => {
    setDarkMode(value)       
  }

  return (
    <main className={mainClass}>
    <Router>
      <div>
        <Nav darkMode={onDarkMode} />
        <Switch>
          <Route path="/" exact>
            <div>
              <Header callback={filtroBusqueda} region={paisPorRegion}/>
              <div className="card-list">
                {
                  filtrado()
                }
              </div>
            </div>
          </Route>
          <Route path="/country/:nombre">
            <Country/>
          </Route>
        </Switch>
      </div>
    </Router>
    </main>
    
  );
}

export default App;
