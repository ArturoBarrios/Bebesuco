import Carousel from 'react-bootstrap/Carousel'
import ProductCards from './cardsComponent'
import s from '../_app'

import { ButtonBack,ButtonFirst,ButtonLast,ButtonNext,ButtonPlay,CarouselProvider,DotGroup,ImageWithZoom,Slide,Slider, } from 'pure-react-carousel';



 class ProductCarousel extends React.Component{
    constructor(props){
        super(props)
        this.state = {slide: 0}
        this.state = {setSlide: 0}
        
    
    }
    render(){
        return (
            <div style={{width: "100%"}}>
                <React.Fragment>
                    <div>
                        {/* <label htmlFor="currentSlideEx9">
                        Test switching the default starting slide (currentSlide prop).
                        </label> */}
                        {/* <select id="currentSlideEx9" onChange={ev => setSlide(Number(ev.target.value))}>
                        <option value="0" defaultValue={this.state.slide === 0}>
                            0
                        </option>
                        <option value="1" defaultValue={this.state.slide === 1}>
                            1
                        </option>
                        <option value="2" defaultValue={this.state.slide === 2}>
                            2
                        </option>
                        <option value="3" defaultValue={this.state.slide === 3}>
                            3
                        </option>
                        <option value="4" defaultValue={this.state.slide === 4}>
                            4
                        </option>
                        <option value="5" defaultValue={this.state.slide === 5}>
                            5
                        </option>
                        </select> */}
                    </div>
                    <CarouselProvider
                        visibleSlides={2}
                        totalSlides={6}
                        step={2}
                        naturalSlideWidth={600}
                        naturalSlideHeight={500}
                        hasMasterSpinner
                        currentSlide={this.state.slide}
                        isPlaying
                    >
                        <h2 className={s.headline}>Horizontal Carousel Auto Play</h2>
                        <Slider className={s.slider}>
                        <Slide index={0}>
                            <ImageWithZoom src="crib1.png" />
                        </Slide>
                        <Slide index={1}>
                            <ImageWithZoom src="crib2.jpg" />
                        </Slide>
                        <Slide index={2}>
                            <ImageWithZoom src="baby_chair.jpeg" />
                        </Slide>
                        <Slide index={3}>
                            <ImageWithZoom src="baby_shirt1.jpg" />
                        </Slide>
                        <Slide index={4}>
                            <ImageWithZoom src="crib1.png" />
                        </Slide>
                        <Slide index={5}>
                            <ImageWithZoom src="crib2.jpg" />
                        </Slide>
                        </Slider>
                        <ButtonPlay childrenPlaying="Pause" childrenPaused="Play" />
                        <ButtonFirst>First</ButtonFirst>
                        <ButtonBack>Back</ButtonBack>
                        <ButtonNext>Next</ButtonNext>
                        <ButtonLast>Last</ButtonLast>
                        <DotGroup />
                    </CarouselProvider>
                    </React.Fragment>
                </div>
                
            
        )
      }
}
export default ProductCarousel;
