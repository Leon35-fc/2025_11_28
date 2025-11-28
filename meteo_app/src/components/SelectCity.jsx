import {Form} from 'react-bootstrap'

function SelectCity(props) {

  console.log('CONSOLE',props.city);
  

  const cityChange = (event) => {
    props.setCity(event.target.value)
    console.log("cityChange", event.target.value);
    
  }

  console.log('SETCITY', cityChange);
   
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
    </>
  );
}

export default SelectCity;
