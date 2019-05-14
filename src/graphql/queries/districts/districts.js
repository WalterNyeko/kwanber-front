import gql from "graphql-tag";

const GET_ALL_DISTRICTS = gql`
  query {
    allDistricts {
      id
      name
      description
    }
  }
`;

const GET_DISTRICT_BY_ID = gql`
  query districtById($id: Int!) {
    districtById(id: $id) {
      id
      name
      description
    }
  }
`;

export { GET_ALL_DISTRICTS as default, GET_DISTRICT_BY_ID };
