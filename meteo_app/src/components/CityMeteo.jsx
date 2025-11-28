import { useEffect } from "react"

const URl = 'https://api.openweathermap.org/data/2.5/weather?q=Roma,IT&appid=805d5542481df6408e63911f189b65b8&lang=it&units=metric'

function CityMeteo() {

   const meteoFetch = () => {
        fetch(URL)
        .then((response) => {
            if(response.ok) {                
                return response.json()
            } else {
                throw new Error('Errore recupero informazioni meteo')
            }})
            .then((data) => {
                console.log('METEO FETCH', data);
                
            })
            .catch((err) => {
            console.log('Errore', err)
            })
            
        }
        // meteoFetch()
        useEffect(meteoFetch, [])

    return(
        <h3 className="text-center">Sono la fatch del meteo</h3>
    )
}

export default CityMeteo