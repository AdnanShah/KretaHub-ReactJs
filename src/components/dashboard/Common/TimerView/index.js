import React from 'react';
import IconButton from 'material-ui/IconButton';
import Avatar from 'material-ui/Avatar';
import CardMenu from 'components/dashboard/Common/CardMenu';

class TimerView extends React.Component {

    onOptionMenuSelect = event => {
        this.setState({menuState: true, anchorEl: event.currentTarget});
    };
    handleRequestClose = () => {
        this.setState({menuState: false});
    };

    constructor() {
        super();
        this.state = {
            anchorEl: undefined,
            menuState: false,
        }
    }

    render() {
        const {headerColor} = this.props;
        const {anchorEl, menuState} = this.state;
        return (
            <div className="jr-card">

                <div className={`jr-card-header-color text-center bg-${headerColor}`}>
                    <div className="jr-card-header-top">
                        <IconButton className="jr-menu-icon mr-auto" aria-label="Menu">
                            <span className="menu-icon bg-white"/>
                        </IconButton>
                        <IconButton onClick={this.onOptionMenuSelect.bind(this)}><i
                            className="zmdi zmdi-more-vert text-white"/></IconButton>
                    </div>

                    <Avatar className="bg-blue lighten-4 size-100 mx-auto mb-3"><h1
                        className="m-0 text-blue text-darken-4 font-weight-bold">24</h1></Avatar>


                    <div className="jr-card-hd-content text-white">
                        <h2 className="text-white">Monday</h2>
                        <p className="font-weight-bold">July 2017</p>
                    </div>
                </div>
                <div className="jr-card-body">

                    <div className="d-flex flex-column">
                        <div className="list-line-item">
                            <div className={`list-line-badge bg-${headerColor}`}/>

                            <div className="list-line-content">
                                <h3 className={`mb-1 text-${headerColor}`}>Learning React</h3>
                                <p className="text-muted">6:30 pm</p>
                            </div>
                        </div>

                        <div className="list-line-item">
                            <div className="list-line-badge bg-danger"/>

                            <div className="list-line-content">
                                <h3 className="text-danger mb-1">Logo Design</h3>
                                <p className="text-muted">7:15 pm</p>
                            </div>
                        </div>

                        <div className="list-line-item">
                            <div className="list-line-badge bg-success"/>

                            <div className="list-line-content">
                                <h3 className="text-success mb-1">Timesheet Setup</h3>
                                <p className="text-muted">8:45 pm</p>
                            </div>
                        </div>

                    </div>
                </div>

                <CardMenu menuState={menuState} anchorEl={anchorEl}
                          handleRequestClose={this.handleRequestClose.bind(this)}/>
            </div>
        )
    }
}

export default TimerView;

