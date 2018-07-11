import React, {Component} from 'react';
import {connect} from 'react-redux';
import {onBoxClose, onBoxOpen} from "../../actions/ui";
import InfoBox from '../../components/InfoBox/InfoBox';

function withInfoBox(BaseComponent) {
    class componentWithInfoBox extends Component {
        constructor(){
            super();
        }
        onCloseBox = () => {
          this.props.onBoxClose();
        };

        render() {
            const infoBox = this.props.isPhotoPopupShown && <InfoBox
                mainText={this.props.selectedPhoto.description.mainText}
                imgUrl={this.props.selectedPhoto.photo.preview_secure_url}
                onBoxClose={this.onCloseBox}
                created_at={this.props.selectedPhoto.photo.created_at}/>;
            return  <BaseComponent  infoBox={infoBox} {...this.props}/>;
        }
    }

    function mapStateToProps (state={}) {
        return {
            selectedPhoto: state.photos.selectedPhotoDetails,
            isPhotoPopupShown: state.ui.isPhotoPopupShown
        }
    }

    function mapDispatchToProps (dispatch) {
        return {
            onBoxClose: (... args) => dispatch(onBoxClose(... args))
        }

    }

    return connect(mapStateToProps, mapDispatchToProps)(componentWithInfoBox);
}


export default withInfoBox;
