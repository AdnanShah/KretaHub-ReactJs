import React, {Component} from 'react';
import {connect} from 'react-redux'
import Drawer from 'material-ui/Drawer';
import {arrayMove} from 'react-sortable-hoc';
import Button from 'material-ui/Button';
import Snackbar from 'material-ui/Snackbar';
import Checkbox from 'material-ui/Checkbox';
import IconButton from 'material-ui/IconButton';
import Menu, {MenuItem} from 'material-ui/Menu';
import 'jquery-slimscroll/jquery.slimscroll.min';
import toDos from '../data/todo';
import filters from '../data/filters';
import labels from '../data/labels';
import options from '../data/options';
import todoConversation from '../data/todoConversation';
import ToDoList from 'components/todo/ToDoList';
import ToDoDetail from 'components/todo/ToDoDetail/index';
import AppModuleHeader from 'components/AppModuleHeader/index';
import {CircularProgress} from 'material-ui/Progress';
import IntlMessages from 'util/IntlMessages';

const ITEM_HEIGHT = 34;

class ToDo extends Component {

    onSortEnd = ({oldIndex, newIndex}) => {
        this.setState({
            toDos: arrayMove(this.state.toDos, oldIndex, newIndex),
        });
    };
    onLabelSelect = event => {
        this.setState({
            anchorEl: event.currentTarget,
            labelMenuState: !this.state.labelMenuState
        })
    };
    onOptionMenuSelect = event => {
        this.setState({
            anchorEl: event.currentTarget,
            optionMenuState: !this.state.optionMenuState
        })
    };
    onOptionMenuItemSelect = (option) => {
        switch (option.title) {
            case 'All':
                this.handleRequestClose();
                this.getAllTodo();
                break;
            case 'None':
                this.handleRequestClose();
                this.getUnselectedAllTodo();
                break;
            case 'Starred':
                this.handleRequestClose();
                this.getStarredToDo();
                break;
            case 'Unstarred':
                this.handleRequestClose();
                this.getUnStarredTodo();
                break;
            case 'Important':
                this.handleRequestClose();
                this.getImportantToDo();
                break;
            case 'Unimportant':
                this.handleRequestClose();
                this.getUnimportantToDo();
                break;
        }
    };
    getAllTodo = () => {
        let toDos = this.state.allToDos.map((todo) => todo ? {
            ...todo,
            selected: true
        } : todo);
        this.setState({
            selectedToDos: toDos.length,
            allToDos: toDos,
            optionName: 'All',
            toDos: toDos
        });
    };
    getUnselectedAllTodo = () => {
        let toDos = this.state.allToDos.map((todo) => todo ? {
            ...todo,
            selected: false
        } : todo);
        this.setState({
            selectedToDos: 0,
            allToDos: toDos,
            optionName: 'None',
            toDos: toDos
        });
    };
    getStarredToDo = () => {
        let selectedToDos = 0;
        let toDos = this.state.allToDos.map((todo) => {
            if (todo.starred) {
                selectedToDos++;
                return {...todo, selected: true};
            }
            return {...todo, selected: false}
        });
        this.setState({
            selectedToDos: selectedToDos,
            allToDos: toDos,
            toDos: toDos.filter(todo => !todo.deleted)
        });
        return toDos;
    };
    getUnStarredTodo = () => {
        let selectedToDos = 0;
        let toDos = this.state.allToDos.map((todo) => {
            if (!todo.starred) {
                selectedToDos++;
                return {...todo, selected: true};
            }
            return {...todo, selected: false}
        });
        this.setState({
            selectedToDos: selectedToDos,
            allToDos: toDos,
            optionName: 'Unstarred',
            toDos: toDos.filter(todo => !todo.deleted)
        });
        return toDos;
    };
    getImportantToDo = () => {
        let selectedToDos = 0;
        let toDos = this.state.allToDos.map((todo) => {
            if (todo.important) {
                selectedToDos++;
                return {...todo, selected: true};
            }
            return {...todo, selected: false}
        });
        this.setState({
            selectedToDos: selectedToDos,
            allToDos: toDos,
            optionName: 'Important',
            toDos: toDos.filter(todo => !todo.deleted)
        });
        return toDos;
    };
    getUnimportantToDo = () => {
        let selectedToDos = 0;
        let toDos = this.state.allToDos.map((todo) => {
            if (!todo.important) {
                selectedToDos++;
                return {...todo, selected: true};
            }
            return {...todo, selected: false}
        });
        this.setState({
            selectedToDos: selectedToDos,
            allToDos: toDos,
            optionName: 'Unimportant',
            toDos: toDos.filter(todo => !todo.deleted)
        });

        return toDos;
    };
    onLabelMenuItemSelect = (label) => {
        this.handleRequestClose();
        const toDos = this.state.allToDos.map(todo => {
                if (todo.selected) {
                    if (todo.labels.includes(label.id)) {
                        return {...todo, labels: this.removeLabel(todo, label.id)};
                    } else {
                        return {...todo, labels: this.addLabel(todo, label.id)};
                    }
                } else {
                    return todo;
                }
            }
        );
        this.setState({
            alertMessage: 'Label Updated Successfully',
            showMessage: true,
            allToDos: toDos,
            toDos: toDos
        });
    };
    handleRequestClose = () => {
        this.setState({showMessage: false, addTodo: false, labelMenuState: false, optionMenuState: false,});
    };
    onLabelUpdate = (data, label) => {
        if (data.labels.includes(label.id)) {
            data.labels = this.removeLabel(data, label.id);
        } else {
            data.labels = this.addLabel(data, label.id);
        }
        this.handleRequestClose();
        const toDos = this.state.allToDos.map(todo => {
                if (todo.id === data.id) {
                    return data;
                } else {
                    return todo;
                }
            }
        );

        this.setState({
            alertMessage: 'Label Updated Successfully',
            showMessage: true,
            currentTodo: data,
            allToDos: toDos,
            toDos: toDos,
        });
    };
    onMarkAsStart = (data) => {
        const toDos = this.state.allToDos.map(todo => {
            if (todo.id === data.id) {
                return data;
            } else {
                return todo;
            }
        });
        this.setState({
            alertMessage: 'ToDo Updated Successfully',
            showMessage: true,
            allToDos: toDos,
            toDos: toDos,
        });
    };

