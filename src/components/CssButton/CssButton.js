import React from 'react';
import PropTypes from 'prop-types';

import './CssButton.css';

const CssButton = props => {
  const classes = ['button'];

  if (props.primary) {
    classes.push('button--primary');
  }

  if (props.secondary) {
    classes.push('button--secondary');
  }

  if (props.warning) {
    classes.push('button--warning');
  }

  if (props.danger) {
    classes.push('button--danger');
  }

  if (props.outline) {
    classes.push('button--outline');
  }

  if (props.link) {
    classes.push('button--link');
  }

  if (props.dark) {
    classes.push('button--dark');
  }

  return (
    <a
      href=""
      onClick={evt => {
        evt.preventDefault();
        this.props.onClick(evt);
      }}
      className={classes.join(' ')}
    >
      {props.children}
    </a>
  );
};

CssButton.propTypes = {
  children: PropTypes.string.isRequired,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  warning: PropTypes.bool,
  danger: PropTypes.bool,
  outline: PropTypes.bool,
  link: PropTypes.bool,
  dark: PropTypes.bool
};

CssButton.defaultProps = {
  primary: false,
  secondary: false,
  warning: false,
  danger: false,
  outline: false,
  link: false,
  dark: false
};

export default CssButton;
