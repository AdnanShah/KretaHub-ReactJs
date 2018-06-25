/* eslint-disable react/prop-types */

import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Typography from "material-ui/Typography";
import Input from "material-ui/Input";
import TextField from "material-ui/TextField";
import MenuItem from "material-ui/Menu/MenuItem";
// import ArrowDropDownIcon from 'material-ui/icons/ArrowDropDown';
// import CancelIcon from 'material-ui/icons/Cancel';
// import ArrowDropUpIcon from 'material-ui/icons/ArrowDropUp';
// import ClearIcon from 'material-ui/icons/Clear';
import Chip from "material-ui/Chip";
import Select from "react-select";
import "react-select/dist/react-select.css";
import locality from "./jsonDataSource/locality-ID.json";
import Icon from "material-ui/Icon";

// const suggestions = [
//   { label: 'Afghanistan' },
//   { label: 'Aland Islands' },
//   { label: 'Albania' },
//   { label: 'Algeria' },
//   { label: 'American Samoa' },
//   { label: 'Andorra' },
//   { label: 'Angola' },
//   { label: 'Anguilla' },
//   { label: 'Antarctica' },
//   { label: 'Antigua and Barbuda' },
//   { label: 'Argentina' },
//   { label: 'Armenia' },
//   { label: 'Aruba' },
//   { label: 'Australia' },
//   { label: 'Austria' },
//   { label: 'Azerbaijan' },
//   { label: 'Bahamas' },
//   { label: 'Bahrain' },
//   { label: 'Bangladesh' },
//   { label: 'Barbados' },
//   { label: 'Belarus' },
//   { label: 'Belgium' },
//   { label: 'Belize' },
//   { label: 'Benin' },
//   { label: 'Bermuda' },
//   { label: 'Bhutan' },
//   { label: 'Bolivia, Plurinational State of' },
//   { label: 'Bonaire, Sint Eustatius and Saba' },
//   { label: 'Bosnia and Herzegovina' },
//   { label: 'Botswana' },
//   { label: 'Bouvet Island' },
//   { label: 'Brazil' },
//   { label: 'British Indian Ocean Territory' },
//   { label: 'Brunei Darussalam' },
// ].map(suggestion => ({
//   value: suggestion.label,
//   label: suggestion.label,
// }));
const suggestions = locality.map(suggestion => ({
  value: suggestion.name,
  label: suggestion.name
}));

class Option extends React.Component {
  handleClick = event => {
    this.props.onSelect(this.props.option, event);
  };

  render() {
    const { children, isFocused, isSelected, onFocus } = this.props;

    return (
      <MenuItem
        onFocus={onFocus}
        selected={isFocused}
        onClick={this.handleClick}
        component="div"
        style={{
          fontWeight: isSelected ? 500 : 400
        }}
      >
        {children}
      </MenuItem>
    );
  }
}

function SelectWrapped(props) {
  const { classes, ...other } = props;

  return (
    <Select
      optionComponent={Option}
      noResultsText={<Typography>{"No results found"}</Typography>}
      arrowRenderer={arrowProps => {
        return arrowProps.isOpen ? (
          <Icon>arrow_drop_up</Icon>
        ) : (
          <Icon>arrow_drop_down</Icon>
        );
      }}
      // clearRenderer={() => (
      //   <Icon
      //     color="error"
      //     onClick={() => {
      //       this.deleteRow(cellInfo.index);
      //     }}
      //   >
      //     delete
      //   </Icon>
      // )}
      valueComponent={valueProps => {
        const { value, children, onRemove } = valueProps;

        const onDelete = event => {
          event.preventDefault();
          event.stopPropagation();
          onRemove(value);
        };

        if (onRemove) {
          return (
            <Chip
              tabIndex={-1}
              label={children}
              className={classes.chip}
              // deleteIcon={<CancelIcon onTouchEnd={onDelete} />}
              onDelete={onDelete}
            />
          );
        }

        return <div className="Select-value">{children}</div>;
      }}
      {...other}
    />
  );
}

