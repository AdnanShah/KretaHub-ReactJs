import React, {Component} from 'react';
import YourDailyFeedCell from './YourDailyFeedCell';


let counter = 0;

function createData(title, time, image, isSocial) {
    counter += 1;
    return {id: counter, title, time, image, isSocial};
}

class YourDailyFeed extends Component {
    state = {
        feeds: [
            createData([<a href="javascript:void(0)">Guptil</a>, " has sent you an invitation to join project ",
                <a href="javascript:void(0)">Mouldifi</a>,], 'Today 06:30 pm - 12.10.17', 'http://via.placeholder.com/150x150'),
            createData([<a href="javascript:void(0)">Mich</a>, " uploaded 6 new photos in ",
                <a href="javascript:void(0)">Art
                    Lovers</a>, ' group'], 'Today 06:30 pm - 12.10.17', 'http://via.placeholder.com/150x150'),
            createData([<a
                href="javascript:void(0)">Joshua </a>, 'has shared a post saying this is bigening'], 'Today 06:30 pm - 12.10.17', 'http://via.placeholder.com/150x150', 'true'),
            createData(["Artist of the month ", <a href="javascript:void(0)">Domnic
                Harris</a>, ' awarded today'], 'Today 06:30 pm - 12.10.17', 'http://via.placeholder.com/150x150'),
            createData([<a href="javascript:void(0)">Domnic
                harris</a>, ' commented on 4 keys to make your business unique'], 'Today 06:30 pm - 12.10.17', 'http://via.placeholder.com/150x150'),
        ],
    };

    render() {
        const {feeds} = this.state;
        return (

            <div>
                {feeds.map(feed => {
                    return (
                        <YourDailyFeedCell key={feed.id} feed={feed}/>
                    );
                })}
            </div>
        );
    }
}

export default YourDailyFeed;