import gql from "graphql-tag";

const GET_UNEB_RESULTS_BY_ID_AND_GRADE = gql`
  query unebSummaryBySchoolIdAndGrade(
    $school_id: Int!
    $grade: Int!
    $start_year: String!
    $end_year: String!
  ) {
    unebSummaryBySchoolIdAndGrade(
      school_id: $school_id
      grade: $grade
      start_year: $start_year
      end_year: $end_year
    ) {
      id
      number
      exam_year
    }
  }
`;

export { GET_UNEB_RESULTS_BY_ID_AND_GRADE as default };
