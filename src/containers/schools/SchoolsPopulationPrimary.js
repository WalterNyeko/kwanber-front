import React, { Component } from "react";
import HomePage from "../home/dashboard/HomePage";
import { compose, graphql } from "react-apollo";
import GET_ALL_SCHOOLS from "../../graphql/queries/schools/schools";
import GET_ALL_DISTRICTS from "../../graphql/queries/districts/districts";
import PopulationContent from "./PopulationContent";

class LandingPage extends Component {
  render() {
    const {
      districts: { allDistricts },
      schools: { allSchools }
    } = this.props;
    return (
      <>
        <HomePage
          content={
            <PopulationContent districts={allDistricts} schools={allSchools} />
          }
        />
      </>
    );
  }
}
export default compose(
  graphql(GET_ALL_DISTRICTS, {
    name: "districts"
  }),
  graphql(GET_ALL_SCHOOLS, { name: "schools" })
)(LandingPage);
