
import Navbar from 'react-bootstrap/Navbar'
import Dropdown from 'react-bootstrap/dropdown'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


function header(props){
    const NavBarDropDown = props.nav;
    return(
       
           
            <div style={{"background-color": "#2e3133"}} >
                    <Navbar style={{height: "200px"}} sticky="top"  >
                        <Navbar.Brand href="#home">
                        <img
                             alt=""
                            //  src={{logo}}
                        />{' '}
                        Bebesuco
                        </Navbar.Brand>
                    </Navbar>
            
                <NavBarDropDown></NavBarDropDown>
          
       
  </div>
  
  
    )
    
}
export default header;