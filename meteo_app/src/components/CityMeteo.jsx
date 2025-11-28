import { useState, useEffect } from "react"
import { Card, Button } from "react-bootstrap"

// LINK ORIGINALE CON API KEY, CONSERVATA IN CASO DI EMERGENZA
// const URL = 'https://api.openweathermap.org/data/2.5/weather?q=Roma,IT&appid=805d5542481df6408e63911f189b65b8&lang=it&units=metric'

function CityMeteo(props) {

    const [meteoCity, setMeteoCity] = useState({})

    
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${props.city},IT&appid=805d5542481df6408e63911f189b65b8&lang=it&units=metric`
        
   const meteoFetch = () => {
        fetch(URL)
        .then((response) => {
            if(response.ok) {                
                return response.json()
            } else {
                throw new Error('Errore recupero informazioni meteo')
            }})
            .then((meteo) => {
                console.log('METEO FETCH', meteo);
                setMeteoCity(meteo)
                // CONTROLLO CHE
                console.log('meteoCity', meteoCity.name);
                return meteoCity
            })
            .catch((err) => {
            console.log('Errore', err)
            })
            
        }

        useEffect(() => {meteoFetch()}, [URL])

    return(
        <>
            <h3 className="text-center">Dati meteo</h3>
            <Card>
            <Card.Body>
                <Card.Title className="mb-3">{meteoCity.name}</Card.Title>
                <Card.Text>
                    Precipitazioni: {meteoCity.weather[0].description}
                </Card.Text>
                <Card.Text>
                    Temperatura: {meteoCity.main.temp}
                </Card.Text>
                <Card.Text>
                    Umidità: {meteoCity.main.humidity}%
                </Card.Text>
                <Card.Text>
                    Temperatura massima: {meteoCity.main.temp_max}
                </Card.Text>
                <Card.Text>
                    Temperatura minima: {meteoCity.main.temp_min}
                </Card.Text>
                {/* <Button variant="primary">Details</Button> */}
            </Card.Body>
            </Card>
 
        </>
    )
}

export default CityMeteo