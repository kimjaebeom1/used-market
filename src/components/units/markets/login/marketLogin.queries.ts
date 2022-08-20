import { gql } from "@apollo/client";
import * as yup from "yup";

export const schema = yup.object({
  email: yup
    .string()
    .matches(/\S+@\S+\.\S+/, "이메일 아이디를 @까지 정확하게 입력하세요")
    .required(),
  password: yup
    .string()
    .matches(
      /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,16}$/,
      "영문+숫자 조합 8~16자리를 입력해주세요."
    )
    .required(),
});

export const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

export const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      _id
      email
      name
      userPoint {
        amount
      }
    }
  }
`;
