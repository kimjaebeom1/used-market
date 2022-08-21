import { useApolloClient, useMutation } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { accessTokenState, userInfoState } from "../../../../commons/store";
import MarketLoginUI from "./marketLogin.presenter";
import {
  FETCH_USER_LOGGED_IN,
  LOGIN_USER,
  schema,
} from "./marketLogin.queries";

export default function MarketLogin() {
  const router = useRouter();
  const [loginUser] = useMutation(LOGIN_USER);
  const client = useApolloClient();
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);

  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onClickLoginUser = async (data) => {
    const result = await loginUser({
      variables: {
        ...data,
      },
    });

    const accessToken = result.data?.loginUser.accessToken;
    if (!accessToken) {
      alert("로그인에 실패하였습니다. 다시 시도해주세요");
      return;
    }

    const resultUserInfo = await client.query({
      query: FETCH_USER_LOGGED_IN,
      context: {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    });
    const userInfo = resultUserInfo.data?.fetchUserLoggedIn;
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
    setAccessToken(accessToken);
    setUserInfo(userInfo);
    alert("로그인에 성공하였습니다.");
    console.log(userInfo);
    router.push("/");
  };

  return (
    <MarketLoginUI
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      onClickLoginUser={onClickLoginUser}
    />
  );
}
