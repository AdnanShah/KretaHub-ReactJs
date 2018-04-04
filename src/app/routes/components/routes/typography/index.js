import React from 'react';

import CardBox from 'components/CardBox';
import ContainerHeader from 'components/ContainerHeader';
import LeftIconList from './iconList/LeftIconList';
import RightIconList from './iconList/RightIconList';
import Avatar from 'material-ui/Avatar';
import BadgeIconList from './iconList/BadgeIconList';
import IntlMessages from 'util/IntlMessages';

const Typography = ({match}) => {
    return (
        <div className="animated slideInUpTiny animation-duration-3">
            <ContainerHeader title={<IntlMessages id="sidebar.components.typography"/>} match={match}/>

            <div className="row mb-md-4">

                <CardBox styleName="col-sm-6 col-12"
                         heading={<IntlMessages id="component.typography.lightHeadings"/>} headerOutside>
                    <div>
                        <h1 className="font-weight-light">Heading 1
                            <small> Sub-heading</small>
                        </h1>
                        <h2 className="font-weight-light">Heading 2
                            <small> Sub-heading</small>
                        </h2>
                        <h3 className="font-weight-light">Heading 3
                            <small> Sub-heading</small>
                        </h3>
                        <h4 className="font-weight-light">Heading 4
                            <small> Sub-heading</small>
                        </h4>
                        <h5 className="font-weight-light">Heading 5
                            <small> Sub-heading</small>
                        </h5>
                        <h6 className="font-weight-light">Heading 6
                            <small> Sub-heading</small>
                        </h6>
                    </div>
                </CardBox>

                <CardBox styleName="col-sm-6 col-12"
                         heading={<IntlMessages id="component.typography.normalHeadings"/>} headerOutside>
                    <div>
                        <h1>Heading 1
                            <small> Sub-heading</small>
                        </h1>
                        <h2>Heading 2
                            <small> Sub-heading</small>
                        </h2>
                        <h3>Heading 3
                            <small> Sub-heading</small>
                        </h3>
                        <h4>Heading 4
                            <small> Sub-heading</small>
                        </h4>
                        <h5>Heading 5
                            <small> Sub-heading</small>
                        </h5>
                        <h6>Heading 6
                            <small> Sub-heading</small>
                        </h6>
                    </div>
                </CardBox>
            </div>

            <div className="row mb-md-4">
                <CardBox styleName="col-sm-6 col-12"
                         heading={<IntlMessages id="component.typography.semiBoldHeadings"/>} headerOutside>
                    <div>
                        <h1 className="font-weight-semibold">Heading 1
                            <small> Sub-heading</small>
                        </h1>
                        <h2 className="font-weight-semibold">Heading 2
                            <small> Sub-heading</small>
                        </h2>
                        <h3 className="font-weight-semibold">Heading 3
                            <small> Sub-heading</small>
                        </h3>
                        <h4 className="font-weight-semibold">Heading 4
                            <small> Sub-heading</small>
                        </h4>
                        <h5 className="font-weight-semibold">Heading 5
                            <small> Sub-heading</small>
                        </h5>
                        <h6 className="font-weight-semibold">Heading 6
                            <small> Sub-heading</small>
                        </h6>
                    </div>
                </CardBox>

                <CardBox styleName="col-sm-6 col-12"
                         heading={<IntlMessages id="component.typography.boldHeadings"/>} headerOutside>
                    <div>
                        <h1 className="font-weight-bold">Heading 1
                            <small> Sub-heading</small>
                        </h1>
                        <h2 className="font-weight-bold">Heading 2
                            <small> Sub-heading</small>
                        </h2>
                        <h3 className="font-weight-bold">Heading 3
                            <small> Sub-heading</small>
                        </h3>
                        <h4 className="font-weight-bold">Heading 4
                            <small> Sub-heading</small>
                        </h4>
                        <h5 className="font-weight-bold">Heading 5
                            <small> Sub-heading</small>
                        </h5>
                        <h6 className="font-weight-bold">Heading 6
                            <small> Sub-heading</small>
                        </h6>
                    </div>
                </CardBox>
            </div>

            <div className="row mb-md-4">
                <CardBox styleName="col-md-6 col-12"
                         heading={<IntlMessages id="component.typography.paragraphText"/>} headerOutside>
                    <div>
                        <p className="card-text">Donec imperdiet enim et dignissim interdum. Pellentesque in
                            porttitor elit. Curabitur consectetur, eros elementum lobortis gravida,<strong>neque
                                ipsum auctor</strong> eros, ac egestas sapien nibh quis augue. Cras sagittis
                            vehicula metus at sagittis. Suspendisse tincidunt elementum ex et sagittis.
                            Curabitur cursus vestibulum risus vel vestibulum. Quisque vehicula laoreet ligula.
                        </p>

                        <p className="card-text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Blanditiis dolor libero minima quidem repellendus sapiente sequi?
                            Ad cumque doloribus illum minima porro praesentium, quam. Ea magnam quibusdam quo reiciendis
                            similique!
                        </p>
                    </div>
                </CardBox>

                <CardBox styleName="col-md-6 col-12"
                         heading={<IntlMessages id="component.typography.leadParagraphText"/>}
                         headerOutside>
                    <div>
                        <p className="card-text lead">
                            Donec imperdiet enim et dignissim interdum. Pellentesque in
                            porttitor elit. Curabitur consectetur, eros elementum lobortis gravida,
                        </p>

                        <p className="card-text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Blanditiis dolor libero minima quidem repellendus sapiente sequi?
                            Ad cumque doloribus illum minima porro praesentium, quam. Ea magnam quibusdam quo reiciendis
                            similique!
                        </p>
                    </div>
                </CardBox>
            </div>

            <div className="row mb-md-4">
                <CardBox styleName="col-lg-4 col-sm-6 col-12"
                         heading={<IntlMessages id="component.typography.unstyledList"/>} headerOutside>
                    <ul className="list-unstyled mb-0">
                        <li>Donec imperdiet enim et</li>
                        <li>Gignissim interdum pellentesque</li>
                        <li>In porttitor elit curabitur
                            <ul>
                                <li>Consectetur eros elementum</li>
                                <li>Lobortis gravida eros ac</li>
                                <li>Egestas sapien nibh</li>
                            </ul>
                        </li>
                        <li>Quis augue cras sagittis vehicula</li>
                        <li>metus at sagittis</li>
                    </ul>
                </CardBox>

                <CardBox styleName="col-lg-4 col-sm-6 col-12"
                         heading={<IntlMessages id="component.typography.orderedList"/>} headerOutside>
                    <ol className="mb-0">
                        <li>Donec imperdiet enim et</li>
                        <li>Gignissim interdum pellentesque</li>
                        <li>In porttitor elit curabitur
                            <ol type="i">
                                <li>Consectetur eros elementum</li>
                                <li>Lobortis gravida eros ac</li>
                                <li>Egestas sapien nibh</li>
                            </ol>
                        </li>
                        <li>Quis augue cras sagittis vehicula</li>
                        <li>metus at sagittis</li>
                    </ol>
                </CardBox>

                <CardBox styleName="col-lg-4 col-sm-6 col-12"
                         heading={<IntlMessages id="component.typography.unorderedList"/>} headerOutside>
                    <ul className="mb-0">
                        <li>Donec imperdiet enim et</li>
                        <li>Gignissim interdum pellentesque</li>
                        <li>In porttitor elit curabitur
                            <ul>
                                <li>Consectetur eros elementum</li>
                                <li>Lobortis gravida eros ac</li>
                                <li>Egestas sapien nibh</li>
                            </ul>
                        </li>
                        <li>Quis augue cras sagittis vehicula</li>
                        <li>metus at sagittis</li>
                    </ul>
                </CardBox>

                <CardBox styleName="col-lg-4 col-sm-6 col-12"
                         heading={<IntlMessages id="component.typography.listWithIcons"/>} headerOutside>
                    <ul className="list-unstyled zmdi-hc-ul mb-0">
                        <li><i className="zmdi-hc-li zmdi zmdi-bike"/>Donec imperdiet enim et</li>
                        <li><i className="zmdi-hc-li zmdi zmdi-airplane"/>Gignissim interdum pellentesque</li>
                        <li><i className="zmdi-hc-li zmdi zmdi-bus"/>In porttitor elit curabitur
                            <ul className="list-unstyled zmdi-hc-ul">
                                <li><i className="zmdi-hc-li zmdi zmdi-car-wash"/>Consectetur eros elementum
                                </li>
                                <li><i className="zmdi-hc-li zmdi zmdi-card-giftcard"/>Lobortis gravida eros ac
                                </li>
                                <li><i className="zmdi-hc-li zmdi zmdi-desktop-mac"/>Egestas sapien nibh</li>
                            </ul>
                        </li>
                        <li><i className="zmdi-hc-li zmdi zmdi-case-play"/>Quis augue cras sagittis vehicula
                        </li>
                        <li><i className="zmdi-hc-li zmdi zmdi-mall"/>metus at sagittis</li>
                    </ul>
                </CardBox>

                <CardBox styleName="col-lg-4 col-sm-6 col-12"
                         heading={<IntlMessages id="component.typography.compactList"/>} headerOutside>
                    <ol className="mb-0">
                        <li>Donec imperdiet enim et</li>
                        <li>Gignissim interdum pellentesque</li>
                        <li>In porttitor elit curabitur
                            <ol type="i">
                                <li>Consectetur eros elementum</li>
                                <li>Lobortis gravida eros ac</li>
                                <li>Egestas sapien nibh</li>
                            </ol>
                        </li>
                        <li>Quis augue cras sagittis vehicula</li>
                        <li>metus at sagittis</li>
                    </ol>
                </CardBox>

                <CardBox styleName="col-lg-4 col-sm-6 col-12"
                         heading={<IntlMessages id="component.typography.extendedList"/>} headerOutside>
                    <ul className="mb-0">
                        <li>Donec imperdiet enim et</li>
                        <li>Gignissim interdum pellentesque</li>
                        <li>In porttitor elit curabitur
                            <ul>
                                <li>Consectetur eros elementum</li>
                                <li>Lobortis gravida eros ac</li>
                                <li>Egestas sapien nibh</li>
                            </ul>
                        </li>
                        <li>Quis augue cras sagittis vehicula</li>
                        <li>metus at sagittis</li>
                    </ul>
                </CardBox>

                <CardBox styleName="col-lg-4 col-sm-6 col-12" cardStyle="p-0"
                         heading={<IntlMessages id="component.typography.leftIconGroupedList"/>}
                         headerOutside>
                    <LeftIconList/>
                </CardBox>

                <CardBox styleName="col-lg-4 col-sm-6 col-12" cardStyle="p-0"
                         heading={<IntlMessages id="component.typography.rightIconGroupedList"/>}
                         headerOutside>
                    <RightIconList/>
                </CardBox>

                <CardBox styleName="col-lg-4 col-12" cardStyle="p-0"
                         heading={<IntlMessages id="component.typography.badgesGroupedList"/>}
                         headerOutside>
                    <BadgeIconList/>
                </CardBox>
            </div>

            <div className="row mb-md-4">
                <CardBox styleName="col-md-6 col-12"
                         heading={<IntlMessages id="component.typography.defaultDescriptionList"/>}
                         headerOutside>
                    <ul className="desc-list list-unstyled">
                        <li>
                            <h3 className="card-title">Stars are far away from the earth</h3>
                            <p className="card-text">Donec imperdiet enim et dignissim interdum. Pellentesque in
                                portti tor elit. Curabitur consectetur</p>
                        </li>
                        <li>
                            <h3 className="card-title">Stars are far away from the earth</h3>
                            <p className="card-text">Donec imperdiet enim et dignissim interdum. Pellentesque in
                                portti tor elit. Curabitur consectetur</p>
                        </li>
                        <li>
                            <h3 className="card-title">Stars are far away from the earth</h3>
                            <p className="card-text">Donec imperdiet enim et dignissim interdum. Pellentesque in
                                portti tor elit. Curabitur consectetur</p>
                        </li>

                    </ul>
                </CardBox>

                <CardBox styleName="col-md-6 col-12"
                         heading={<IntlMessages id="component.typography.evenOddDescriptionList"/>}
                         headerOutside>
                    <ul className="even-odd desc-list list-unstyled">
                        <li>
                            <h3 className="card-title">Stars are far away from the earth</h3>
                            <p className="card-text">Donec imperdiet enim et dignissim interdum. Pellentesque in
                                portti tor elit. Curabitur consectetur</p>
                        </li>
                        <li>
                            <h3 className="card-title">Stars are far away from the earth</h3>
                            <p className="card-text">Donec imperdiet enim et dignissim interdum. Pellentesque in
                                portti tor elit. Curabitur consectetur</p>
                        </li>
                        <li>
                            <h3 className="card-title">Stars are far away from the earth</h3>
                            <p className="card-text">Donec imperdiet enim et dignissim interdum. Pellentesque in
                                portti tor elit. Curabitur consectetur</p>
                        </li>

                    </ul>

                </CardBox>
            </div>

            <div className="row mb-md-4">
                <CardBox styleName="col-md-6 col-12" heading={<IntlMessages
                    id="component.typography.leftBlockquoteWithAuthorAvatar"/>} headerOutside>
                    <blockquote className="blockquote">
                        <div className="media">
                            <div className="media-body">
                                <h5 className="mt-0">Donec imperdiet enim et dignissim interdum. Pellentes portti tor
                                    elit. Curabitur consectetur</h5>
                            </div>
                        </div>
                        <footer className="blockquote-footer">Quote author with <cite title="Source Title">Source
                            Title</cite></footer>
                    </blockquote>
                </CardBox>

                <CardBox styleName="col-md-6 col-12" heading={<IntlMessages
                    id="component.typography.rightBlockquoteWithAuthorAvatar"/>} headerOutside>


                    <blockquote className="blockquote blockquote-reverse">
                        <div className="media">
                            <div className="media-body">
                                <h5 className="mt-0">Donec imperdiet enim et dignissim interdum. Pellentes portti tor
                                    elit. Curabitur consectetur</h5>
                            </div>
                        </div>
                        <footer className="blockquote-footer">Quote author with <cite title="Source Title">Source
                            Title</cite></footer>
                    </blockquote>

                </CardBox>
            </div>

            <div className="row mb-md-4">
                <CardBox styleName="col-md-6 col-12" heading={<IntlMessages
                    id="component.typography.leftBlockquoteWithAuthorAvatar"/>} headerOutside>
                    <blockquote className="blockquote">
                        <div className="media">
                            <Avatar className="mr-3 mb-2" alt="Remy Sharp"
                                    src="http://via.placeholder.com/150x150"/>

                            <div className="media-body">
                                <h5 className="mt-0">Donec imperdiet enim et dignissim interdum. Pellentes portti tor
                                    elit. Curabitur consectetur</h5>
                            </div>

                        </div>
                        <footer className="blockquote-footer">Quote author with <cite title="Source Title">Source
                            Title</cite></footer>
                    </blockquote>
                </CardBox>

                <CardBox styleName="col-md-6 col-12" heading={<IntlMessages
                    id="component.typography.rightBlockquoteWithAuthorAvatar"/>} headerOutside>
                    <blockquote className="blockquote blockquote-reverse">
                        <div className="media">
                            <div className="media-body">
                                <h5 className="mt-0">Donec imperdiet enim et dignissim interdum. Pellentes portti tor
                                    elit. Curabitur consectetur</h5>
                            </div>
                            <Avatar className="ml-3 mb-2" alt="Remy Sharp"
                                    src="http://via.placeholder.com/150x150"/>
                        </div>
                        <footer className="blockquote-footer">Quote author with <cite title="Source Title">Source
                            Title</cite></footer>
                    </blockquote>

                </CardBox>
            </div>

            <div className="row">
                <CardBox heading="Address" headerOutside>

                    <address>
                        <strong>Company Name</strong><br/>
                        <span>671 Suite - 782 Block, BackerStreet </span><br/>
                        <span>Colorado, CO 89453</span><br/><br/>
                        <a href="mailto:#" className="text-primary">@:contact@example.com</a><br/>
                        <span>P:+1-(987) 458 3219</span>
                    </address>

                </CardBox>

            </div>
        </div>
    );
};

export default Typography;