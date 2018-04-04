import React, {Component} from 'react';
import Chip from 'material-ui/Chip';
import Avatar from 'material-ui/Avatar';

class ChipsArray extends Component {
    state = {
        chipData: [
            {key: 0, name: 'Domnic Harris', image: 'http://via.placeholder.com/150x150'},
            {key: 1, name: 'Garry Sobars', image: 'http://via.placeholder.com/150x150'},
            {key: 2, name: 'Stella Johnson', image: 'http://via.placeholder.com/150x150'},
            {key: 3, name: 'Alex Dolgove', image: 'http://via.placeholder.com/150x150'},
            {key: 4, name: 'John Smith', image: 'http://via.placeholder.com/150x150'},
        ],
    };

    handleRequestDelete = data => () => {
        const chipData = [...this.state.chipData];
        const chipToDelete = chipData.indexOf(data);
        chipData.splice(chipToDelete, 1);
        this.setState({chipData});
    };

    render() {

        return (
            <div className="manage-margin d-flex flex-wrap">
                {this.state.chipData.map(data => {
                    return (
                        <Chip
                            avatar={<Avatar src={data.image}/>}
                            label={data.name}
                            key={data.key}
                            onDelete={this.handleRequestDelete(data)}
                        />
                    );
                })}
            </div>
        );
    }
}

export default ChipsArray;