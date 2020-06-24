
import Navbar from 'react-bootstrap/Navbar'
import Dropdown from 'react-bootstrap/dropdown'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'



function header(props){
    const NavBarDropDown = props.nav;
    return(
       
           
            <div style={{width: "100%"}}>
                {/* <div > */}
                
                       
                {/* </div> */}
                    <Navbar style={props.navBarStyle} sticky="top"  >
                    <img
                        alt=""
                        src="logo.png"
                        style={props.imageStyle}
                        />
                        <Navbar.Brand href="#home">
                        
                    
                        </Navbar.Brand>
                    </Navbar>
            
                <NavBarDropDown></NavBarDropDown>
          
       
  </div>
  
  
    )
    
}
export default header;