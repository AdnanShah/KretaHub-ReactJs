import React from 'react';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import CardBox from 'components/CardBox/index';
import ContainerHeader from 'components/ContainerHeader/index';
import IntlMessages from 'util/IntlMessages';

class Example extends React.Component {
    createNotification = (type) => {
        return () => {
            switch (type) {
                case 'info':
                    NotificationManager.info(<IntlMessages id="notification.infoMsg"/>);
                    break;
                case 'success':
                    NotificationManager.success(<IntlMessages id="notification.successMessage"/>, <IntlMessages
                        id="notification.titleHere"/>);
                    break;
                case 'warning':
                    NotificationManager.warning(<IntlMessages id="notification.warningMessage"/>, <IntlMessages
                        id="notification.closeAfter3000ms"/>, 3000);
                    break;
                case 'error':
                    NotificationManager.error(<IntlMessages id="notification.errorMessage"/>, <IntlMessages
                        id="notification.clickMe"/>, 5000, () => {
                        alert('callback');
                    });
                    break;
            }
        };
    };

    render() {
        return (
            <div>
                <ContainerHeader title={<IntlMessages id="extension.notification"/>} match={this.props.match}/>

                <div className="row">
                    <CardBox styleName="col-12" heading="React Notification" childrenStyle="text-center">
                        <div>
                            <button className='btn btn-info'
                                    onClick={this.createNotification('info')}><IntlMessages id="notification.info"/>
                            </button>
                            <button className='btn btn-success'
                                    onClick={this.createNotification('success')}><IntlMessages
                                id="notification.success"/>
                            </button>
                            <button className='btn btn-warning'
                                    onClick={this.createNotification('warning')}><IntlMessages
                                id="notification.warning"/>
                            </button>
                            <button className='btn btn-danger'
                                    onClick={this.createNotification('error')}><IntlMessages id="notification.error"/>
                            </button>
                        </div>

                    </CardBox>
                </div>

                <NotificationContainer/>
            </div>
        );
    }
}

export default Example;