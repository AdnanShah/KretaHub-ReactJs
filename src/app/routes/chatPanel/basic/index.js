import React, {Component} from 'react';
import Button from 'material-ui/Button';
import Drawer from 'material-ui/Drawer';
import {connect} from 'react-redux'
import SwipeableViews from 'react-swipeable-views';
import AppBar from 'material-ui/AppBar';
import Tabs, {Tab} from 'material-ui/Tabs';
import {CircularProgress} from 'material-ui/Progress';
import 'jquery-slimscroll/jquery.slimscroll.min';
import IconButton from 'material-ui/IconButton'
import Input from 'material-ui/Input'
import Moment from 'moment';
import ChatUserList from 'components/chatPanel/ChatUserList';
import conversationList from '../data/conversationList';
import Conversation from 'components/chatPanel/Conversation/index';
import users from '../data/chatUsers';
import ContactList from 'components/chatPanel/ContactList/index';
import SearchBox from 'components/SearchBox/index';
import IntlMessages from 'util/IntlMessages';

class ChatPanel extends Component {
    filterContact = (userName) => {
        if (userName === '') {
            return users.filter(user => !user.recent);
        }
        return users.filter((user) =>
            !user.recent && user.name.toLowerCase().indexOf(userName.toLowerCase()) > -1
        );
    };
    filterUsers = (userName) => {
        if (userName === '') {
            return users.filter(user => user.recent);
        }
        return users.filter((user) =>
            user.recent && user.name.toLowerCase().indexOf(userName.toLowerCase()) > -1
        );
    };
    Communication = () => {
        const intl = this.props;
        const {message, selectedUser, conversation} = this.state;
        const {conversationData} = conversation;
        return <div className="chat-main">
            <div className="chat-main-header">
                <IconButton className="d-block d-xl-none chat-btn" aria-label="Menu"
                            onClick={this.onToggleDrawer.bind(this)}>
                    <i className="zmdi zmdi-comment-text"/>
                </IconButton>
                <div className="chat-main-header-info">

                    <div className="chat-avatar mr-2">
                        <div className="chat-avatar-mode">
                            <img src={selectedUser.thumb}
                                 className="rounded-circle size-60"
                                 alt=""/>

                            <span className={`chat-mode ${selectedUser.status}`}/>
                        </div>
                    </div>

                    <div className="chat-contact-name">
                        {selectedUser.name}
                    </div>
                </div>

            </div>

            <div className="chat-list-scroll">
                <Conversation conversationData={conversationData}
                              selectedUser={selectedUser}/>
            </div>

            <div className="chat-main-footer">
                <div className="d-flex flex-row align-items-center" style={{maxHeight: 51}}>
                    <div className="col">
                        <div className="form-group">
                            <textarea
                                id="required" className="border-0 form-control chat-textarea"
                                onKeyUp={this._handleKeyPress.bind(this)}
                                onChange={this.updateMessageValue.bind(this)}
                                value={message}
                                placeholder="Type and hit enter to send message"
                            />
                        </div>
                    </div>
                    <div className="chat-sent">
                        <IconButton
                            onClick={this.submitComment.bind(this)}
                            aria-label="Send message">
                            <i className="zmdi  zmdi-mail-send"/>
                        </IconButton>
                    </div>
                </div>
            </div>
        </div>
    };

