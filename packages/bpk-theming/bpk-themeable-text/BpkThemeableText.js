import React from 'react';
import PropTypes from 'prop-types';
import { cssModules } from 'bpk-react-utils';
import { withTheme, disableThemingForComponent } from '../index';

import STYLES from './bpk-themeable-text.scss';

const getClassName = cssModules(STYLES);


const REQUIRED_THEME_ATTRIBUTES = ['textColor', 'textBackgroundColor'];

// IRL I'd use something more generic here!
const requiredThemeAttributesSupplied = theme => theme.textColor && theme.textBackgroundColor;

const themePropType = (propName, props, componentName) => {
  const { theme } = props;
  if (theme && !requiredThemeAttributesSupplied(theme)) {
    return new Error(`Invalid prop \`${propName}\` supplied to \`${componentName}\`. To theme \`${componentName}\`, the \`theme\` prop must include \`${REQUIRED_THEME_ATTRIBUTES.join(', ')}\``); // eslint-disable-line max-len
  }
  return false;
};

const BpkThemeableText = withTheme((props) => {
  const { theme, children } = props;
  if (theme && !requiredThemeAttributesSupplied(theme)) {
    // turn off theming somehow.
    disableThemingForComponent();
  }
  const className = getClassName('bpk-themeable-text');
  return <p className={className}>{ children }</p>;
});
BpkThemeableText.propTypes = {
  theme: themePropType,
  children: PropTypes.node.isRequired,
};
BpkThemeableText.defaultProps = {
  theme: null,
};

export default withTheme(BpkThemeableText);
