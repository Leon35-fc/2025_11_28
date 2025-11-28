import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.min.css'
import '../node_modules/react-router-dom'
import { Container, Row, Col } from 'react-bootstrap';
import MyNavbar from './components/MyNavbar'
import SelectCity from './components/SelectCity'
import CityMeteo from './components/CityMeteo'

function App() {

  return (
    <>
      <MyNavbar/>
      <Container>
        <Row>
          <Col xs={12} className=''>
            <SelectCity/>
          </Col>
          <Col xs={12} className=''>
            <CityMeteo/>
          </Col>
        </Row>
      </Container>
      <h3 className='text-center mt-3'>L'App sta funzionando</h3>

    </>
  )
}

export default App
