import React from 'react';
import PropTypes from 'prop-types';

// StyledComponents
import Label from './Label';
import Text from './Text';
import TextWrapper from './TextWrapper';


const PhotoLabel = (props) => {
  const { mainText } = props;
  if (!mainText) return null;
  return (
    <Label>
      <TextWrapper>
        <Text>{mainText}</Text>
      </TextWrapper>
    </Label>
  );
};

PhotoLabel.propTypes = {
  mainText: PropTypes.string.isRequired,
};

PhotoLabel.defaultProps = {
  mainText: '',
};

export default PhotoLabel;


