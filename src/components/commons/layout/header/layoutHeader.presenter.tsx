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
          <S.BasketTag>장바구니</S.BasketTag>
        </S.HeaderWrapper>
      </S.Row>
      <S.Line />
      <S.MiddleRow>
        <div>
          <Link href="/">
            <img src="/assets/logo.svg" />
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
    </S.Wrapper>
  );
}
