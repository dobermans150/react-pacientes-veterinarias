import React from 'react';
import PropTypes from 'prop-types';

const Header = ({titulo}) =>{
    return(
        <header>
            <h1 className="text-center">{titulo}</h1>

        </header>
);
}

// de esta manera podemos documentar el codigo
Header.propTypes ={
    titulo: PropTypes.string.isRequired
}


export default Header;