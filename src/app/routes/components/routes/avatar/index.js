import React from 'react';
import IconAvatars from './icon/IconAvatars';
import ImageAvatars from './image/ImageAvatars';
import LetterAvatars from './letter/LetterAvatars';
import CardBox from 'components/CardBox';
import ContainerHeader from 'components/ContainerHeader'
import IntlMessages from 'util/IntlMessages';

const Avatars = ({match}) => {
    return (
        <div className="animated slideInUpTiny animation-duration-3">
            <ContainerHeader title={<IntlMessages id="sidebar.components.avatars"/>} match={match}/>

            <div className="row mb-lg-4">
                <CardBox styleName="col-lg-6"
                         heading={<IntlMessages id="component.avatars.image"/>}>
                    <ImageAvatars/>
                </CardBox>

                <CardBox styleName="col-lg-6"
                         heading={<IntlMessages id="component.avatars.letter"/>}>
                    <LetterAvatars/>
                </CardBox>
            </div>

            <div className="row">
                <CardBox styleName="col-lg-12" cardStyle="text-center"
                         heading={<IntlMessages id="component.avatars.icon"/>}>
                    <IconAvatars/>
                </CardBox>
            </div>
        </div>
    );
};
export default Avatars;