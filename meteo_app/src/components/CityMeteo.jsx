import { useState, useEffect } from "react"
import { Card, Button, Spinner } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

// LINK ORIGINALE CON API KEY, CONSERVATA IN CASO DI EMERGENZA
// const URL = 'https://api.openweathermap.org/data/2.5/weather?q=Atlanta&appid=805d5542481df6408e63911f189b65b8&lang=it&units=metric'

function CityMeteo(props) {
    console.log ('PROPS DA SELECTCITY', props.city)
    const [meteoCity, setMeteoCity] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const navigate = useNavigate()

    if (props.city !== 'Seleziona una città') {
        props.city
    } else {
        props.setCity('')
    }
    
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=805d5542481df6408e63911f189b65b8&lang=it&units=metric`
        
   const meteoFetch = () => {
        fetch(URL)
        .then((response) => {
            if(response.ok) {                
                return response.json()
            } else {
                throw new Error('Errore nel recupero delle informazioni meteo')
            }})
            .then((meteo) => {
                console.log('METEO FETCH', meteo);
                setMeteoCity(meteo)
                setLoading(false)
                // CONTROLLO CHE
                console.log('meteoCity', meteoCity.name);
                // return meteoCity
            })
            .catch((err) => {
            console.log('Errore', err)
            setError(err.message)
            setLoading(false)
            })
            
        }
        
        // eslint-disable-next-line react-hooks/exhaustive-deps
        useEffect(() => {meteoFetch()}, [props.city])
        
        console.log(meteoCity);

        if (loading) return (<Spinner animation="border" role="status">
                                <span className="visually-hidden">Loading...</span>
                             </Spinner>)
        if (error) return <p>Errore: {error}</p>

    return(
        <>
            <h3 className="text-center mb-2">Meteo della città</h3>
            <Card className="bg-info-subtle border border-3 rounded rounded-4 border-primary-subtle">
            <Card.Body>
                <Card.Title className="fs-3 mb-3">{meteoCity.name}</Card.Title>
                <hr/>
                <Card.Text>
                    <span>Condizioni:</span> {meteoCity.weather[0].description}
                </Card.Text>
                <Card.Text>
                    <span>Temperatura:</span> {meteoCity.main.temp}° C
                </Card.Text>
                <Card.Text>
                    <span>Umidità:</span> {meteoCity.main.humidity}%
                </Card.Text>
                <Card.Text>
                    <span>Temperatura massima:</span> {meteoCity.main.temp_max}° C
                </Card.Text>
                <Card.Text>
                    <span>Temperatura minima:</span> {meteoCity.main.temp_min}° C
                </Card.Text>
                <Button variant="primary" onClick={()=> navigate('/details')}>Details</Button>
            </Card.Body>
            </Card>
 
        </>
    )
}

export default CityMeteo