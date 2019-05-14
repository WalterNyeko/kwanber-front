import React from "react";
import { PropTypes } from "prop-types";

const Form = props => {
  const {
    onChange,
    onClick,
    state: { password, email, languages, language }
  } = props;

  return (
    <React.Fragment>
      <div className="row" style={{ backgroundColor: "#3bb878" }}>
        <div className="col-12">
          <select
            className="language"
            name="language"
            onChange={onChange}
            defaultValue={language}
            style={{
              marginTop: "100px",
              width: "200px",
              float: "right",
              marginRight: "200px"
            }}
          >
            {languages.map(({ id, name }) => (
              <option value={name} key={id}>
                {name}
              </option>
            ))}
          </select>
        </div>
        <div className="col-12  mb-5">
          <h1 className="text-center" style={{ marginTop: "40px" }}>
            Kwan Ber
          </h1>
          <form className="mt-5">
            <div className="row">
              <div className="col-12">
                <span>Username or Email</span>
                <input
                  type="text"
                  name="name"
                  defaultValue={email}
                  className="name mt-2"
                  onChange={onChange}
                  style={{ borderColor: "green", borderWidth: "0px" }}
                />
              </div>
              <div className="col-md-12">
                <span className="mt-5">Password</span>
                <input
                  type="password"
                  name="password"
                  defaultValue={password}
                  className="text mt-2"
                  onChange={onChange}
                  style={{ borderColor: "green", borderWidth: "0px" }}
                />
              </div>
              <div className="col-md-12">
                <button
                  type="button"
                  className="btn btn-block btn-primary btn-md ng-binding mt-3"
                  onClick={onClick}
                >
                  Sign In
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

Form.propTypes = {
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  state: PropTypes.object
};
export default Form;
