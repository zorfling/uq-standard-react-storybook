import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { Welcome } from '@storybook/react/demo';
import { withKnobs, boolean, select, text } from '@storybook/addon-knobs/react';

import Button from '../components/Button';
import CssButton from '../components/CssButton';

storiesOf('Welcome', module).add('to Storybook', () => (
  <Welcome showApp={linkTo('Button')} />
));

const buttonStories = storiesOf('Button', module);
buttonStories.addDecorator(withKnobs);
buttonStories.addDecorator(story => (
  <div
    style={{
      textAlign: 'center'
    }}
  >
    {story()}
  </div>
));

buttonStories
  .add('all styles', () => {
    const darkOption = boolean('Dark?', false);
    const buttonProp = {
      dark: darkOption
    };
    return (
      <div
        style={{
          paddingTop: '16px',
          backgroundColor: darkOption ? '#494949' : '#fff'
        }}
      >
        <Button {...buttonProp}>Button</Button>
        <br />
        <Button primary {...buttonProp}>
          Button primary
        </Button>
        <br />
        <Button secondary {...buttonProp}>
          Button secondary
        </Button>
        <br />
        <Button warning {...buttonProp}>
          Button warning
        </Button>
        <br />
        <Button danger {...buttonProp}>
          Button danger
        </Button>
        <br />
        <Button outline {...buttonProp}>
          Button outline
        </Button>
        <br />
        <Button outline primary {...buttonProp}>
          Button outline primary
        </Button>
        <br />
        <Button link {...buttonProp}>
          Button link
        </Button>
        <br />
        <Button link primary {...buttonProp}>
          Button link primary
        </Button>
        <br />
        <Button link danger {...buttonProp}>
          Button link danger
        </Button>
      </div>
    );
  })
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

    const darkOption = boolean('Dark?', false);

    const buttonProp = {
      [buttonStyle]: buttonStyle,
      [buttonType]: buttonType,
      dark: darkOption
    };
    return (
      <div
        style={{
          paddingTop: '16px',
          backgroundColor: darkOption ? '#494949' : '#fff'
        }}
      >
        <Button {...buttonProp} onClick={action('clicked')}>
          {buttonText}
        </Button>
      </div>
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

// CSS Button
const cssButtonStories = storiesOf('CssButton', module);
cssButtonStories.addDecorator(withKnobs);
cssButtonStories.addDecorator(story => (
  <div
    style={{
      textAlign: 'center'
    }}
  >
    {story()}
  </div>
));

cssButtonStories
  .add('all styles', () => {
    const darkOption = boolean('Dark?', false);
    const buttonProp = {
      dark: darkOption
    };
    return (
      <div
        style={{
          paddingTop: '16px',
          backgroundColor: darkOption ? '#494949' : '#fff'
        }}
      >
        <CssButton {...buttonProp}>CssButton</CssButton>
        <br />
        <CssButton primary {...buttonProp}>
          CssButton primary
        </CssButton>
        <br />
        <CssButton secondary {...buttonProp}>
          CssButton secondary
        </CssButton>
        <br />
        <CssButton warning {...buttonProp}>
          CssButton warning
        </CssButton>
        <br />
        <CssButton danger {...buttonProp}>
          CssButton danger
        </CssButton>
        <br />
        <CssButton outline {...buttonProp}>
          CssButton outline
        </CssButton>
        <br />
        <CssButton outline primary {...buttonProp}>
          CssButton outline primary
        </CssButton>
        <br />
        <CssButton link {...buttonProp}>
          CssButton link
        </CssButton>
        <br />
        <CssButton link primary {...buttonProp}>
          CssButton link primary
        </CssButton>
        <br />
        <CssButton link danger {...buttonProp}>
          CssButton link danger
        </CssButton>
      </div>
    );
  })
  .add('with knobs', () => {
    const buttonText = text('Label', 'CssButton');
    const buttonStyle = select(
      'CssButton Style',
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
      'CssButton Type',
      {
        default: 'Default',
        outline: 'Outline',
        link: 'Link'
      },
      ''
    );

    const darkOption = boolean('Dark?', false);

    const buttonProp = {
      [buttonStyle]: buttonStyle,
      [buttonType]: buttonType,
      dark: darkOption
    };
    return (
      <div
        style={{
          paddingTop: '16px',
          backgroundColor: darkOption ? '#494949' : '#fff'
        }}
      >
        <CssButton {...buttonProp} onClick={action('clicked')}>
          {buttonText}
        </CssButton>
      </div>
    );
  })
  .add('default', () => (
    <CssButton onClick={action('clicked')}>CssButton</CssButton>
  ))
  .add('primary', () => (
    <CssButton primary onClick={action('clicked')}>
      CssButton primary
    </CssButton>
  ))
  .add('secondary', () => (
    <CssButton secondary onClick={action('clicked')}>
      CssButton secondary
    </CssButton>
  ))
  .add('warning', () => (
    <CssButton warning onClick={action('clicked')}>
      CssButton warning
    </CssButton>
  ))
  .add('danger', () => (
    <CssButton danger onClick={action('clicked')}>
      CssButton danger
    </CssButton>
  ))
  .add('outline', () => (
    <CssButton outline onClick={action('clicked')}>
      CssButton outline
    </CssButton>
  ))
  .add('outline primary', () => (
    <CssButton outline primary onClick={action('clicked')}>
      CssButton outline primary
    </CssButton>
  ))
  .add('link', () => (
    <CssButton link onClick={action('clicked')}>
      CssButton link
    </CssButton>
  ))
  .add('link primary', () => (
    <CssButton primary link onClick={action('clicked')}>
      CssButton link primary
    </CssButton>
  ))
  .add('link danger', () => (
    <CssButton danger link onClick={action('clicked')}>
      CssButton link danger
    </CssButton>
  ));
