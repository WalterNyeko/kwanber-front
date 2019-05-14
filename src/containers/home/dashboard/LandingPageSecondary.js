import React, { Component } from "react";
import HomePage from "./HomePage";
import Analytics from "./Analytics";
import { compose, graphql } from "react-apollo";
import { GET_ALL_SECONDARY_SCHOOLS_PER_DISTRICT } from "../../../graphql/queries/schools/schools";
import { GET_DISTRICT_BY_ID } from "../../../graphql/queries/districts/districts";
class LandingPage extends Component {
  render() {
    const {
      secondary: { secondarySchoolsPerDistrict },
      district: { districtById }
    } = this.props;
    let theDistrict;
    if (districtById && districtById.length) {
      theDistrict = districtById[0].name;
    }
    return (
      <>
        <HomePage
          content={
            <Analytics
              secondary={secondarySchoolsPerDistrict}
              theDistrict={theDistrict}
            />
          }
        />
      </>
    );
  }
}
export default compose(
  graphql(GET_DISTRICT_BY_ID, {
    name: "district",
    options: props => ({
      variables: {
        id: parseInt(props.match.params.id)
      }
    })
  }),
  graphql(GET_ALL_SECONDARY_SCHOOLS_PER_DISTRICT, {
    name: "secondary",
    options: props => ({
      variables: {
        district_id: parseInt(props.match.params.id)
      }
    })
  })
)(LandingPage);
