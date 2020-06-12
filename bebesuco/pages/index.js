
import NavBar from './GlobalComponents/navBar'
import Header from './GlobalComponents/header'
import Footer from './GlobalComponents/footer'





function HomePage() {
  return (
  <div>
    <Header headerStyle={{height: "20%"}} navBarStyle ={{height: "200px"}} imageStyle = {{ height: "100%", width: "100%", resizeMode: 'stretch', position: 'absolute' }} nav={NavBar}></Header>
    <Footer footerStyle={{backgroundColor: "lightBlue"}}></Footer>
    
  </div> 
    )
   
}

export default HomePage