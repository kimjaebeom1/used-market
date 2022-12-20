import { useMutation, useQuery } from "@apollo/client";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { getDate } from "../../../../commons/libraries/utils";
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
  const date = new Date();
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(100);
  const [payment, setPayment] = useState();
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  const [logoutUser] = useMutation(LOGOUT_USER);
  const router = useRouter();
  const [createPointTransactionOfLoading] = useMutation(
    CREATE_POINT_TRANSACTION_OF_LOADING
  );

  const onChangePrice = (event) => {
    setSelected(event?.target.value);
  };

  const onClickCharge = async () => {
    setIsOpen(true);
  };

  const onClickLogout = () => {
    logoutUser();
    localStorage.removeItem("accessToken");
    localStorage.removeItem("userInfo");
    localStorage.removeItem(`${getDate(date)}`);
    location.reload();
  };

  const onClickAddressModal = () => {
    setIsOpen(true);
  };

  const handleCancel = () => {
    setIsOpen(false);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const onClickSelectCharge = () => {
    setIsOpen(false);
    const payment = selected;
    const IMP = window.IMP;
    IMP.init("imp49910675");
    IMP.request_pay(
      {
        pg: "nice",
        pay_method: "card",

        name: "충전하기",
        amount: payment,
        buyer_email: "nanyong0214@gmail.com",
        buyer_name: "홍길동",
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
        m_redirect_url: "http:/localhost:3000",
      },
      async (rsp) => {
        console.log("분기 전", rsp);
        if (rsp.success) {
          //   // 결제 성공 시 로직,
          const result = await createPointTransactionOfLoading({
            variables: {
              impUid: rsp.imp_uid,
              amount: rsp.paid_amount,
            },
          });
          location.reload();
          console.log(result);
        } else {
          //   // 결제 실패 시 로직,
          console.log("왜...?");
          alert("결제에 실패했습니다! 다시 시도해 주세요!");
        }
      }
    );
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
        isOpen={isOpen}
        data={data}
        onClickLogout={onClickLogout}
        onClickCharge={onClickCharge}
        onChangePrice={onChangePrice}
        closeModal={closeModal}
        onClickSelectCharge={onClickSelectCharge}
        handleCancel={handleCancel}
      />
    </>
  );
}