    onToDoUpdate = (data) => {
        this.handleRequestClose();
        const toDos = this.state.allToDos.map(todo => {
            if (todo.id === data.id) {
                return data;
            } else {
                return todo;
            }
        });
        this.setState({
            alertMessage: 'ToDo Updated Successfully',
            showMessage: true,
            currentTodo: data,
            allToDos: toDos,
            toDos: toDos,
        });
    };


    onDeleteToDo = (data) => {
        let selectedToDos = 0;
        const toDos = this.state.allToDos.map(todo => {
                if (todo.selected) {
                    selectedToDos++
                }
                if (data.id === todo.id) {
                    if (todo.selected) {
                        selectedToDos--
                    }
                    return {...todo, deleted: true};
                } else {
                    return todo;
                }
            }
        );
        this.setState({
            alertMessage: 'ToDo Deleted Successfully',
            showMessage: true,
            allToDos: toDos,
            currentTodo: null,
            selectedToDos: selectedToDos,
            toDos: toDos.filter((todo) => !todo.deleted)
        });

    };
    getNavFilters = () => {
        return filters.map((filter, index) =>
            <li key={index} onClick={() => {
                const filterMails = this.state.allToDos.filter(todo => {
                    if (filter.id === 0 && todo.starred) {
                        return todo
                    } else if (filter.id === 1 && todo.important) {
                        return todo
                    } else if (filter.id === 2 && todo.important) {
                        return todo
                    } else if (filter.id === 3 && todo.important) {
                        return todo
                    } else if (filter.id === 4 && todo.completed) {
                        return todo
                    } else if (filter.id === 5 && todo.deleted) {
                        return todo
                    }
                });
                this.setState({
                    loader: true,
                    currentTodo: null,
                    filter: filter.id,
                    toDos: filterMails
                });
                setTimeout(() => {
                    this.setState({loader: false});
                }, 1500);
            }
            }>
                <a href="javascript:void(0)" className={filter.id === this.state.selectedSectionId ? 'active' : ''}>
                    <i className={`zmdi zmdi-${filter.icon}`}/>
                    <span>{filter.title}</span>
                </a>
            </li>
        )
    };
    getNavLabels = () => {
        return labels.map((label, index) =>
            <li key={index} onClick={() => {
                const filterMails = this.state.allToDos.filter(todo => todo.labels.includes(label.id));
                this.setState({
                    loader: true,
                    currentTodo: null,
                    toDos: filterMails
                });
                setTimeout(() => {
                    this.setState({loader: false});
                }, 1500);
            }
            }>
                <a href="javascript:void(0)">
                    <i className={`zmdi zmdi-circle text-${label.color}`}/>
                    <span>{label.title}</span>
                </a>
            </li>
        )
    };
    ToDoSideBar = () => {
        return <div className="module-side">
            <div className="module-side-header">
                <div className="module-logo">
                    <i className="zmdi zmdi-email mr-4"/>
                    <span><IntlMessages id="sidebar.appModule.toDo"/></span>
                </div>

            </div>
            <div className="module-side-content">
                <div className="module-side-scroll">
                    <div className="module-add-task">
                        <Button variant="raised" color="primary" className="btn btn-primary btn-block"
                                onClick={() => {
                                    this.setState({addTodo: true})
                                }}> <IntlMessages id="todo.addTask"/> </Button>
                    </div>
                    <ul className="module-nav">

                        <li onClick={() => {
                            this.setState({
                                currentTodo: null,
                                toDos: this.state.allToDos
                            });
                        }
                        }>
                            <a href="javascript:void(0)">
                                <i className="zmdi zmdi-menu"/>
                                <span><IntlMessages id="todo.all"/></span>
                            </a>
                        </li>

                        <li className="module-nav-label">
                            <IntlMessages id="todo.filters"/>
                        </li>

                        {this.getNavFilters()}

                        <li className="module-nav-label">
                            <IntlMessages id="todo.labels"/>
                        </li>

                        {this.getNavLabels()}

                    </ul>
                </div>
            </div>
        </div>
    };
    searchTodo = (searchText) => {
        if (searchText === '') {
            this.setState({toDos: this.state.allToDos.filter((todo) => !todo.deleted)});
        } else {
            const searchToDos = this.state.allToDos.filter((todo) =>
                !todo.deleted && todo.title.toLowerCase().indexOf(searchText.toLowerCase()) > -1);
            this.setState({
                toDos: searchToDos
            });
        }
    };
    showToDos = ({currentTodo, toDos, conversation, user}) => {
        return currentTodo === null ?
            <ToDoList toDos={toDos} onSortEnd={this.onSortEnd}
                      onMarkAsStart={this.onMarkAsStart.bind(this)}
                      onTodoSelect={this.onTodoSelect.bind(this)}
                      onTodoChecked={this.onTodoChecked.bind(this)} useDragHandle={true}/>
            :
            <ToDoDetail todo={currentTodo} user={user}
                        conversation={conversation}
                        onLabelUpdate={this.onLabelUpdate.bind(this)}
                        onToDoUpdate={this.onToDoUpdate.bind(this)}
                        onDeleteToDo={this.onDeleteToDo.bind(this)}/>
    };

