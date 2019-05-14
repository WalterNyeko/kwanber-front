import React, { Component } from "react";
import HomePage from "../../containers/home/dashboard/HomePage";
import SchoolsTabs from "./SchoolsTabs";
import { graphql } from "react-apollo";
import GET_ALL_SCHOOLS from "../../graphql/queries/schools/schools";

class Schools extends Component {
  render() {
    const { allSchools, loading } = this.props.data;
    console.log(this.props);
    return (
      <>
        <HomePage content={<SchoolsTabs schools={allSchools} loading={loading}/>} />
      </>
    );
  }
}
export default graphql(GET_ALL_SCHOOLS)(Schools);
