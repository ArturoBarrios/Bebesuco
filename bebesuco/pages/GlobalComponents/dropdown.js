import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';


function navBar(props) {
    // const handleSelect = (eventKey) => alert(`selected ${eventKey}`);

    return (
        <Nav variant="pills" activeKey="1" onSelect={props.handleSelect}>
            <NavDropdown title="Productos" id="nav-dropdown">
                <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
            </NavDropdown>
        </Nav>
    );
}

export default navBar;