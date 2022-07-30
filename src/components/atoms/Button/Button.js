import React, { useState } from 'react';
import Text from '../Text/Text';
import Icon from '../Icon/Icon';
import Row from '../Row/Row';
import ButtonUtil from './ButtonUtil';

function Button(props) {
  const [hover, setHover] = useState(false);

  require('./Button.css');
  let style = ButtonUtil._style(props, hover);

  return (
    <button
      style={style}
      className={props.className + ' arten_button ' + props.shape}
      // onMouseOver={() => setHover(true)}
      // onMouseOut={() => setHover(false)}
      // onMouseLeave={() => setHover(false)}
      onClick={() => { /*setHover(false);*/ props.onClick() }}
    >
      <Row
        verticalAlign={'middle'}
        spacing={{ lg: props.text && props.icon ? 15 : 0 }}
      >
        {props.text ? (
          <Text level={{ lg: 'h6' }} {...props.text} />
        ) : (
          <React.Fragment />
        )}
        {props.icon ? <Icon size={'md'} {...props.icon} /> : <React.Fragment />}
      </Row>
    </button>
  );
}

Button.defaultProps = {
  style: {},
  className: '',
  text: null,
  icon: null,
  shape: 'solid', /// bordered /// solid
  primaryColor: '#1a73e7',
  secondaryColor: 'white',
  hover: true,
  onClick: () => { },
};

export default Button;
