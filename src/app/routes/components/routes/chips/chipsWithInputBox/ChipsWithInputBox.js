import React, {Component} from 'react';
import Chip from 'material-ui/Chip';
import Avatar from 'material-ui/Avatar';
import Input from 'material-ui/Input';

let count = 5;

class chipsWithInputBox extends Component {
    state = {
        name: '',
        chipData: [
            {key: 0, name: 'Domnic Harris'},
            {key: 1, name: 'Garry Sobars'},
            {key: 2, name: 'Stella Johnson'},
            {key: 3, name: 'Alex Dolgove'},
            {key: 4, name: 'John Smith'},
        ],
    };

    handleRequestDelete = data => () => {
        const chipData = [...this.state.chipData];
        const chipToDelete = chipData.indexOf(data);
        chipData.splice(chipToDelete, 1);
        this.setState({chipData});
    };

    onValueChange = (e) => {
        this.setState({name: e.target.value});
    };

    _handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.setState({
                name: '',
                chipData: this.state.chipData.concat({key: count++, name: e.target.value})
            })
        }
    };

    render() {

        return (
            <div className="manage-margin d-flex flex-wrap">
                {this.state.chipData.map(data => {
                    return (
                        <Chip
                            avatar={<Avatar>{data.name.charAt(0).toUpperCase()}</Avatar>}
                            label={data.name}
                            key={data.key}
                            onDelete={this.handleRequestDelete(data)}
                        />
                    );
                })}
                <Input type="text" placeholder="add more user"
                    onChange={this.onValueChange.bind(this)} value={this.state.name}
                           onKeyPress={this._handleKeyPress.bind(this)}/>
            </div>
        );
    }
}

export default chipsWithInputBox;