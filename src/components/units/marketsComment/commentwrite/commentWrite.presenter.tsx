import * as S from "./commentWrite.styles";

export default function ProductCommentWriteUI(props: any) {
  return (
    <S.Wrapper>
      <S.CommentsBox
        value={
          props.isEdit ? props.contents || props.el?.contents : props.contents
        }
        onChange={props.onChangeContents}
      ></S.CommentsBox>

      <S.ButtonWrapper>
        {props.isEdit && (
          <S.CancelBtn type="button" onClick={props.onClickCancel}>
            {" "}
            취소하기
          </S.CancelBtn>
        )}
        <S.CommentsBtn
          isEdit={props.isEdit}
          type="button"
          onClick={props.isEdit ? props.onClickUpdate : props.onClickWrite}
        >
          {props.isEdit ? "수정하기" : "작성하기"}
        </S.CommentsBtn>
      </S.ButtonWrapper>
    </S.Wrapper>
  );
}
