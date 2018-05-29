import React from 'react';
import Joyride from 'react-joyride';

class Tour extends React.PureComponent {

    static defaultProps = {
        joyride: {
            autoStart: false,
            resizeDebounce: false,
            run: false
        }
    };

    constructor(props) {
        super(props);
        this.state = {
            autoStart: false,
            running: false,
            steps: [
                {
                    title: 'Your profile',
                    text: 'Click here to view or edit your profile, change settings, and log out.',
                    textAlign: 'center',
                    selector: '.user-avatar .user-detail',
                    position: 'left',
                    isFixed: true
                }, {
                    title: 'Dashboard',
                    text: 'Click here to get to this screen, where you can start booking your freight.',
                    textAlign: 'center',
                    selector: '.sidebar-dashboard',
                    position: 'left',
                    isFixed: true
                }, {
                    title: 'Freight Quotes',
                    text: 'Click here to search for available freight quotes.',
                    textAlign: 'center',
                    selector: '.freight-quotes',
                    position: 'left',
                    isFixed: true
                }, {
                    title: 'Bookings',
                    text: ' Click here to see and manage all of your bookings.',
                    textAlign: 'center',
                    selector: '.bookings',
                    position: 'left',
                    isFixed: true
                }, {
                    title: 'Notifications',
                    text: 'Click here to see your notifications.',
                    textAlign: 'center',
                    selector: '.app-container .app-main-container .app-main-header .app-tour',
                    position: 'top',
                    isFixed: true
                }, {
                    title: 'Choose your destination station',
                    text: 'Your freight will be unloaded here.',
                    textAlign: 'center',
                    selector: '.container .destination',
                    position: 'top',
                    isFixed: true
                }, {
                    title: 'Choose your station origin station',
                    text: 'Your freight will be loaded here.',
                    textAlign: 'center',
                    selector: '.container .origin',
                    position: 'top',
                    isFixed: true
                }, {
                    title: 'Choose your freight type ',
                    text: "FCL (Full Container Load) or LCL (Less Than Container Load).",
                    textAlign: 'center',
                    selector: '.container .freight-type',
                    position: 'top',
                    isFixed: true
                }, {
                    title: 'Start searching ',
                    text: 'Click the Search button to see choices for your freight.',
                    textAlign: 'center',
                    selector: '.container .searchButton',
                    position: 'top',
                    isFixed: true
                }, {
                    title: "That's it!",
                    text: 'Start booking your freight now.',
                    textAlign: 'center',
                    selector: '.container',
                    position: 'top',
                    isFixed: false
                }
            ],
            step: 0
        };

        this.handleNextButtonClick = this
            .handleNextButtonClick
            .bind(this);
        this.handleJoyrideCallback = this
            .handleJoyrideCallback
            .bind(this);
    }

    handleNextButtonClick() {
        if (this.state.step === 1) {
            this
                .joyride
                .next();
        }
    }

    handleJoyrideCallback(result) {
        const {joyride} = this.props;

        if (result.type === 'step:before') {
            // Keep internal state in sync with joyride
            this.setState({step: result.index});
        }

        if (result.type === 'finished' && this.state.running) {
            // Need to set our running state to false, so we can restart if we click start
            // again.
            this.setState({running: false});
        }

        if (result.type === 'error:target_not_found') {
            this.setState({
                step: result.action === 'back'
                    ? result.index - 1
                    : result.index + 1,
                autoStart: result.action !== 'close' && result.action !== 'esc'
            });
        }

        if (typeof joyride.callback === 'function') {
            joyride.callback();
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({running: true, step: 0});
        }, 1000);
    }

    render() {
        const {joyride} = this.props;
        const joyrideProps = {
            autoStart: joyride.autoStart || this.state.autoStart,
            callback: this.handleJoyrideCallback,
            debug: false,
            disableOverlay: this.state.step === 1,
            resizeDebounce: joyride.resizeDebounce,
            run: joyride.run || this.state.running,
            scrollToFirstStep: joyride.scrollToFirstStep || true,
            stepIndex: joyride.stepIndex || this.state.step,
            steps: joyride.steps || this.state.steps,
            type: joyride.type || 'continuous'
        };
        return (<Joyride {...joyrideProps} ref={c => (this.joyride = c)}/>)

    }
}

export default Tour;
