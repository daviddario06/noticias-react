/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => {
    return (
        <nav>
            <div className ="nav-wrapper light-blue darken-3">
                <a className ="brand-logo center">{ props.titulo }</a>
            </div>
        </nav>
    );
};

export default Header;

Header.propTypes = {
    titulo: PropTypes.string.isRequired
}