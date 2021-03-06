import Head from 'next/head'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'

        function cards(props){
            return(
                <div>
                    <main>
                      

                        <CardDeck>
                            <Card>
                                <Card.Img style = {{"height": 200}} variant="top" src="crib1.png" />
                                <Card.Body>
                                <Card.Title>Crib</Card.Title>
                                <Card.Text>
                                    $29.99
                                </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <Card.Img style={{"height": 200}} variant="top" src="logo.png" />
                                <Card.Body>
                                <Card.Title>Predictor</Card.Title>
                                <Card.Text>
                                    This card has supporting text below as a natural lead-in to additional
                                    content.{' '}
                                </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <Card.Img style={{"height": 200}} variant="top" src="vercel.svg" />
                                <Card.Body>
                                <Card.Title>Updates</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This card has even longer content than the first to
                                    show that equal height action.
                                </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                                </Card.Footer>
                            </Card>
                        </CardDeck>
                        
                    </main>
                    
                </div> 
            )
            
        }


export default cards;
