import React from 'react';
import PropTypes from 'prop-types';



const Loader = props => (
    <div>
        <div>

        </div>
    </div>
);

Loader.propTypes = {
    className: PropTypes.string,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    color: PropTypes.oneOf(['blue', 'white'])
};

Loader.defaultProps = {
    size: 'small',
    color: 'blue'
};

export default Loader;