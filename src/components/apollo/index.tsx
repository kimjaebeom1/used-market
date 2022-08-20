import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  fromPromise,
  InMemoryCache,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { createUploadLink } from "apollo-upload-client";
import { ReactNode, useEffect } from "react";
import { useRecoilState } from "recoil";
import { getAccessToken } from "../../commons/libraries/getAccessToken";
import { accessTokenState } from "../../commons/store";

const APOLLO_CACHE = new InMemoryCache();

interface IApolloSettingProps {
  children: ReactNode;
}

export default function ApolloSetting(props: IApolloSettingProps) {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  useEffect(() => {
    getAccessToken().then((newAccessToken) => {
      setAccessToken(newAccessToken);
    });
  }, []);

  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    // 1-1 에러 캐치
    if (graphQLErrors) {
      for (const err of graphQLErrors) {
        // 1-2 해당 에러가 토큰만료 에러인지 체크(UNAUTHENTICATED)
        if (err.extensions.code === "UNAUTHENTICATED") {
          return fromPromise(
            // 2-1 refreshToken으로 accessToken을 재발급 받기
            getAccessToken().then((newAccessToken) => {
              // 2-2 재발급 받은 accessToken을 저장하기(Recoil)
              setAccessToken(newAccessToken);
              // 3-1 재발급 받은 accessToken으로 방금 실패한 쿼리 재요청하기(토큰 바꿔치기)
              operation.setContext({
                headers: {
                  ...operation.getContext().headers,
                  Authorization: `Bearer ${newAccessToken}`,
                },
              });
            })
          ).flatMap(() => forward(operation));
          // 3-2 재발급 받은 accessToken으로 방금 실패한 쿼리 재요청하기(변경된 operation 재요청)
        }
      }
    }
  });

  const uploadLink = createUploadLink({
    uri: "http://backend08.codebootcamp.co.kr/graphql", // 백엔드에 이미 http, https 둘다 배포가 되어있기 때문에 https로 바꿀 수 있는거임(배포 안해놨으면 안됨)
    headers: { Authorization: `Bearer ${accessToken}` },
    credentials: "include", // 중요한 내용을 includes 시킬꺼야, 이렇게 해야만 백엔드로 쿠키가 전달됨
  });

  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, uploadLink]), // 순서 중요함, errorLink가 먼저 와야함
    cache: APOLLO_CACHE, // 페이지 이동하면 글로벌캐시스테이트가 초기화됨, 그렇기 때문에 스토어를 밖에다가 만듬(import 밑에 있음)
    connectToDevTools: true,
  });

  // prettier-ignore
  return (
    <ApolloProvider client={client}>
        {props.children}
    </ApolloProvider>);
}
