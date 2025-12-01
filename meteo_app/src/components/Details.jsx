import { useState, useEffect } from "react"
import { Card, CardText, Spinner } from "react-bootstrap"


function Details (props) {

    const [meteoCity, setMeteoCity] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${props.city},IT&appid=805d5542481df6408e63911f189b65b8&lang=it&units=metric`
        
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

        //RESTITUISCE L'ORARIO DELL'ALBA
        const sunrise = new Date(meteoCity.sys.sunrise * 1000).toLocaleTimeString()
        console.log('SUNRISE',sunrise)
        //RESTITUISCE L'ORARIO DEL TRAMONTO
        const sunset = new Date(meteoCity.sys.sunset * 1000).toLocaleTimeString()
        console.log('SUNSET',sunset)


    return(
        <>
            <h3 className="text-center mb-3">Dettagli meteo della città</h3>
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
                <CardText>
                    <span>Temperatura percepita:</span> {meteoCity.main.feels_like}
                </CardText>
                <Card.Text>
                    <span>Temperatura massima:</span> {meteoCity.main.temp_max}° C
                </Card.Text>
                <Card.Text>
                    <span>Temperatura minima:</span> {meteoCity.main.temp_min}° C
                </Card.Text>
                <Card.Text>
                    <span>Umidità:</span> {meteoCity.main.humidity}%
                </Card.Text>
                <CardText>
                    {/* <span>Visibilità:</span> {meteoCity.visibility.toLocaleString('it-IT')} m */}
                    <span>Visibilità:</span> {meteoCity.visibility >= 1000 ? (meteoCity.visibility / 1000 + ' Km') : meteoCity.visibility + ' m' }
                </CardText>
                <CardText>
                    <span>Velocità del vento:</span> {meteoCity.wind.speed} m/s
                </CardText>
                <CardText>
                    <span>Nubi:</span> {meteoCity.clouds.all}%
                </CardText>
                <CardText>
                    <span>Precipitazioni:</span> {meteoCity.rain}
                </CardText>
                <CardText>
                    <span>Alba:</span> {sunrise}
                </CardText>
                <CardText>
                    <span>Tramonto:</span> {sunset}
                </CardText>


                {/* <Button variant="primary">Details</Button> */}
            </Card.Body>
            </Card>
        </>
    )
}

export default Details