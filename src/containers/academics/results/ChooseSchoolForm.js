import React from 'react';
import Select from 'react-select';
import { schoolsSuggestions } from '../../fixtures/SchoolsMock';
import { styles } from '../../../styles/AddStudentForm';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';


class ChooseSchoolForm extends React.Component {

    state = {
        single: null,
        multi: null,
    };
    
    handleChange = name => value => {
        this.setState({
            [name]: value,
        });
    };

    render(){
        const { classes } = this.props;
        return (
            <React.Fragment>
                <Select
                    classes={classes}
                    textFieldProps={{
                    InputLabelProps: {
                        shrink: true,
                    },
                    }}
                    options={schoolsSuggestions}
                    value={this.state.multi}
                    onChange={this.handleChange('multi')}
                    placeholder="Select the school"
                    isMulti
              />
              
            </React.Fragment>
        );
    }
}

ChooseSchoolForm.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles)(ChooseSchoolForm);
