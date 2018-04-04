import React from 'react';
import SimpleSnackbar from './sample/SimpleSnackbar';
import PositionedSnackbar from './positioned/PositionedSnackbar';
import DirectionSnackbar from './transitions/DirectionSnackbar';
import FadeSnackbar from './transitions/FadeSnackbar';
import CardBox from 'components/CardBox';
import ContainerHeader from 'components/ContainerHeader';
import {SnackbarContent} from 'material-ui/Snackbar';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import IntlMessages from 'util/IntlMessages';

const action = (
    <Button variant="raised" color="secondary" size="small">
        Click
    </Button>
);

const iconButton = (
    <IconButton color="secondary">
        <i className="zmdi zmdi-alarm-snooze"/>
    </IconButton>
);

const Snackbar = ({match}) => {
    return (
        <div>
            <ContainerHeader title={<IntlMessages id="sidebar.components.snackbars"/>} match={match}/>

            <div className="row">
                <CardBox styleName="col-lg-6 col-12 text-center" childrenStyle="d-flex justify-content-center"
                         heading={<IntlMessages id="component.snackbars.simple"/>}>
                    <div className="d-flex flex-row manage-margin">
                        <SimpleSnackbar><span>Slide</span></SimpleSnackbar>
                        <FadeSnackbar/>
                    </div>
                </CardBox>

                <CardBox styleName="col-lg-6 col-12 text-center" childrenStyle="d-flex justify-content-center"
                         heading={<IntlMessages id="component.snackbars.transition"/>}>
                    <DirectionSnackbar/>
                </CardBox>
            </div>

            <div className="row">
                <CardBox styleName="col-lg-12" heading={<IntlMessages id="component.snackbars.positioned"/>}>
                    <PositionedSnackbar/>
                </CardBox>
            </div>

            <div className="row">
                <CardBox styleName="col-lg-6 col-12 text-center"
                         heading={<IntlMessages id="component.snackbars.onlyMessage"/>}>
                    <SnackbarContent
                        className="mb-2"
                        message={'Various versions have evolved over the years.'}
                    />
                </CardBox>

                <CardBox styleName="col-lg-6 col-12 text-center"
                         heading={<IntlMessages id="component.snackbars.messageWithButton"/>}>
                    <SnackbarContent
                        className="mb-2"
                        message={'All the Lorem Ipsum generators.'}
                        action={action}
                    />
                </CardBox>
            </div>

            <div className="row">
                <CardBox styleName="col-lg-6 col-12 text-center"
                         heading={<IntlMessages id="component.snackbars.withIconButton"/>}>
                    <SnackbarContent
                        className="mb-2"
                        message={'All the Lorem Ipsum generators.'}
                        action={iconButton}
                    />

                </CardBox>

                <CardBox styleName="col-lg-6 col-12 text-center"
                         heading={<IntlMessages id="component.snackbars.multilineText"/>}>
                    <SnackbarContent
                        className="mb-2"
                        message={'All the Lorem Ipsum generators on the \ Internet tend to repeat predefined chunks as necessary generator on the Internet.'}
                    />
                </CardBox>
            </div>

            <div className="row">
                <CardBox styleName="col-12 text-center" heading={<IntlMessages id="component.snackbars.colors"/>}>

                    <div className="row">
                        <div className="col-md-6 col-12">
                            <SnackbarContent
                                className="mb-3 bg-primary"
                                message={'I love candy. I love cookies. I love cupcakes.'}
                            />
                        </div>
                        <div className="col-md-6 col-12">
                            <SnackbarContent
                                className="mb-3 bg-secondary"
                                message={'I love candy. I love cookies. I love cupcakes.'}
                            />

                        </div>
                        <div className="col-md-6 col-12">
                            <SnackbarContent
                                className="mb-3 bg-warning"
                                message={'I love candy. I love cookies. I love cupcakes.'}
                            />
                        </div>

                        <div className="col-md-6 col-12">
                            <SnackbarContent
                                className="mb-3 bg-light text-black"
                                message={'I love candy. I love cookies. I love cupcakes.'}
                            />
                        </div>
                        <div className="col-md-6 col-12">
                            <SnackbarContent
                                className="mb-3 bg-info"
                                message={'I love candy. I love cookies. I love cupcakes.'}
                            />

                        </div>
                        <div className="col-md-6 col-12">
                            <SnackbarContent
                                className="mb-3 bg-danger"
                                message={'I love candy. I love cookies. I love cupcakes.'}
                            />
                        </div>
                    </div>
                </CardBox>
            </div>
        </div>
    );
};

export default Snackbar;

