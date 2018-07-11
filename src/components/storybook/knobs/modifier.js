import { selectV2 } from '@storybook/addon-knobs/react';

export const getBasicModifier = () => {
  const options = {
    None: null,
    Primary: 'primary',
    Secondary: 'secondary',
    Danger: 'danger',
    Warning: 'warning',
    Info: 'info',
    Success: 'success'
  };
  const defaultValue = 'primary';
  // const groupId = 'GROUP-ID1';
  const value = selectV2('Modifier', options, defaultValue)
  return value ? {[value]: true} : {};
};