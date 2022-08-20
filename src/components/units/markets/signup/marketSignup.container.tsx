import { useMutation } from "@apollo/client";
import MarketSignUpUI from "./marketSignup.presenter";
import { CREATE_USER, schema } from "./marketSignup.queries";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";

export default function MarketSignUp() {
  const router = useRouter();
  const [createUser] = useMutation(CREATE_USER);
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onClickCreateUser = async (data) => {
    const result = await createUser({
      variables: {
        createUserInput: {
          email: data.email,
          password: data.password,
          name: data.name,
        },
      },
    });
    console.log(result);
    alert("회원가입이 완료되었습니다.");
    router.push("/login");
  };

  return (
    <MarketSignUpUI
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      onClickCreateUser={onClickCreateUser}
    />
  );
}
