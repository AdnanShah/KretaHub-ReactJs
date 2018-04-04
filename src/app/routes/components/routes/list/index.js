import React from 'react';
import SimpleList from './dividers/SimpleList';
import FolderList from './folder/FolderList';
import InsetList from './inset/InsetList';
import CheckboxList from './checkbox/CheckboxList';
import CheckboxListSecondary from './checkbox/CheckboxListSecondary';
import SwitchListSecondary from './switch/SwitchListSecondary';
import InteractiveList from './interactive/InteractiveList';
import NestedList from './nestedList/NestedList';
import PinnedSubheaderList from './pinnedSubHeader/PinnedSubheaderList';
import CardBox from 'components/CardBox';
import ContainerHeader from 'components/ContainerHeader';
import CheckBoxListControl from './checkBoxListControl/CheckBoxListControl';
import ListDividers from 'app/routes/components/routes/dividers/list/ListDividers';
import IntlMessages from 'util/IntlMessages';

const Lists = ({match}) => {
    return (
        <div className="animated slideInUpTiny animation-duration-3">
            <ContainerHeader title={<IntlMessages id="sidebar.components.lists"/>} match={match}/>

            <div className="row mb-md-4">
                <CardBox
                    styleName="col-lg-4 col-md-6 col-12 mb-md-4"
                    cardStyle="p-0"
                    heading={<IntlMessages id="component.lists.folder"/>}
                    headerOutside
                >
                    <FolderList/>
                </CardBox>

                <CardBox
                    styleName="col-lg-4 col-md-6 col-12 mb-md-4"
                    cardStyle="p-0" heading={<IntlMessages id="component.lists.folder"/>}
                    headerOutside
                >
                    <CheckboxListSecondary/>
                </CardBox>

                <CardBox
                    styleName="col-lg-4 col-md-6 col-12 mb-md-4"
                    cardStyle="p-0"
                    heading={<IntlMessages id="component.lists.switch"/>}
                    headerOutside
                >
                    <SwitchListSecondary/>
                </CardBox>

                <CardBox
                    styleName="col-lg-3 col-md-6 col-sm-6 col-12 mb-md-4"
                    cardStyle="p-0"
                    heading={<IntlMessages id="component.lists.dividers"/>}
                    headerOutside
                >
                    <ListDividers/>
                </CardBox>

                <CardBox
                    styleName="col-lg-3 col-md-4 col-sm-6 col-12 mb-md-4"
                    cardStyle="p-0"
                    heading={<IntlMessages id="component.lists.simple"/>}
                    headerOutside
                >
                    <SimpleList/>
                </CardBox>

                <CardBox
                    styleName="col-lg-3 col-md-4 col-sm-6 col-12 mb-md-4"
                    cardStyle="p-0"
                    heading={<IntlMessages id="component.lists.inset"/>}
                    headerOutside
                >
                    <InsetList/>
                </CardBox>

                <CardBox
                    styleName="col-lg-3 col-md-4 col-sm-6 col-12 mb-md-4"
                    cardStyle="p-0"
                    heading={<IntlMessages id="component.lists.nested"/>}
                    headerOutside
                >
                    <NestedList/>
                </CardBox>
            </div>

            <div className="row mb-md-4">
                <CardBox
                    styleName="col-lg-6 col-12"
                    cardStyle="p-0"
                    heading={<IntlMessages id="component.lists.checkbox"/>}
                    headerOutside
                >
                    <CheckBoxListControl/>
                </CardBox>

                <CardBox
                    styleName="col-lg-3 col-sm-6 col-12"
                    cardStyle="p-0"
                    heading={<IntlMessages id="component.lists.checkboxControls"/>}
                    headerOutside
                >
                    <CheckboxList/>
                </CardBox>

                <CardBox
                    styleName="col-lg-3 col-sm-6 col-12"
                    cardStyle="p-0"
                    heading={<IntlMessages id="component.lists.pinned"/>}
                    headerOutside
                >
                    <PinnedSubheaderList/>
                </CardBox>
            </div>

            <div className="row">
                <CardBox
                    styleName="col-lg-12 col-12"
                    cardStyle="p-0 bg-transparent no-shadow"
                    heading={<IntlMessages id="component.lists.interactive"/>}
                    headerOutside
                >
                    <InteractiveList/>
                </CardBox>
            </div>
        </div>
    );
};

export default (Lists);

