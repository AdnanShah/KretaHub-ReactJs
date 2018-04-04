import React from 'react'
import {
    AlphaPicker,
    BlockPicker,
    ChromePicker,
    CirclePicker,
    CompactPicker,
    GithubPicker,
    HuePicker,
    MaterialPicker,
    PhotoshopPicker,
    SketchPicker,
    SliderPicker,
    SwatchesPicker,
    TwitterPicker,
} from 'react-color';

import CardBox from 'components/CardBox/index';
import Basic from '../../../pickers/routes/Color/basic/index';
import BasicToggle from '../../../pickers/routes/Color/basicToggle';
import BasicPositioning from '../../../pickers/routes/Color/basicPositioning';
import CustomPicker from '../../../pickers/routes/Color/customPicker';
import CustomPointer from '../../../pickers/routes/Color/customPointer';
import WithRedux from '../../../pickers/routes/Color/withRedux';
import ContainerHeader from 'components/ContainerHeader/index';
import IntlMessages from 'util/IntlMessages';

const ColorPicker = ({match}) => {
    return (
        <div className="animated slideInUpTiny animation-duration-3">
            <ContainerHeader title={<IntlMessages id="sidebar.components.colorPicker"/>} match={match}/>

            <div className="row">
                <CardBox styleName="col-md-6" childrenStyle="d-flex justify-content-center"
                         heading={<IntlMessages id="picker.color.alpha"/>}>
                    <AlphaPicker/>
                </CardBox>
                <CardBox styleName="col-md-6" childrenStyle="d-flex justify-content-center"
                         heading={<IntlMessages id="picker.color.hue"/>}>
                    <HuePicker/>
                </CardBox>
                <CardBox styleName="col-md-6" childrenStyle="d-flex justify-content-center"
                         heading={<IntlMessages id="picker.color.circle"/>}>
                    <CirclePicker/>
                </CardBox>
                <CardBox styleName="col-md-6" childrenStyle="d-flex justify-content-center"
                         heading={<IntlMessages id="picker.color.compact"/>}>
                    <CompactPicker/>
                </CardBox>
                <CardBox styleName="col-md-6" childrenStyle="d-flex justify-content-center"
                         heading={<IntlMessages id="picker.color.block"/>}>
                    <BlockPicker/>
                </CardBox>
                <CardBox styleName="col-md-6" childrenStyle="d-flex justify-content-center"
                         heading={<IntlMessages id="picker.color.chrome"/>}>
                    <ChromePicker/>
                </CardBox>
                <CardBox styleName="col-md-6" childrenStyle="d-flex justify-content-center"
                         heading={<IntlMessages id="picker.color.github"/>}>
                    <GithubPicker/>
                </CardBox>
                <CardBox styleName="col-md-6" childrenStyle="d-flex justify-content-center"
                         heading={<IntlMessages id="picker.color.twitter"/>}>
                    <TwitterPicker/>
                </CardBox>
                <CardBox styleName="col-md-6" childrenStyle="d-flex justify-content-center"
                         heading={<IntlMessages id="picker.color.withRedux"/>}>
                    <WithRedux/>
                </CardBox>
                <CardBox styleName="col-md-6" childrenStyle="d-flex justify-content-center"
                         heading={<IntlMessages id="picker.color.sketch"/>}>
                    <SketchPicker/>
                </CardBox>
                <CardBox styleName="col-md-6" childrenStyle="d-flex justify-content-center"
                         heading={<IntlMessages id="picker.color.material"/>}>
                    <MaterialPicker/>
                </CardBox>
                <CardBox styleName="col-md-6" childrenStyle="d-flex justify-content-center"
                         heading={<IntlMessages id="picker.color.slider"/>}>
                    <SliderPicker/>
                </CardBox>
                <CardBox styleName="col-md-6" childrenStyle="d-flex justify-content-center"
                         heading={<IntlMessages id="picker.color.basic"/>}>
                    <Basic/>
                </CardBox>
                <CardBox styleName="col-md-6" childrenStyle="d-flex justify-content-center"
                         heading={<IntlMessages id="picker.color.basicToggle"/>}>
                    <BasicToggle/>
                </CardBox>
                <CardBox styleName="col-md-6" childrenStyle="d-flex justify-content-center"
                         heading={<IntlMessages id="picker.color.custom"/>}>
                    <CustomPicker/>
                </CardBox>
                <CardBox styleName="col-md-6" childrenStyle="d-flex justify-content-center"
                         heading={<IntlMessages id="picker.color.customPointer"/>}>
                    <CustomPointer/>
                </CardBox>
                <CardBox styleName="col-md-6" childrenStyle="d-flex justify-content-center"
                         heading={<IntlMessages id="picker.color.photoshop"/>}>
                    <PhotoshopPicker/>
                </CardBox>
                <CardBox styleName="col-md-6" childrenStyle="d-flex justify-content-center"
                         heading={<IntlMessages id="picker.color.swatches"/>}>
                    <SwatchesPicker/>
                </CardBox>
                <CardBox styleName="col-md-6" childrenStyle="d-flex justify-content-center"
                         heading={<IntlMessages id="picker.color.basicPositioning"/>}>
                    <BasicPositioning/>
                </CardBox>
            </div>
        </div>
    )
};

export default ColorPicker;
