import React, {Component} from 'react';
import {LinearProgress} from 'material-ui/Progress';

class LinearDeterminate extends Component {
    timer;
    state = {
        completed: 0,
    };
    progress = () => {
        const {completed} = this.state;
        if (completed > 100) {
            this.setState({completed: 0});
        } else {
            const diff = Math.random() * 10;
            this.setState({completed: completed + diff});
        }
    };

    componentDidMount() {
        this.timer = setInterval(this.progress, 500);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {
        return (
            <div>
                <LinearProgress variant="determinate" value={this.state.completed}/>
                <br />
                <LinearProgress color="secondary" variant="determinate" value={this.state.completed}/>
            </div>
        );
    }
}


export default LinearDeterminate;