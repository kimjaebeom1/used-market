import Link from "next/link";
import * as S from "./layoutHeader.styles";

export default function LayoutHeaderUI() {
  return (
    <S.Wrapper>
      <S.Row>
        <S.HeaderWrapper>
          <S.LoginTag>
            <Link href="/login">로그인</Link>
          </S.LoginTag>
          <S.SignUpTag>
            <Link href="/signup">회원가입</Link>
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
