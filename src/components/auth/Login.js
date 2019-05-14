import React, {Component} from 'react';
import FormComponent from '../../containers/auth/LoginForm';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            language: '',
            languages: [
                {id: 1, name: 'English'},
                {id: 2, name: 'Acholi'},
                {id: 3, name: 'Kiswahili'},
                {id: 4, name: 'Luganda'}
            ]
        };

        this.onChange = this.onChange.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    onChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        this.setState({ [name]: value });
    } 

    onClick = () => {
        const { language } = this.state;
        localStorage.setItem('language',language);
        this.props.history.push(`/dashboard`); // 0789967037
    }

    render() {
        return (
            <React.Fragment>
                <FormComponent
                    state = {this.state}
                    onChange = {this.onChange}
                    onClick = {this.onClick}
                />
            </React.Fragment>
        );
    }
}

export default Form;
