
import NavBar from './GlobalComponents/navBar'
import Header from './GlobalComponents/header'
import Footer from './GlobalComponents/footer'
import Body from './GlobalComponents/body'





export default function Home() {
  return (
  // <div>
  //   <Header headerStyle={{height: "20%"}} navBarStyle ={{height: "200px"}} imageStyle = {{ height: "100%", width: "100%", resizeMode: 'stretch', position: 'absolute' }} nav={NavBar}></Header>
  //   <Footer footerStyle={{backgroundColor: "lightBlue"}}></Footer>
    
  // </div> 
  <div >

    <div className="container"  >
      <Header  navBarStyle ={{height: "200px", width: "50%"}} imageStyle = {{ height: "100%", width:"100%",  resizeMode: 'stretch' }} nav={NavBar}></Header>
    </div>
    <div className="container">
        <Body></Body>
      </div>
     
    <div className="container">
        <Footer footerStyle={{width: "100%", height: "300px" ,backgroundColor: "lightBlue"}}></Footer>
    </div>

      <style jsx>{`
      .container {
        border: solid 1px #ff0000;
        zoom: 1; /* IE6&7 */
        //  min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 100%

       
    }
        .container:before,
        .container:after {
            content: "";
            display: table;
        }
        
        .container:after {
            clear: both;
        }
        

      `}</style>

      <style jsx global>{`
        html,
      

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
    )
   
}

