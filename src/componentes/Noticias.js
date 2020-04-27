import React,{Component} from 'react';
import Noticia from './Noticia';
import PropTypes from 'prop-types';

export default class Noticias extends Component {



    render() {
        const noticias = this.props.noticias
        return (
            
            <div className="row">
                {noticias.map(noticia => ( 
                    <Noticia
                        key = {noticia.url}
                        noticia = {noticia} 
                    />
                ))}
            </div>
        );
    }
}

Noticias.propTypes = {
    noticias: PropTypes.array.isRequired
}