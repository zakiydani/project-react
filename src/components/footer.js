import React, {Component} from 'react';
import '../style.scss'


export class Footer extends Component {
    render(){
        return(
            <footer id="sticky-footer" class="py-4 bg-dark text-white-50">
                <div class="container text-center">
                    <span>Copyright &copy;ZakiyDani</span>
                </div>
            </footer>
        )
    }
}

export default Footer;