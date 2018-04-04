import React from 'react'
import {connect} from 'react-redux'
import {actions as appActions} from './reducer'

import {SketchPicker} from 'react-color'

const WithRedux = ({color, onChangeColor}) => {
    return (
        <SketchPicker
            color={color}
            onChangeComplete={onChangeColor}
        />
    )
};

const mapStateToProps = state => ({
    color: state.color,
});

const mapDispatchToProps = {
    onChangeColor: appActions.changeColor,
};

export default connect(mapStateToProps, mapDispatchToProps)(WithRedux)