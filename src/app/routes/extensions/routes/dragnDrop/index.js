import React, {Component} from 'react';
import ContactCell from './ContactCell/index'
import contacts from 'app/routes/contact/data/contactList';
import {arrayMove, SortableContainer} from 'react-sortable-hoc';

import ContainerHeader from 'components/ContainerHeader/index';
import IntlMessages from 'util/IntlMessages';

const Contacts = SortableContainer(({contacts}) => {
    return (
        <div className="row">
            {contacts.map((contact, index) => (
                <ContactCell key={index} index={index} contact={contact}/>
            ))}
        </div>
    );
});


class DragNDrop extends Component {

    onSortEnd = ({oldIndex, newIndex}) => {
        this.setState({
            contacts: arrayMove(this.state.contacts, oldIndex, newIndex),
        });
    };

    constructor() {
        super();
        this.state = {
            contacts: contacts,
        }
    }

    render() {
        const {contacts} = this.state;
        return (
            <div>
                <ContainerHeader title={<IntlMessages id="sidebar.extensions.dragNDrop"/>} match={this.props.match}/>
                <div className="animated slideInUpTiny animation-duration-3">
                    <Contacts contacts={contacts} onSortEnd={this.onSortEnd} useDragHandle={true}/>
                </div>
            </div>
        )
    }
}

export default DragNDrop
