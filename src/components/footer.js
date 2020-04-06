import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import '../style.scss'


export class Footer extends Component {
    render(){
        return(
            <Container fluid className="footer">
                <div className="text-center">
                <span className="text">&copy; ZakiyDani & GoFlix 2020.</span>
                </div>
            </Container>
        )
    }
}

export default Footer;