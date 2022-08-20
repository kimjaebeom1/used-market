import KakaoMap from "../../../commons/map";
import Upload from "../../../commons/upload/upload.container";
import * as S from "./productWrite.styles";
import { v4 as uuidv4 } from "uuid";

export default function ProductWriteUI(props: any) {
  return (
    <>
      <form
        onSubmit={
          props.isEdit
            ? props.handleSubmit(props.onClickUpdateUseditem)
            : props.handleSubmit(props.onClickCreateUseditem)
        }
      >
        <S.Wrapper>
          <S.HeadTag> {props.isEdit ? "상품 수정" : "상품 등록"}</S.HeadTag>
          <S.Line />
          <S.InfoTag>
            <S.Info>상품명</S.Info>
            <S.InfoInput
              {...props.register("name")}
              placeholder="상품명을 작성해주세요"
              defaultValue={props.data?.fetchUseditem.name || ""}
            ></S.InfoInput>
          </S.InfoTag>
          <S.InfoTag>
            <S.Info>상품 요약</S.Info>
            <S.InfoInput
              {...props.register("remarks")}
              defaultValue={props.data?.fetchUseditem.remarks || ""}
              placeholder="상품요약을 작성해주세요"
            ></S.InfoInput>
          </S.InfoTag>
          <S.InfoTag>
            <S.Info>상품 내용</S.Info>
            <S.ContentsBox
              onChange={props.onChangeContents}
              defaultValue={props.data?.fetchUseditem.contents || ""}
            />
          </S.InfoTag>
          <S.InfoTag>
            <S.Info>판매 가격</S.Info>
            <S.InfoInput
              {...props.register("price")}
              placeholder="판매 가격을 입력해주세요"
              defaultValue={props.data?.fetchUseditem.price || ""}
            ></S.InfoInput>
          </S.InfoTag>
          <S.InfoTag>
            <S.Info>태그 입력</S.Info>
            <S.InfoInput
              {...props.register("tags")}
              placeholder="#태그 #태그 #태그"
              defaultValue={props.data?.fetchUseditem.tags || ""}
            ></S.InfoInput>
          </S.InfoTag>
          <S.InfoTag>
            <S.Info>거래 위치</S.Info>
          </S.InfoTag>
          <S.InfoTag>
            <KakaoMap address={props.address} data={props.data} />
            <S.AddressWrapper>
              <S.Row>
                <S.ZipcodeInput
                  readOnly
                  type="text"
                  value={
                    props.zipcode ||
                    props.data?.fetchUseditem.useditemAddress?.zipcode ||
                    ""
                  }
                  {...props.register("useditemAddress.zipcode")}
                  placeholder="07250"
                ></S.ZipcodeInput>
                <S.AddressBtn onClick={props.onClickAddressModal} type="button">
                  우편번호 검색
                </S.AddressBtn>
              </S.Row>
              <S.AddressInput
                readOnly
                value={
                  props.address ||
                  props.data?.fetchUseditem.useditemAddress?.address ||
                  ""
                }
                {...props.register("useditemAddress.address")}
              ></S.AddressInput>
              <S.AddressDetailInput
                type="text"
                {...props.register("useditemAddress.addressDetail")}
              ></S.AddressDetailInput>
            </S.AddressWrapper>
          </S.InfoTag>
          <S.InfoTag>
            <S.Info>사진 첨부</S.Info>
          </S.InfoTag>
          <S.UploadWrapper>
            {props.fileUrls.map((el, index) => (
              <Upload
                key={uuidv4()}
                index={index}
                fileUrl={el}
                onChangeFileUrls={props.onChangeFileUrls}
              />
            ))}
          </S.UploadWrapper>
          <S.Line></S.Line>
          <S.BtnWrapper>
            <S.CancelBtn>취소</S.CancelBtn>
            <S.RegisterBtn>등록</S.RegisterBtn>
          </S.BtnWrapper>
        </S.Wrapper>
      </form>

      {props.isOpen && (
        <S.AddressModal
          onOk={props.handleOk}
          onCancel={props.closeModal}
          visible={true}
        >
          <S.AddressSearchInput onComplete={props.onCompleteAddressSearch} />
        </S.AddressModal>
      )}
    </>
  );
}
