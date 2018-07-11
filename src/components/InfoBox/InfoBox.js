import React, {Component} from 'react';
import PropTypes from 'prop-types';
import moment from 'moment'

// Icon
import 'font-awesome/css/font-awesome.css';

// StyledComponents
import BoxWrapper from './BoxWrapper';
import WrapperBefore from "./WrapperBefore";
import Image from "./Image";
import Description from "./Description";
import CloseButton from "./CloseButton";
import CreatedTime from "./CreatedTime";

class InfoBox extends Component {
    render(){
      if(!this.props) return null;
      const {onBoxClose, mainText, imgUrl, created_at} = this.props;
        return(
            <BoxWrapper>
                <WrapperBefore>
                    <CloseButton onClick={onBoxClose} className='fa fa-times-circle fa-2x' />
                    <Image backgroundImage={`url(${imgUrl})`}/>
                    <CreatedTime>{moment(created_at).format('lll')}</CreatedTime>
                    <Description>{mainText}</Description>
                </WrapperBefore>
            </BoxWrapper>
        )
    }
}

InfoBox.propTypes = {
    onBoxClose: PropTypes.func.isRequired,
    mainText: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired,
    created_at: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)])
};

InfoBox.defaultProps = {
    mainText: '',
    created_at: new Date('01-01-20018'),
    onBoxClose: () => {},
    imgUrl: '',
};


export default InfoBox;
