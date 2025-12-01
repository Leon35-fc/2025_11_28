import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.min.css'
import '../node_modules/react-router-dom'
import { Component, } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import MyNavbar from './components/MyNavbar'
import SelectCity from './components/SelectCity'
import CityMeteo from './components/CityMeteo'
import Details from './components/Details'
import { BrowserRouter, Route, Routes } from '../node_modules/react-router-dom';


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
            <Col xs={11} md={10} lg={4} className=''>
              <SelectCity city={this.state.city} setCity={this.setCity}/>
            </Col>
          </Row>
          <Row className='d-flex justify-content-center mt-5'>
            <Col xs={11} md={10} lg={4}>
            <BrowserRouter>
              <Routes>
                {this.state.city && <Route path='/' element={<CityMeteo city={this.state.city} setCity={this.setCity}/>}/>}
                {this.state.city && <Route path='/details' element={<Details city={this.state.city} setCity={this.setCity}/>}/>}
              </Routes>
            </BrowserRouter>
            </Col>
          </Row>
        </Container>
        {/* <h3 className='text-center mt-3'>L'App sta funzionando</h3> */}

      </>
    )
  }
}

export default App
