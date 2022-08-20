import * as S from "./upload.styles";

export default function UploadUI(props: any) {
  return (
    <S.Wrapper>
      {props.fileUrl ? (
        <S.UploadImg
          onClick={props.onClickUpload}
          src={`https://storage.googleapis.com/${props.fileUrl}`}
        />
      ) : (
        <S.UploadBtn type="button" onClick={props.onClickUpload}>
          <>+</>
          <br />
          <>Upload</>
        </S.UploadBtn>
      )}
      <S.UploadFileHidden
        type="file"
        ref={props.fileRef}
        onChange={props.onChangeFile}
      />
    </S.Wrapper>
  );
}
