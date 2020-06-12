import Navbar from 'react-bootstrap/Navbar'

function footer(props){
    return(
        <Navbar style={props.footerStyle}>
            <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
            <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                    Signed in as: <a href="#login">Mark Otto</a>
                    </Navbar.Text>
                </Navbar.Collapse>
        </Navbar>
    )
}

export default footer;