import Link from "next/link";
import * as S from "./marketSignup.styles";

export default function MarketSignUpUI(props: any) {
  return (
    <form onSubmit={props.handleSubmit(props.onClickCreateUser)}>
      <S.HeaderWrapper>
        <Link href="/">
          <img src="assets/whitelogo.svg" />
        </Link>
      </S.HeaderWrapper>

      <S.BodyWrapper>
        <S.SignupWrapper>
          <S.Row>
            <S.SignupKorean>회원가입</S.SignupKorean>
            <S.SignupEnglish>Sign up</S.SignupEnglish>
          </S.Row>
          <S.Line />
          <S.InformationWrapper>
            <S.InformationTag>
              <S.InformationName>아이디</S.InformationName>
              <S.InformationInput
                required
                type="text"
                {...props.register("email")}
                placeholder="이메일 아이디를 @까지 정확하게 입력하세요"
              ></S.InformationInput>
            </S.InformationTag>
            <S.ErrorTag>{props.formState.errors.email?.message}</S.ErrorTag>

            <S.InformationTag>
              <S.InformationName>비밀번호</S.InformationName>

              <S.InformationInput
                required
                type="password"
                {...props.register("password")}
                placeholder="영문+숫자 조합 8~16자리를 입력해주세요"
              ></S.InformationInput>
            </S.InformationTag>
            <S.ErrorTag>{props.formState.errors.password?.message}</S.ErrorTag>
            <S.InformationTag>
              <S.InformationName>비밀번호 확인</S.InformationName>

              <S.InformationInput
                required
                type="password"
                {...props.register("password2")}
                placeholder="영문+숫자 조합 8~16자리를 입력해주세요"
              ></S.InformationInput>
            </S.InformationTag>
            <S.ErrorTag>{props.formState.errors.password2?.message}</S.ErrorTag>
            <S.InformationTag>
              <S.InformationName>이름</S.InformationName>

              <S.InformationInput
                type="text"
                {...props.register("name")}
                placeholder="Ex) 홍길동"
              ></S.InformationInput>
            </S.InformationTag>

            <S.Row>
              <S.SignupBtn>회원가입하기</S.SignupBtn>
              <S.CancelBtn>취소</S.CancelBtn>
            </S.Row>

            <S.BottomWrapper>
              <S.ErrorTag
                style={{
                  color: "#888888",
                }}
              >
                이미 아이디가 있으신가요?
              </S.ErrorTag>
              <S.LoginTag>
                <Link href="/login">로그인</Link>
              </S.LoginTag>
            </S.BottomWrapper>
          </S.InformationWrapper>
        </S.SignupWrapper>
      </S.BodyWrapper>
    </form>
  );
}
