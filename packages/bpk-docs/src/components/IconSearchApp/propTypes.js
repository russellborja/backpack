import PropTypes from 'prop-types';

const icons = PropTypes.arrayOf(PropTypes.shape({
  name: PropTypes.string.isRequired,
  categoryId: PropTypes.string.isRequired,
  categoryName: PropTypes.string.isRequired,
  component: PropTypes.func.isRequired,
}));

export default { icons };