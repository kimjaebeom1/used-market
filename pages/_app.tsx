import { Global } from "@emotion/react";
import { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { globalStyles } from "../src/commons/styles/globalStyles";
import ApolloSetting from "../src/components/apollo";
import LayOut from "../src/components/commons/layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ApolloSetting>
        <LayOut>
          <Component {...pageProps} />
        </LayOut>
      </ApolloSetting>
    </RecoilRoot>
  );
}

export default MyApp;
