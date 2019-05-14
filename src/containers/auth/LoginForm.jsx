import React from 'react';
import { PropTypes } from 'prop-types';

 const Form = (props) => {
    const { 
        onChange,
        onClick, 
        state: { password, email, languages, language },
    } = props;

  return (
    <React.Fragment>
    <div className="row">
        <div className="col-12">
        <select 
            className="language" 
            name="language" 
            onChange={onChange} 
            defaultValue={language} 
            style={{marginTop: '20px', width: '200px', float: 'right', marginRight: '200px'}}>
            {languages.map(({id, name}) => (
                <option value={name} key={id}>{name}</option>
            ))}
        </select>
        </div>
        <div className="col-12">
            <h1 className="text-center" style={{marginTop: '40px'}}>Kwan Ber</h1>
            <hr/>
            <form>
                <div className="row">
                    <div className="col-12">
                    <span>Username or Email</span>
                    <input 
                        type="text" 
                        name="name" 
                        defaultValue={email} 
                        className="name"
                        onChange={onChange}
                        style={{borderColor: 'green', borderWidth: '1px'}}>
                    </input>
                    </div>
                </div>
                <span>Password</span>                
                <input 
                    type="email" 
                    name="email" 
                    defaultValue={password} 
                    className="text"
                    onChange={onChange}
                    style={{borderColor: 'green', borderWidth: '1px'}}>
                </input>
                <div className="small-6 small-centered text-center columns" onClick={onClick}>
                    <button type="button" className="btn btn-block btn-primary btn-md ng-binding">Sign In</button>
                </div>
                
            </form>
            <hr/>
            </div>
        </div>
        </React.Fragment>
  )
}

Form.propTypes = {
    onChange: PropTypes.func.isRequired,
    onClick: PropTypes.func.isRequired,
    state: PropTypes.object,
}
export default Form;