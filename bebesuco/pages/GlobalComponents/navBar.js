import Nav from 'react-bootstrap/Nav';
import DropDown from './dropdown';
import NavDropdown from 'react-bootstrap/NavDropdown';


function navBar(props) {
    const handleSelect = (eventKey) => alert(`selected ${eventKey}`);

    return (
        <Nav variant="pills" activeKey="1" onSelect={handleSelect}>
        <Nav.Item>
            <Nav.Link eventKey="1" href="#/home">
            Bienvenidos
            </Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="2" title="Item">
            Contacto
            </Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="3">
            Sucursales
            </Nav.Link>
        </Nav.Item>
        <DropDown ></DropDown>
        </Nav>
    );
}

export default navBar;