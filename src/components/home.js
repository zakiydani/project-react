import React, {Component} from 'react';
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
import Item from './figure.js';


class Home extends Component{
    render(){
        return(
            <Container fluid className="bg">
            <Container className='h2'>
                <h2>MARVEL MOVIES</h2>
              </Container>
              <Container>
                <Row>
                    <Col>
                        <Item src = {Avengers}
                              text = 'The Avengers (2012)'
                        />
                    </Col>
                    <Col>
                        <Item src = {Ultron}
                              text = 'Avengers : Age of Ultron (2015)'
                        />
                    </Col>
                    <Col>
                        <Item src = {Strange}
                              text = 'Doctor Strange (2016)'
                        />
                    </Col>    
                </Row>
                <Row>
                    <Col>
                        <Item src = {Homecoming}
                              text = 'Spiderman : Homecoming (2017)'
                        />
                    </Col>
                    <Col>
                        <Item src = {Ragnarok}
                              text = 'Thor : Ragnarok (2017)'
                        />
                    </Col>
                    <Col>
                        <Item src = {Panther}
                              text = 'Black Panther (2018)'
                        />
                    </Col>    
                </Row>
                <Row>
                    <Col>
                        <Item src = {Infinity}
                              text = 'Avengers : Infinity War (2018)'
                        />
                    </Col>
                    <Col>
                        <Item src = {Endgame}
                              text = 'Avengers : End Game (2019)'
                        />
                    </Col>
                    <Col>
                        <Item src = {Far}
                              text = 'Spiderman : Far From Home (2019)'
                        />
                    </Col>    
                </Row>
               </Container>
               </Container>
        )
    }
}

export default Home;