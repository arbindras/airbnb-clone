import PropTypes from 'prop-types';

export default function Image({ src, ...rest }) {
  src = src && src.includes('https://')
    ? src
    : 'http://localhost:4000/uploads/' + src;

  return (
    <img {...rest} src={src} alt={rest.alt || ''} />
  );
}

// PropTypes for validation
Image.propTypes = {
  src: PropTypes.string.isRequired,
  // rest of the props can be of any type, so use PropTypes.object for them
  rest: PropTypes.object,
};

// Optional default props
Image.defaultProps = {
  rest: {},
};
