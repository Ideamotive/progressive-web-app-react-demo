import React from 'react';
import PropTypes from 'prop-types';
// hof
import withVibrations from '../../services/hof/withVibrations';
// Icons
import 'font-awesome/css/font-awesome.css';
// Styled Components
import Button from './Button';
import Icon from './Icon';

const ActionButton = (props) => {
  const {
    onClick,
    onActionStart,
    onActionEnd,
    vibrate,
    iconClass,
    ...rest
  } = props;

  return (
    <Button
      width={'70px'}
      height={'70px'}
      onClick={vibrate ? withVibrations(onClick) : onClick}
      onTouchStart={onActionStart}
      onMouseDown={onActionStart}
      onTouchEnd={onActionEnd}
      onMouseUp={onActionEnd}
      {...rest}
    >
      <Icon className={iconClass}/>
    </Button>
  );
};

ActionButton.propTypes = {
  onClick: PropTypes.func,
  onActionStart: PropTypes.func,
  onActionEnd: PropTypes.func,
  iconClass: PropTypes.string,
  vibrate: PropTypes.bool,
};

ActionButton.defaultProps = {
  onClick: () => null,
  onActionStart: () => null,
  onActionEnd: () => null,
  iconClass: 'fa fa-eye',
  vibrate: false,
};

export default ActionButton;


