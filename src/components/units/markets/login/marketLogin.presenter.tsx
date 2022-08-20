import Link from "next/link";
import * as S from "./marketLogin.styles";

export default function MarketLoginUI(props: any) {
  return (
    <form onSubmit={props.handleSubmit(props.onClickLoginUser)}>
      <S.HeaderWrapper>
        <Link href="/">
          <img src="assets/whitelogo.svg" />
        </Link>
      </S.HeaderWrapper>

      <S.BodyWrapper>
        <S.LoginWrapper>
          <S.Row>
            <S.LoginKorean>로그인</S.LoginKorean>
            <S.LoginEnglish>Login</S.LoginEnglish>
          </S.Row>
          <S.Line />
          <S.InformationWrapper>
            <S.InformationInput
              type="text"
              {...props.register("email")}
              placeholder="아이디"
            ></S.InformationInput>
            <S.ErrorTag>{props.formState.errors.email?.message}</S.ErrorTag>

            <S.InformationInput
              type="password"
              {...props.register("password")}
              placeholder="비밀번호"
            ></S.InformationInput>
            <S.ErrorTag>{props.formState.errors.password?.message}</S.ErrorTag>

            <S.Row>
              <S.LoginBtn>로그인</S.LoginBtn>
            </S.Row>

            <S.BottomWrapper>
              <div
                style={{
                  color: "#888888",
                }}
              >
                아직 계정이 없으신가요?
              </div>
              <S.LoginTag>
                <Link href="/signup">회원가입</Link>
              </S.LoginTag>
            </S.BottomWrapper>
          </S.InformationWrapper>
        </S.LoginWrapper>
      </S.BodyWrapper>
    </form>
  );
}
