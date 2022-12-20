import Link from "next/link";
import * as S from "./layoutHeader.styles";

export default function LayoutHeaderUI(props: any) {
  return (
    <S.Wrapper>
      <S.Row>
        <S.HeaderWrapper data={props.data}>
          <S.LoginTag>
            {props.data ? (
              <S.ChargeRow>
                <>{`${props.data?.fetchUserLoggedIn.name}님 포인트 ${props.data?.fetchUserLoggedIn.userPoint.amount}P`}</>
                <S.ChargeTag onClick={props.onClickCharge}>충전</S.ChargeTag>
              </S.ChargeRow>
            ) : (
              <Link href="/login">로그인</Link>
            )}
          </S.LoginTag>
          <S.SignUpTag>
            {props.data ? (
              <div
                style={{
                  cursor: "pointer",
                }}
                onClick={props.onClickLogout}
              >
                로그아웃
              </div>
            ) : (
              <Link href="/signup">회원가입</Link>
            )}
          </S.SignUpTag>
        </S.HeaderWrapper>
      </S.Row>
      <S.Line />
      <S.MiddleRow>
        <div>
          <Link href="/">
            <h1
              style={{
                cursor: "pointer",
              }}
            >
              중고마켓
            </h1>
          </Link>
        </div>
        <S.SellWrapper>
          <img src="/assets/sell.svg" />
          <S.SellTag>
            <Link href="/write">판매하기</Link>
          </S.SellTag>
        </S.SellWrapper>
      </S.MiddleRow>
      <S.Line />

      {props.isOpen && (
        <S.PaymentModal
          onCancel={props.handleCancel}
          centered={true}
          okButtonProps={{ style: { display: "none" } }}
          cancelButtonProps={{ style: { display: "none" } }}
          visible={true}
        >
          <div>충전하실 금액을 선택해주세요!</div>

          <S.PaymentSelect onChange={props.onChangePrice}>
            <option aria-readonly>포인트 선택</option>
            <option value="100">100원</option>
            <option value="500">500원</option>
            <option value="2000">2000원</option>
            <option value="5000">5000원</option>
          </S.PaymentSelect>
          <button onClick={props.onClickSelectCharge}>충전하기</button>
        </S.PaymentModal>
      )}
    </S.Wrapper>
  );
}