    constructor() {
        super();
        this.state = {
            searchTodo: '',
            alertMessage: '',
            loader: false,
            showMessage: false,
            drawerState: false,
            optionName: 'None',
            anchorEl: null,
            allToDos: toDos,
            currentTodo: null,
            user: {
                name: 'Robert Johnson',
                email: 'robert.johnson@example.com',
                avatar: 'http://via.placeholder.com/150x150'
            },
            selectedToDos: 0,
            labelMenuState: false,
            optionMenuState: false,
            toDos: toDos,
            filter: -1,
            todoConversation,
            conversation: null
        }
    }

    componentDidMount() {
        this.manageHeight();
    }

    componentDidUpdate() {
        this.manageHeight();
    }

    getToDoConversation(id) {
        return todoConversation.find((conversation) => conversation.id === id);
    }

    onTodoChecked(data) {
        data.selected = !data.selected;
        let selectedToDos = 0;
        const toDos = this.state.toDos.map(todo => {
                if (todo.selected) {
                    selectedToDos++;
                }
                if (todo.id === data.id) {
                    if (todo.selected) {
                        selectedToDos++;
                    }
                    return data;
                } else {
                    return todo;
                }
            }
        );
        this.setState({
            selectedToDos: selectedToDos,
            toDos: toDos
        });
    }

