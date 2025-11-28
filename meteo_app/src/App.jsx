import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.min.css'
import '../node_modules/react-router-dom'
import { Component, } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import MyNavbar from './components/MyNavbar'
import SelectCity from './components/SelectCity'
import CityMeteo from './components/CityMeteo'


class App extends Component {

  state = {
    city:''
  }

  setCity = ((city) => {
    this.setState({city})
    console.log('Log di APP.jsx', city);
  })
  
  render() {
    return (
      <>
        <MyNavbar/>
        <Container>
          <Row className='d-flex justify-content-center mt-5'>
            <Col xs={12} md={10} lg={4} className=''>
              <SelectCity city={this.state.city} setCity={this.setCity}/>
            </Col>
          </Row>
          <Row className='d-flex justify-content-center mt-5'>
            <Col xs={12} md={10} lg={4}>
              {this.state.city && <CityMeteo city={this.state.city} setCity={this.setCity}/>}
            </Col>
          </Row>
        </Container>
        {/* <h3 className='text-center mt-3'>L'App sta funzionando</h3> */}

      </>
    )
  }
}

export default App
