import {Form} from 'react-bootstrap'

function SelectCity(props) {

  console.log('CONSOLE',props.city);
  

  const cityChange = (e) => {
    props.setCity(e.target.value)
  }

  console.log('SETCITY', cityChange);
   
  return (
    <>
      <h2>Seleziona una città</h2>
      <Form.Select className='object-fit-contain mt-3' value={props.city} onChange={cityChange}>
        <option value="Berlino">Berlino</option>
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
