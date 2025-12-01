import { Container, Nav, Navbar, NavDropdown} from 'react-bootstrap'

function MyNavbar() {

    return (
        <Navbar expand="lg" bg="primary" variant="light" className='px-4'>
        <Container className='p-0 ms-3'>
            <Navbar.Brand href="/"><i className="bi bi-cloud-sun-fill fs-2 me-3"></i>Meteo App</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="#">Link</Nav.Link>

                {/* AL MOMENTO QUESTA PARTE NON MI SERVE, SE NE PARLA QUANDO TROVERO UN'UTILITA */}

                {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                    Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                </NavDropdown> */}
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    );

}

export default MyNavbar