    onAllTodoSelect() {
        const selectAll = this.state.selectedToDos < this.state.toDos.length;
        if (selectAll) {
            this.getAllTodo();
        } else {
            this.getUnselectedAllTodo();
        }
    }

    onTodoAdd(data) {
        this.setState(
            {
                toDos: this.state.allToDos.concat(data),
                allToDos: this.state.allToDos.concat(data)
            }
        );
    }

    manageHeight() {
        if (this.props.width >= 1200) {
            $('.loader-view').slimscroll({
                height: 'calc(100vh - 265px)'
            });
            if (this.state.currentTodo === null) {
                $('.module-list-scroll').slimscroll({
                    height: 'calc(100vh - 265px)'
                });
            } else {
                $('.module-list-scroll').slimscroll({
                    height: 'calc(100vh - 325px)'
                });
            }
            $('.module-side-scroll').slimscroll({
                height: 'calc(100vh - 200px)'
            });
        } else if (this.props.width >= 992) {
            $('.loader-view').slimscroll({
                height: 'calc(100vh - 245px)'
            });
            if (this.state.currentTodo === null) {
                $('.module-list-scroll').slimscroll({
                    height: 'calc(100vh - 245px)'
                });
            } else {
                $('.module-list-scroll').slimscroll({
                    height: 'calc(100vh - 310px)'
                });
            }
            $('.module-side-scroll').slimscroll({
                height: 'calc(100vh - 80px)'
            });
        } else {
            $('.loader-view').slimscroll({
                height: 'calc(100vh - 245px)'
            });
            if (this.state.currentTodo === null) {
                $('.module-list-scroll').slimscroll({
                    height: 'calc(100vh - 245px)'
                });
            } else {
                $('.module-list-scroll').slimscroll({
                    height: 'calc(100vh - 310px)'
                });
            }
            $('.module-side-scroll').slimscroll({
                height: 'calc(100vh - 80px)'
            });
        }
    }

    onTodoSelect(todo) {
        let conversationList = this.getToDoConversation(todo.id);
        if (conversationList) {
            conversationList = conversationList.conversationData;
        } else {
            conversationList = [];
        }
        this.setState({
            currentTodo: todo,
            loader: true,
            conversation: conversationList
        });
        setTimeout(() => {
            this.setState({loader: false});
        }, 1500);
    }

    removeLabel(todo, label) {
        todo.labels.splice(todo.labels.indexOf(label), 1);
        return todo.labels;
    }

    addLabel(todo, label) {
        todo.labels = todo.labels.concat(label);
        return todo.labels
    }

    onToggleDrawer() {
        this.setState({
            drawerState: !this.state.drawerState
        });
    }

    updateSearch(evt) {
        this.setState({
            searchTodo: evt.target.value,
        });
        this.searchTodo(evt.target.value)
    }