const ITEM_HEIGHT = 48;

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: 250
  },
  chip: {
    margin: theme.spacing.unit / 4
  },
  "@global": {
    ".Select-control": {
      display: "flex",
      alignItems: "center",
      border: 0,
      height: "auto",
      background: "transparent",
      "&:hover": {
        boxShadow: "none"
      }
    },
    ".Select-multi-value-wrapper": {
      flexGrow: 1,
      display: "flex",
      flexWrap: "wrap"
    },
    ".Select--multi .Select-input": {
      margin: 0
    },
    ".Select.has-value.is-clearable.Select--single > .Select-control .Select-value": {
      padding: 0
    },
    ".Select-noresults": {
      padding: theme.spacing.unit * 2
    },
    ".Select-input": {
      display: "inline-flex !important",
      padding: 0,
      height: "auto"
    },
    ".Select-input input": {
      background: "transparent",
      border: 0,
      padding: 0,
      cursor: "default",
      display: "inline-block",
      fontFamily: "inherit",
      fontSize: "inherit",
      margin: 0,
      outline: 0
    },
    ".Select-placeholder, .Select--single .Select-value": {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      display: "flex",
      alignItems: "center",
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.typography.pxToRem(16),
      padding: 0
    },
    ".Select-placeholder": {
      opacity: 0.42,
      color: theme.palette.common.black
    },
    ".Select-menu-outer": {
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[2],
      position: "absolute",
      left: 0,
      top: `calc(100% + ${theme.spacing.unit}px)`,
      width: "100%",
      zIndex: 2,
      maxHeight: ITEM_HEIGHT * 4.5
    },
    ".Select.is-focused:not(.is-open) > .Select-control": {
      boxShadow: "none"
    },
    ".Select-menu": {
      maxHeight: ITEM_HEIGHT * 4.5,
      overflowY: "auto"
    },
    ".Select-menu div": {
      boxSizing: "content-box"
    },
    ".Select-arrow-zone, .Select-clear-zone": {
      color: theme.palette.action.active,
      cursor: "pointer",
      height: 21,
      width: 21,
      zIndex: 1
    },
    // Only for screen readers. We can't use display none.
    ".Select-aria-only": {
      position: "absolute",
      overflow: "hidden",
      clip: "rect(0 0 0 0)",
      height: 1,
      width: 1,
      margin: -1
    }
  }
});

class IntegrationReactSelect extends React.Component {
  state = {
    single: null,
    multi: null,
    multiLabel: null,
    State: null
  };

  handleChange = name => value => {
    this.setState({
      [name]: value
    });
  };
  handleChangeCity = name => event => {
    this.setState({ [name]: event }, () => {
      this.handleState();
    });
  };
  handleState = () => {
    const result = locality.find(person => {
      return person.name === this.state.single;
    });
    console.log("result", result);
    this.setState({ State: result !== undefined ? result.stateName : " " });
  };

  render() {
    const { classes } = this.props;
    // console.log("state", this.state);
    console.log("props", this.props);

    return (
      // <div className={classes.root}>
      <div className="row mt-4 mb-2">
        <div className="col-md-6 col-12">
          <Input
            fullWidth
            inputComponent={SelectWrapped}
            value={this.state.single}
            onChange={this.handleChangeCity("single")}
            placeholder="City"
            id="react-select-single"
            inputProps={{
              classes,
              name: "react-select-single",
              instanceId: "react-select-single",
              simpleValue: true,
              options: suggestions
            }}
          />
        </div>
        <div className="col-md-6 col-12">
          <Input
            placeholder="State"
            id="react-select-single"
            fullWidth
            disabled
            value={this.state.State}
          />
        </div>
      </div>
      // </div>
      // </div>
    );
  }
}

export default withStyles(styles)(IntegrationReactSelect);
