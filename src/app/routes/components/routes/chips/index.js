import React from 'react';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import FaceIcon from 'material-ui-icons/Face';
import Done from 'material-ui-icons/Done';
import CardBox from 'components/CardBox';
import ContainerHeader from 'components/ContainerHeader'
import ChipsArray from './chipArray/ChipsArray';
import ChipsWithInputBox from './chipsWithInputBox/ChipsWithInputBox';
import IntlMessages from 'util/IntlMessages';

function handleRequestDelete() {
    alert('You clicked the delete icon.'); // eslint-disable-line no-alert
}

function handleClick() {
    alert('You clicked the Chip.'); // eslint-disable-line no-alert
}

const Chips = ({match}) => {
    return (
        <div className="animated slideInUpTiny animation-duration-3">
            <ContainerHeader title={<IntlMessages id="sidebar.components.chips"/>} match={match}/>

            <div className="row mb-md-4">
                <CardBox
                    styleName="col-lg-3 col-md-4 col-sm-6 col-12"
                    cardStyle="text-center"
                    childrenStyle="d-flex justify-content-center"
                    heading={<IntlMessages id="component.chips.default"/>}
                >
                    <Chip label="Default" />

                </CardBox>

                <CardBox
                    styleName="col-lg-3 col-md-4 col-sm-6 col-12 text-center"
                    cardStyle="text-center"
                    childrenStyle="d-flex justify-content-center"
                    heading={<IntlMessages id="component.chips.outline"/>}
                >
                    <Chip label="Outline Chip" className="chip-outline" />
                </CardBox>

                <CardBox
                    styleName="col-lg-3 col-md-4 col-sm-6 col-12"
                    cardStyle="text-center"
                    childrenStyle="d-flex justify-content-center"
                    heading={<IntlMessages id="component.chips.chipWithText"/>}
                >
                    <Chip avatar={<Avatar>MS</Avatar>} label="Text Avatar" />
                </CardBox>

                <CardBox
                    styleName="col-lg-3 col-md-4 col-sm-6 col-12"
                    cardStyle="text-center"
                    childrenStyle="d-flex justify-content-center"
                    heading={<IntlMessages id="component.chips.clickable"/>}
                >
                    <Chip label="I’m Clickable" onClick={handleClick} />
                </CardBox>

                <CardBox
                    styleName="col-lg-3 col-md-4 col-sm-6 col-12"
                    cardStyle="text-center"
                    childrenStyle="d-flex justify-content-center"
                    heading={<IntlMessages id="component.chips.withImage"/>}
                >
                    <Chip avatar={<Avatar src="http://via.placeholder.com/150x150"/>} label="Image Avatar"/>
                </CardBox>
                <CardBox
                    styleName="col-lg-3 col-md-4 col-sm-6 col-12"
                    cardStyle="text-center"
                    childrenStyle="d-flex justify-content-center"
                    heading={<IntlMessages id="component.chips.deletable"/>}
                >
                    <Chip
                        avatar={<Avatar src="http://via.placeholder.com/150x150"/>}
                        label="Deletable Chip"
                        onDelete={handleRequestDelete}
                    />
                </CardBox>

                <CardBox
                    styleName="col-lg-3 col-md-4 col-sm-6 col-12"
                    cardStyle="text-center"
                    childrenStyle="d-flex justify-content-center"
                    heading={<IntlMessages id="component.chips.withIcon"/>}
                >
                    <Chip
                        avatar={
                            <Avatar>
                                <FaceIcon className="bg-gray lighten-3 " />
                            </Avatar>
                        }
                        label="Icon Avatar"
                    />
                </CardBox>

                <CardBox
                    styleName="col-lg-3 col-md-4 col-sm-6 col-12"
                    cardStyle="text-center"
                    childrenStyle="d-flex justify-content-center"
                    heading={<IntlMessages id="component.chips.custom"/>}
                >
                    <Chip
                        label="I’m Custom Clickable"
                        onClick={handleClick}
                        onDelete={handleRequestDelete}
                        deleteIcon={<Done />}
                    />
                </CardBox>
            </div>

            <div className="row mb-md-4">
                <CardBox styleName="col-lg-12" heading={<IntlMessages id="component.chips.array"/>}>
                    <ChipsArray />
                </CardBox>
            </div>

            <div className="row mb-md-4">
                <CardBox styleName="col-xl-12" heading={<IntlMessages id="component.chips.withInput"/>}>
                    <ChipsWithInputBox />
                </CardBox>
            </div>
        </div>
    );
};

export default (Chips);

