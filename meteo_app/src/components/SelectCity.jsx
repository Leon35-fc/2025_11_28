import {Form} from 'react-bootstrap'

function SelectCity(props) {

  // console.log('SelectCity: in entrata',props.city.target.value)
  
  const cityChange = (e) => {
    const newValue = e.target.value
    props.setCity(newValue)
    console.log("cityChange", newValue)
  }

  const handleSubmit= (e)=> {
    e.preventDefault()
    cityChange(e)
  }

  console.log('SelectCity; dopo funzione cityChange', props.city)
   
  return (
    <>
      <Form.Select className='object-fit-contain mt-3' value={props.city} onChange={cityChange}>
        <option>Seleziona una città</option>
        <option value="Bologna">Bologna</option>
        <option value="Catania">Catania</option>
        <option value="Milano">Milano</option>
        <option value="Napoli">Napoli</option>
        <option value="Roma">Roma</option>
      </Form.Select>
      <Form onSubmit={handleSubmit}>
       <Form.Control
        type="text"
        id="city"
        value={props.city}
        onChange={cityChange}
        // onSubmit={props.setCity}
        placeholder="Inserisci il nome di una città"
      />
      </Form>
    </>
  );
}
export default SelectCity;
