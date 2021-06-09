import { gql } from "@apollo/client";

export const GET_USER_QUERY = gql`
  query User {
    hello: String
  }
`;

export const GET_USERDATA_QUERY = gql`
  query userData {
    getAllUsersWithData {
      message
      data {
        name
        city
      }
    }
  }
`;

export const GET_USERINFO_QUERY = gql`
  query userInfo {
    getAllUserSvc {
      message
      data {
        name
        city
      }
    }
  }
`;
