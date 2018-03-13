import React, { Component } from 'react';

const buttonStyles = props => {
  let styles = {
    borderRadius: '0',
    borderStyle: 'solid',
    borderWidth: 0,
    cursor: 'pointer',
    fontFamily: '"Roboto","Helvetica Neue",Helvetica,Arial,sans-serif',
    fontWeight: 'normal',
    lineHeight: 'normal',
    margin: '0 0 20px',
    position: 'relative',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    padding: '16px 32px 17px 32px',
    fontSize: '16px',
    backgroundColor: '#f5f5f5',
    borderColor: 'transparent',
    color: '#222',
    transition: 'background-color 300ms ease-out'
  };

  if (props.primary) {
    styles = {
      ...styles,
      backgroundColor: '#2377cb',
      color: '#fff'
    };
  }
  if (props.secondary) {
    styles = {
      ...styles,
      backgroundColor: '#444',
      color: '#fff'
    };
  }
  if (props.warning) {
    styles = {
      ...styles,
      backgroundColor: '#f2a702'
    };
  }
  if (props.danger) {
    styles = {
      ...styles,
      backgroundColor: '#dc390b',
      color: '#fff'
    };
  }
  if (props.outline) {
    styles = {
      ...styles,
      backgroundColor: 'transparent',
      borderWidth: '2px',
      borderStyle: 'solid',
      borderColor:
        styles.backgroundColor !== '#f5f5f5' ? styles.backgroundColor : '#222',
      color:
        styles.backgroundColor !== '#f5f5f5' ? styles.backgroundColor : '#222'
    };

    if (props.dark) {
      styles = {
        ...styles,
        borderColor: '#fff',
        color: '#fff'
      };
    }
  }
  if (props.link) {
    if (props.dark) {
      styles = {
        ...styles,
        color:
          props.primary || props.secondary || props.warning || props.danger
            ? styles.backgroundColor
            : '#fff'
      };
    }

    styles = {
      ...styles,
      backgroundColor: 'transparent',
      color:
        props.primary || props.secondary || props.warning || props.danger
          ? styles.backgroundColor
          : props.dark ? '#fff' : '#222'
    };
  }

  return styles;
};

class Button extends Component {
  render() {
    return (
      <a
        href="#"
        onClick={evt => {
          evt.preventDefault();
          this.props.onClick(evt);
        }}
        style={buttonStyles(this.props)}
      >
        {this.props.children}
      </a>
    );
  }
}

export default Button;
