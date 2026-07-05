import React from 'react'
import PropTypes from 'prop-types'
const Image = ({ imageSrc, alt='' }) => <img alt={alt} src={imageSrc} />;

Image.propTypes = {
    imageSrc: PropTypes.string.isRequired,
    alt: PropTypes.string
}

export default Image;
