/* eslint-disable react/prop-types, react/jsx-handler-names */

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Select from 'react-select';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import NoSsr from '@material-ui/core/NoSsr';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';
import MenuItem from '@material-ui/core/MenuItem';
import CancelIcon from '@material-ui/icons/Cancel';
import { schoolLevels, schoolsSuggestions } from '../../containers/fixtures/SchoolsMock';
import { styles } from '../../styles/AddStudentForm';

export const NoOptionsMessage = (props) => {
  return (
    <Typography
      color="textSecondary"
      className={props.selectProps.classes.noOptionsMessage}
      {...props.innerProps}
    >
      {props.children}
    </Typography>
  );
}

export const inputComponent = ({ inputRef, ...props }) => {
  return <div ref={inputRef} {...props} />;
}

export const Control = (props) => {
  return (
    <TextField
      fullWidth
      InputProps={{
        inputComponent,
        inputProps: {
          className: props.selectProps.classes.input,
          inputRef: props.innerRef,
          children: props.children,
          ...props.innerProps,
        },
      }}
      {...props.selectProps.textFieldProps}
    />
  );
}

export const Option = (props) => {
  return (
    <MenuItem
      buttonRef={props.innerRef}
      selected={props.isFocused}
      component="div"
      style={{
        fontWeight: props.isSelected ? 500 : 400,
      }}
      {...props.innerProps}
    >
      {props.children}
    </MenuItem>
  );
}

export const Placeholder = (props) => {
  return (
    <Typography
      color="textSecondary"
      className={props.selectProps.classes.placeholder}
      {...props.innerProps}
    >
      {props.children}
    </Typography>
  );
}

export const SingleValue = (props) => {
  return (
    <Typography className={props.selectProps.classes.singleValue} {...props.innerProps}>
      {props.children}
    </Typography>
  );
}

export const ValueContainer = (props) => {
  return <div className={props.selectProps.classes.valueContainer}>{props.children}</div>;
}

export const MultiValue = (props) => {
  return (
    <Chip
      tabIndex={-1}
      label={props.children}
      className={classNames(props.selectProps.classes.chip, {
        [props.selectProps.classes.chipFocused]: props.isFocused,
      })}
      onDelete={props.removeProps.onClick}
      deleteIcon={<CancelIcon {...props.removeProps} />}
    />
  );
}

export const Menu = (props) => {
  return (
    <Paper square className={props.selectProps.classes.paper} {...props.innerProps}>
      {props.children}
    </Paper>
  );
}

const components = {
  Control,
  Menu,
  MultiValue,
  NoOptionsMessage,
  Option,
  Placeholder,
  SingleValue,
  ValueContainer,
};

class AddStudentForm extends React.Component {
  state = {
    single: null,
    multi: null,
  };

  handleChange = name => value => {
    this.setState({
      [name]: value,
    });
  };

  handleInputChange = name => event => {
    const { value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { classes, theme } = this.props;
    const selectStyles = {
      input: base => ({
        ...base,
        color: theme.palette.text.primary,
        '& input': {
          font: 'inherit',
        },
      }),
    };
    return (
      <div className={classes.root}>
        <NoSsr>
          <TextField
            id="standard-search"
            label="Student Name"
            type="search"
            className={classes.textField}
            margin="normal"
            width="100px"
          />
          {'           '}
          <TextField
            id="standard-select-currency"
            select
            label="Select Academic Level"
            className={classes.textField}
            value={this.state.currency}
            onChange={this.handleInputChange('schoolLevel')}
            SelectProps={{
                MenuProps: {
                className: classes.menu,
                },
            }}
            helperText="Please select the academic level of this student"
            margin="normal"
            >
            {schoolLevels.map(option => (
                <MenuItem key={option.value} value={option.value}>
                {option.label}
                </MenuItem>
            ))}
          </TextField>
          <div className={classes.divider} />
          <Select
            classes={classes}
            styles={selectStyles}
            textFieldProps={{
              InputLabelProps: {
                shrink: true,
              },
            }}
            options={schoolsSuggestions}
            components={components}
            value={this.state.multi}
            onChange={this.handleChange('multi')}
            placeholder="Select the school where this student belongs"
            isMulti
          />
          <TextField
            id="standard-text"
            label="Parent's Name"
            type="text"
            className={classes.textField}
            margin="normal"
            width="100px"
          />
          {'           '}
          <TextField
            id="standard-address"
            label="Parent's Address"
            type="text"
            className={classes.textField}
            margin="normal"
            width="100px"
          />
          {'           '}

          <TextField
            id="standard-contact"
            label="Parent's Contact"
            type="text"
            className={classes.textField}
            margin="normal"
            width="100px"
          />
            {'           '}
        </NoSsr>
      </div>
    );
  }
}

AddStudentForm.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(AddStudentForm);