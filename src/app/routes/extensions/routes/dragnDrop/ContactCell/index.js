import React from 'react';
import IconButton from 'material-ui/IconButton'
import Menu, {MenuItem} from 'material-ui/Menu';
import {SortableElement, SortableHandle} from 'react-sortable-hoc';

const DragHandle = SortableHandle(() =>
    <i className="zmdi zmdi-menu draggable-icon" style={{fontSize: 25}}/>);

class ContactCell extends React.Component {

    onContactOptionSelect = event => {
        this.setState({menuState: true, anchorEl: event.currentTarget});
    };
    handleRequestClose = () => {
        this.setState({menuState: false});
    };
    onDeleteContact = (contact) => {
        this.setState({addContactState: false});
        this.props.onDeleteContact(contact);
    };

    constructor() {
        super();
        this.state = {
            anchorEl: undefined,
            menuState: false,
            addContactState: false,
        }
    }

    render() {
        const {contact} = this.props;
        const {menuState, anchorEl} = this.state;
        const {name, thumb, email, phone, designation, starred} = contact;
        const ITEM_HEIGHT = 40;
        const options = [
            'Edit',
            'Delete',
        ];
        return (
            <div className="col-12 contact-item ripple row no-gutters align-items-center py-2 px-3 py-sm-4 px-sm-6">

                <DragHandle />
                {(thumb === null || thumb === '') ?
                    <div className="rounded-circle size-40 bg-blue text-center text-white mx-4" style={{fontSize: 20}}>
                        {name.charAt(0).toUpperCase()}
                    </div> :
                    <img className="rounded-circle size-40 mx-4" alt={name} src={thumb} />}

                <div className="col text-truncate font-weight-bold">{name}</div>


                <div className="col email text-truncate px-1 d-none d-lg-flex">
                    {email}
                </div>

                <div className="col phone text-truncate px-1 d-none d-md-flex">
                    {phone}
                </div>

                <div className="col job-title text-truncate px-1 d-none d-sm-flex">
                    {designation}
                </div>


                <div className="col-auto actions">
                    <IconButton onClick={() => {
                    }}>
                        {starred ? <i className="zmdi zmdi-star" /> : <i className="zmdi zmdi-star-outline" />}
                    </IconButton>

                    <IconButton onClick={this.onContactOptionSelect}>
                        <i className="zmdi zmdi-more-vert" />
                    </IconButton>

                    <Menu id="long-menu"
                          anchorEl={anchorEl}
                          open={menuState}
                          onClose={this.handleRequestClose}
                          style={{maxHeight: ITEM_HEIGHT * 4.5}}
                          MenuListProps={{
                              style: {
                                  width: 100,
                              },
                          }}>
                        {options.map(option =>
                            <MenuItem key={option} onClick={() => {
                                this.handleRequestClose();
                            }
                            }>
                                {option}
                            </MenuItem>,
                        )}
                    </Menu>
                </div>
            </div>
        )
    }
}

export default SortableElement(ContactCell);