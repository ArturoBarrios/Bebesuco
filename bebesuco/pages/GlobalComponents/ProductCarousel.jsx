import Carousel from 'react-bootstrap/Carousel'
import ProductCards from './cardsComponent'
import ItemsCarousel from 'react-items-carousel';


 class ProductCarousel extends React.Component{
    constructor(props){
        super(props)
        this.state = {activeItemIndex: 1}
    
    }
    render(){
    return (
            
        <Carousel>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="background_image1.svg"
            alt="First slide"
            />
            <Carousel.Caption>
            <ProductCards ></ProductCards>
            {/* <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="background_image1.svg"
            alt="Third slide"
            />

            <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="background_image1.svg"
            alt="Third slide"
            />

            <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
    )
      }
}
export default ProductCarousel;