    render() {
        const {selectedToDos, loader, currentTodo, toDos, conversation, user, alertMessage, showMessage} = this.state;

        return (
            <div className="app-wrapper">
                <div className="animated slideInUpTiny animation-duration-3">
                    <div className="app-module">
                        <div className="d-block d-xl-none">
                            <Drawer
                                    open={this.state.drawerState}
                                    onClose={this.onToggleDrawer.bind(this)}>
                                {this.ToDoSideBar()}
                            </Drawer>
                        </div>
                        <div className="app-module-sidenav d-none d-xl-flex">
                            {this.ToDoSideBar()}
                        </div>

                        <div className="module-box">
                            <div className="module-box-header">

                                <IconButton className="drawer-btn d-block d-xl-none" aria-label="Menu"
                                            onClick={this.onToggleDrawer.bind(this)}>
                                    <i className="zmdi zmdi-menu"/>
                                </IconButton>
                                <AppModuleHeader placeholder="Search To Do" user={this.state.user}
                                                 onChange={this.updateSearch.bind(this)}
                                                 value={this.state.searchTodo}/>
                            </div>
                            <div className="module-box-content">
                                {this.state.currentTodo === null ?
                                    <div className="module-box-topbar module-box-topbar-todo d-flex flex-row">
                                        <Checkbox color="primary"
                                                  indeterminate={selectedToDos > 0 && selectedToDos < toDos.length}
                                                  checked={selectedToDos > 0}
                                                  onChange={this.onAllTodoSelect.bind(this)}
                                                  value="SelectMail"/>

                                        <div onClick={this.onOptionMenuSelect.bind(this)}>
                                            <span className="px-2"> {this.state.optionName}</span>
                                            <IconButton>
                                                <i className="zmdi zmdi-caret-down"/>
                                            </IconButton>
                                        </div>

                                        {( selectedToDos > 0) &&
                                        <IconButton
                                            onClick={this.onLabelSelect.bind(this)}>
                                            <i className="zmdi zmdi-label-alt"/>
                                        </IconButton>}
                                    </div>
                                    :
                                    <div className="module-box-topbar">
                                        <IconButton
                                            onClick={() => {
                                                this.setState({
                                                    currentTodo: null
                                                })
                                            }}>
                                            <i className="zmdi zmdi-arrow-back"/>
                                        </IconButton>
                                    </div>
                                }


                                <Menu id="option-menu"
                                      anchorEl={this.state.anchorEl}
                                      open={this.state.optionMenuState}
                                      onClose={this.handleRequestClose}
                                      style={{maxHeight: ITEM_HEIGHT * 4.5}}
                                      MenuListProps={{
                                          style: {
                                              width: 150,
                                          },
                                      }}>
                                    {options.map(option =>
                                        <MenuItem key={option.title}
                                                  onClick={this.onOptionMenuItemSelect.bind(this, option)}>
                                            {option.title}
                                        </MenuItem>,
                                    )}
                                </Menu>

                                <Menu id="label-menu"
                                      anchorEl={this.state.anchorEl}
                                      open={this.state.labelMenuState}
                                      onClose={this.handleRequestClose}
                                      style={{maxHeight: ITEM_HEIGHT * 4.5}}
                                      MenuListProps={{
                                          style: {
                                              width: 150,
                                          },
                                      }}>
                                    {labels.map(label =>
                                        <MenuItem key={label.id}
                                                  onClick={this.onLabelMenuItemSelect.bind(this, label)}>
                                            {label.title}
                                        </MenuItem>,
                                    )}
                                </Menu>

                                {loader ?
                                    <div
                                        className="loader-view-block">
                                        <div className="loader-view">
                                            <CircularProgress/>
                                        </div>
                                    </div> :
                                    this.showToDos(this.state)
                                }
                            </div>
                        </div>
                    </div>
                    <Snackbar
                        anchorOrigin={{vertical: 'top', horizontal: 'center'}}
                        open={showMessage}
                        autoHideDuration={3000}
                        onClose={this.handleRequestClose}
                        SnackbarContentProps={{
                            'aria-describedby': 'message-id',
                        }}
                        message={<span id="message-id">{alertMessage}</span>}
                    />
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({settings}) => {
    const {width} = settings;
    return {width}
};
export default connect(mapStateToProps)(ToDo);