import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, boolean, select, text } from '@storybook/addon-knobs/react';

import Button from '../components/Button';

storiesOf('Welcome', module).add('to Storybook', () => (
  <Welcome showApp={linkTo('Button')} />
));

const buttonStories = storiesOf('Button', module);

buttonStories.addDecorator(withKnobs);
buttonStories
  .add('with knobs', () => {
    const buttonText = text('Label', 'Button');
    const buttonStyle = select(
      'Button Style',
      {
        default: 'Default',
        primary: 'Primary',
        secondary: 'Secondary',
        warning: 'Warning',
        danger: 'Danger'
      },
      ''
    );
    const buttonType = select(
      'Button Type',
      {
        default: 'Default',
        outline: 'Outline',
        link: 'Link'
      },
      ''
    );
    const buttonProp = {
      [buttonStyle]: buttonStyle,
      [buttonType]: buttonType
    };
    return (
      <Button {...buttonProp} onClick={action('clicked')}>
        {buttonText}
      </Button>
    );
  })
  .add('default', () => <Button onClick={action('clicked')}>Button</Button>)
  .add('primary', () => (
    <Button primary onClick={action('clicked')}>
      Button primary
    </Button>
  ))
  .add('secondary', () => (
    <Button secondary onClick={action('clicked')}>
      Button secondary
    </Button>
  ))
  .add('warning', () => (
    <Button warning onClick={action('clicked')}>
      Button warning
    </Button>
  ))
  .add('danger', () => (
    <Button danger onClick={action('clicked')}>
      Button danger
    </Button>
  ))
  .add('outline', () => (
    <Button outline onClick={action('clicked')}>
      Button outline
    </Button>
  ))
  .add('outline primary', () => (
    <Button outline primary onClick={action('clicked')}>
      Button outline primary
    </Button>
  ))
  .add('link', () => (
    <Button link onClick={action('clicked')}>
      Button link
    </Button>
  ))
  .add('link primary', () => (
    <Button primary link onClick={action('clicked')}>
      Button link primary
    </Button>
  ))
  .add('link danger', () => (
    <Button danger link onClick={action('clicked')}>
      Button link danger
    </Button>
  ));
