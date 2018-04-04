import React, {Component} from 'react';
import {LinearProgress} from 'material-ui/Progress';

class LinearBuffer extends Component {
    timer;
    state = {
        completed: 0,
        buffer: 10,
    };
    progress = () => {
        const {completed} = this.state;
        if (completed > 100) {
            this.setState({completed: 0, buffer: 10});
        } else {
            const diff = Math.random() * 10;
            const diff2 = Math.random() * 10;
            this.setState({completed: completed + diff, buffer: completed + diff + diff2});
        }
    };

    componentDidMount() {
        this.timer = setInterval(this.progress, 500);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {
        const {completed, buffer} = this.state;
        return (
            <div>
                <LinearProgress mode="buffer" value={completed} valueBuffer={buffer} />
                <br />
                <LinearProgress color="secondary" mode="buffer" value={completed} valueBuffer={buffer}/>
            </div>
        );
    }
}

export default LinearBuffer;