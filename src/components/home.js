import React, {Component} from 'react';
import Figure from "react-bootstrap/Figure";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.scss'
import Avengers from "./img/avengers.jpg"
import Ultron from "./img/ageofultron.jpg"
import Strange from "./img/doctor-strange.jpg"
import Homecoming from "./img/homecoming.jpg"
import Ragnarok from "./img/ragnarok.jpg"
import Panther from "./img/blackpanther.jpg"
import Infinity from "./img/infinity.jpg"
import Endgame from "./img/endgame.jpg"
import Far from "./img/farfromhome.jpg"

export class Home extends Component{
    render(){
        return(
            <Container fluid className="bg">
            <Container className='h2'>
                <h2>MARVEL MOVIES</h2>
              </Container>
              <Container>
                <Row>
                    <Col>
                    <Figure className= 'figure'>
                        <Figure.Image
                        className='image'
                        src={Avengers}
                        />
                        <Figure.Caption className="text">
                           The Avengers (2012)
                        </Figure.Caption>
                    </Figure>
                    </Col>
                    <Col>
                    <Figure className= 'figure'>
                        <Figure.Image
                        className='image'
                        src={Ultron}
                        />
                        <Figure.Caption className="text">
                        Avengers : Age of Ultron (2015)
                        </Figure.Caption>
                    </Figure>
                    </Col>
                    <Col>
                    <Figure className= 'figure'>
                        <Figure.Image
                        className='image'
                        src={Strange}
                        />
                        <Figure.Caption className="text">
                        Doctor Strange (2016)
                        </Figure.Caption>
                    </Figure>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <Figure className= 'figure'>
                        <Figure.Image
                        className='image'
                        src={Homecoming}
                        />
                        <Figure.Caption className="text">
                           Spiderman : Homecoming (2017)
                        </Figure.Caption>
                    </Figure>
                    </Col>
                    <Col>
                    <Figure className= 'figure'>
                        <Figure.Image
                        className='image'
                        src={Ragnarok}
                        />
                        <Figure.Caption className="text">
                        Thor : Ragnarok (2017)
                        </Figure.Caption>
                    </Figure>
                    </Col>
                    <Col>
                    <Figure className= 'figure'>
                        <Figure.Image
                        className='image'
                        src={Panther}
                        />
                        <Figure.Caption className="text">
                        Black Panther (2018)
                        </Figure.Caption>
                    </Figure>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <Figure className= 'figure'>
                        <Figure.Image
                        className='image'
                        src={Infinity}
                        />
                        <Figure.Caption className="text">
                           Avengers : Infinity War (2018)
                        </Figure.Caption>
                    </Figure>
                    </Col>
                    <Col>
                    <Figure className= 'figure'>
                        <Figure.Image
                        className='image'
                        src={Endgame}
                        />
                        <Figure.Caption className="text">
                        Avengers : End Game (2019)
                        </Figure.Caption>
                    </Figure>
                    </Col>
                    <Col>
                    <Figure className= 'figure'>
                        <Figure.Image
                        className='image'
                        src={Far}
                        />
                        <Figure.Caption className="text">
                        Spiderman : Far From Home (2019)
                        </Figure.Caption>
                    </Figure>
                    </Col>
                </Row>
            </Container>

            </Container>
    
            
        )
    }
}

export default Home;