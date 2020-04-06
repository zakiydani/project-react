import React from 'react'
import Figure from "react-bootstrap/Figure";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.scss'


const Item = (props) => {
    return(
        <Figure className="figure">
            <Figure.Image
            className="image"
            src={props.src}
            />
            <Figure.Caption className="text">
                {props.text}
            </Figure.Caption>
        </Figure>
    )
}

export default Item;