import React from 'react';
import Menu, {MenuItem} from 'material-ui/Menu';
import IntlMessages from 'util/IntlMessages';

class CardMenu extends React.Component {

    render() {
        const ITEM_HEIGHT = 40;
        const options = [
            <IntlMessages id="popup.updateData"/>,
            <IntlMessages id="popup.detailedLog"/>,
            <IntlMessages id="popup.statistics"/>,
            <IntlMessages id="popup.clearData"/>
        ];
        const {menuState, anchorEl, handleRequestClose} = this.props;
        return (
            <Menu id="long-menu"
                  anchorEl={anchorEl}
                  open={menuState}
                  onClose={handleRequestClose}
                  style={{maxHeight: ITEM_HEIGHT * 4.5}}
                  MenuListProps={{
                      style: {
                          width: 150,
                          paddingTop: 0,
                          paddingBottom: 0
                      },
                  }}>
                {options.map(option =>
                    <MenuItem key={option} onClick={handleRequestClose}>
                        {option}
                    </MenuItem>,
                )}
            </Menu>
        );
    }

}

export default CardMenu;