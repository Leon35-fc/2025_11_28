import {Form} from 'react-bootstrap'

function SelectCity() {
  return (
    <>
      <Form.Select className='object-fit-contain mt-3'>
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
