import React from 'react';
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

export default CssButton;