    AppUsersInfo = () => {
        return <div className="chat-sidenav-main">
            <div className="bg-grey lighten-5 chat-sidenav-header">

                <div className="chat-user-hd mb-0">
                    <IconButton className="back-to-chats-button size-30" aria-label="back button"
                                onClick={() => {
                                    this.setState({
                                        userState: 1
                                    });
                                }}>
                        <i className="zmdi zmdi-arrow-back"/>
                    </IconButton>
                </div>
                <div className="chat-user chat-user-center">
                    <div className="chat-avatar mx-auto">
                        <img src="http://via.placeholder.com/150x150"
                             className="avatar avatar-shadow rounded-circle size-60 huge" alt="John Doe"/>
                    </div>

                    <div className="user-name h4 my-2">Robert Johnson</div>

                </div>
            </div>
            <div className="chat-sidenav-content">

                <div className="chat-sidenav-scroll card p-4">
                    <form>
                        <div className="form-group mt-4">
                            <label>Mood</label>

                            <Input
                                fullWidth
                                id="exampleTextarea"
                                multiline
                                rows={3}
                                onKeyUp={this._handleKeyPress.bind(this)}
                                onChange={this.updateMessageValue.bind(this)}
                                defaultValue="it's a status....not your diary..."
                                placeholder="Status"
                                margin="none"/>

                        </div>
                    </form>
                </div>

            </div>
        </div>
    };
    ChatUsers = () => {
        return <div className="chat-sidenav-main">

            <div className="chat-sidenav-header">

                <div className="chat-user-hd">

                    <div className="chat-avatar mr-3" onClick={() => {
                        this.setState({
                            userState: 2
                        });
                    }}>
                        <div className="chat-avatar-mode">
                            <img id="user-avatar-button" src="http://via.placeholder.com/150x150"
                                 className="rounded-circle size-50"
                                 alt=""/>
                            <span className="chat-mode online"/>
                        </div>
                    </div>

                    <div className="module-user-info d-flex flex-column justify-content-center">
                        <div className="module-title">
                            <h5 className="mb-0">Robert Johnson</h5>
                        </div>
                        <div className="module-user-detail">
                            <a href="javascript:void(0)" className="text-grey">robert@example.com</a>
                        </div>
                    </div>
                </div>

                <div className="search-wrapper">

                    <SearchBox placeholder="Search or start new chat"
                               onChange={this.updateSearchChatUser.bind(this)}
                               value={this.state.searchChatUser}/>

                </div>
            </div>

            <div className="chat-sidenav-content">
                <AppBar position="static" className="no-shadow chat-tabs-header">
                    <Tabs
                        className="chat-tabs"
                        value={this.state.selectedTabIndex}
                        onChange={this.handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        fullWidth
                    >
                        <Tab label={<IntlMessages id="chat.chatUser"/>}/>
                        <Tab label={<IntlMessages id="chat.contacts"/>}/>
                    </Tabs>
                </AppBar>
                <SwipeableViews
                    index={this.state.selectedTabIndex}
                    onChangeIndex={this.handleChangeIndex}
                >
                    <div className="chat-sidenav-scroll">
                        {this.state.chatUsers.length === 0 ?
                            <div className="p-5">{this.state.userNotFound}</div>
                            :
                            <ChatUserList chatUsers={this.state.chatUsers}
                                          selectedSectionId={this.state.selectedSectionId}
                                          onSelectUser={this.onSelectUser.bind(this)}/>
                        }
                    </div>

                    <div className="chat-sidenav-scroll">
                        {
                            this.state.contactList.length === 0 ?
                                <div className="p-5">{this.state.userNotFound}</div>
                                :
                                <ContactList contactList={this.state.contactList}
                                             selectedSectionId={this.state.selectedSectionId}
                                             onSelectUser={this.onSelectUser.bind(this)}/>
                        }
                    </div>
                </SwipeableViews>

            </div>
        </div>
    };
    _handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.submitComment();
        }
    };

    handleChange = (event, value) => {
        this.setState({selectedTabIndex: value});
    };

    handleChangeIndex = index => {
        this.setState({selectedTabIndex: index});
    };
    onSelectUser = (user) => {
        this.setState({
            loader: true,
            selectedSectionId: user.id,
            drawerState: this.props.drawerState,
            selectedUser: user,
            conversation: this.state.conversationList.find((data) => data.id === user.id)
        });
        setTimeout(() => {
            this.setState({loader: false});
        }, 1500);
    };
    showCommunication = () => {
        return (
            <div className="chat-box">
                <div className="chat-box-main">{
                    this.state.selectedUser === null ?
                        <div className="loader-view">
                            <i className="zmdi zmdi-comment s-128 text-muted"/>
                            <h1 className="text-muted">{<IntlMessages id="chat.selectUserChat"/>}</h1>
                            <Button className="d-block d-xl-none" color="primary"
                                    onClick={this.onToggleDrawer.bind(this)}>{<IntlMessages
                                id="chat.selectContactChat"/>}</Button>
                        </div>
                        : this.Communication()}
                </div>
            </div>)
    };

    constructor() {
        super();
        this.state = {
            loader: false,
            userNotFound: 'No user found',
            drawerState: false,
            selectedSectionId: '',
            selectedTabIndex: 0,
            userState: 1,
            searchChatUser: '',
            contactList: users.filter((user) => !user.recent),
            selectedUser: null,
            message: '',
            chatUsers: users.filter((user) => user.recent),
            conversationList: conversationList,
            conversation: null
        }
    }

    componentDidUpdate() {
        this.manageHeight()
    }

    componentDidMount() {
        this.manageHeight()
    }

    manageHeight() {
        if (this.props.width >= 1200) {
            $('.loader-view').slimscroll({
                height: 'calc(100vh - 290px)'
            });
            $('.chat-list-scroll').slimscroll({
                height: 'calc(100vh - 300px)'
            });

            if (this.state.userState === 1) {
                $('.chat-sidenav-scroll').slimscroll({
                    height: 'calc(100vh - 328px)'
                });
            } else {
                $('.chat-sidenav-scroll').slimscroll({
                    height: 'calc(100vh - 322px)'
                });
            }
        } else {
            $('.loader-view').slimscroll({
                height: 'calc(100vh - 122px)'
            });
            $('.chat-list-scroll').slimscroll({
                height: 'calc(100vh - 255px)'
            });

            if (this.state.userState === 1) {
                $('.chat-sidenav-scroll').slimscroll({
                    height: 'calc(100vh - 1px)'
                });
            } else {
                $('.chat-sidenav-scroll').slimscroll({
                    height: 'calc(100vh - 115px)'
                });
            }
        }
    }

    submitComment() {
        if (this.state.message !== '') {
            const updatedConversation = this.state.conversation.conversationData.concat({
                'type': 'sent',
                'message': this.state.message,
                'sentAt': Moment(new Date).format('hh:mm:ss A'),
            });
            this.setState({
                conversation: {
                    ...this.state.conversation, conversationData: updatedConversation
                },
                message: '',
                conversationList: this.state.conversationList.map(conversationData => {
                    if (conversationData.id === this.state.conversation.id) {
                        return {...this.state.conversation, conversationData: updatedConversation};
                    } else {
                        return conversationData;
                    }
                })
            });
        }
    }

    updateMessageValue(evt) {
        this.setState({
            message: evt.target.value
        });
    }

    updateSearchChatUser(evt) {
        this.setState({
            searchChatUser: evt.target.value,
            contactList: this.filterContact(evt.target.value),
            chatUsers: this.filterUsers(evt.target.value)
        });
    }

    onToggleDrawer() {
        this.setState({
            drawerState: !this.state.drawerState
        });
    }

    render() {
        const {loader, userState, drawerState, selectedUser} = this.state;
        console.log('userState: ', userState);
        return (
            <div className="app-wrapper app-wrapper-module">
                <div className="app-module chat-module animated slideInUpTiny animation-duration-3">
                    <div className="chat-module-box">
                        <div className="d-block d-xl-none">
                            <Drawer className="app-module-sidenav"

                                    open={drawerState}
                                    onClose={this.onToggleDrawer.bind(this)}>
                                {this.ChatUsers()} {/*{userState === 1 ? this.ChatUsers() : this.AppUsersInfo()}*/}
                            </Drawer>
                        </div>
                        <div className="chat-sidenav d-none d-xl-flex">
                            {this.ChatUsers()} {/*{userState === 1 ? this.ChatUsers() : this.AppUsersInfo()}*/}
                        </div>
                        {loader ?
                            <div
                                className="w-100 d-flex justify-content-center align-items-center chat-loader-view">
                                <CircularProgress/>
                            </div> : this.showCommunication()
                        }
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({settings}) => {
    const {width} = settings;
    return {width}
};

export default connect(mapStateToProps)(ChatPanel);