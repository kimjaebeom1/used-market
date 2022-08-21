import { useMutation, useQuery } from "@apollo/client";
import Head from "next/head";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { accessTokenState, userInfoState } from "../../../../commons/store";
import LayoutHeaderUI from "./layoutHeader.presenter";
import {
  CREATE_POINT_TRANSACTION_OF_LOADING,
  FETCH_USER_LOGGED_IN,
  LOGOUT_USER,
} from "./layoutHeader.queries";

declare const window: typeof globalThis & {
  IMP: any;
};

export default function LayoutHeader() {
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  const [logoutUser] = useMutation(LOGOUT_USER);
  const router = useRouter();
  const [createPointTransactionOfLoading] = useMutation(
    CREATE_POINT_TRANSACTION_OF_LOADING
  );

  console.log(logoutUser);
  const onClickCharge = () => {
    const IMP = window.IMP; // 생략 가능
    IMP.init("imp49910675"); // Example: imp00000000
    IMP.request_pay(
      {
        // param
        pg: "nice",
        pay_method: "card",
        // merchant_uid: "ORD20180131-0000011", // 상품 id (주문번호), 중복되면안됨   // iamport - 결제연동 - 내 식별코드 -APIKeys
        name: "충전하기",
        amount: 100, // 최소금액 100원임
        buyer_email: "nanyong0214@gmail.com", // 영수증을 받고싶을때 구매자 이메일
        buyer_name: "홍길동",
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
        m_redirect_url: "http:/localhost:3000", // 모바일은 페이지가 아예 결제페이지로 바뀌기 때문에 결제가 끝나고 이쪽으로 보내주세요
      },
      async (rsp) => {
        // rep : response
        // callback
        console.log("분기 전", rsp);
        if (rsp.success) {
          //   // 결제 성공 시 로직,
          const result = await createPointTransactionOfLoading({
            variables: {
              impUid: rsp.imp_uid,
              amount: rsp.paid_amount,
            },
          });
          router.push("/");
          console.log(result);
        } else {
          //   // 결제 실패 시 로직,
          console.log("왜...?");
          alert("결제에 실패했습니다! 다시 시도해 주세요!");
        }
      }
    );
  };

  const onClickLogout = () => {
    logoutUser();
  };

  return (
    <>
      <Head>
        {/* <!-- jQuery --> */}
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>
        {/* <!-- iamport.payment.js --> */}
        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
        ></script>
      </Head>

      <LayoutHeaderUI
        data={data}
        onClickLogout={onClickLogout}
        onClickCharge={onClickCharge}
      />
    </>
  );
}
