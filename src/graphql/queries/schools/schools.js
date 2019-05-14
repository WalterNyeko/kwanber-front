import gql from "graphql-tag";

const GET_ALL_SCHOOLS = gql`
  query {
    allSchools {
      id
      category_id
      name
      address
      boarding
      mixed
      district
    }
  }
`;
const GET_POPULATION_PER_SCHOOL = gql`
  query getPopulation($school_id: Int!, $active_year: String!) {
    populationBySchoolIdAndYear(
      school_id: $school_id
      active_year: $active_year
    ) {
      class_id
      population
      class_name
    }
  }
`;

const GET_ALL_SECONDARY_SCHOOLS_PER_DISTRICT = gql`
  query secondarySchoolsPerDistrict($district_id: Int!) {
    secondarySchoolsPerDistrict(district_id: $district_id) {
      id
      name
      district
    }
  }
`;

const GET_ALL_PRIMARY_SCHOOLS_PER_DISTRICT = gql`
  query primarySchoolsPerDistrict($district_id: Int!) {
    primarySchoolsPerDistrict(district_id: $district_id) {
      id
      name
      district
    }
  }
`;

export {
  GET_ALL_SCHOOLS as default,
  GET_ALL_SECONDARY_SCHOOLS_PER_DISTRICT,
  GET_ALL_PRIMARY_SCHOOLS_PER_DISTRICT,
  GET_POPULATION_PER_SCHOOL
};
