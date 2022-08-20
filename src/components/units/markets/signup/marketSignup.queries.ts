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
  password2: yup
    .string()
    .oneOf([yup.ref("password")], "비밀번호가 일치하지 않습니다."),
});

export const CREATE_USER = gql`
  mutation createUser($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      _id
      email
      name
    }
  }
`;
