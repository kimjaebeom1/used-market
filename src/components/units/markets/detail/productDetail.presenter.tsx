import DOMPurify from "dompurify";
import KakaoDetailMap from "../../../commons/detailmap";
import KakaoMap from "../../../commons/map";
import ProductCommentList from "../../marketsComment/commentlist/commentList.container";
import CreateUseditemQuestion from "../../marketsComment/commentwrite/commentWrite.container";
import * as S from "./productDetail.styles";

export default function ProductDetailUI(props: any) {
  return (
    <>
      <S.Wrapper>
        <S.TopWrapper>
          <S.ImageDiv>
            {" "}
            {props.data?.fetchUseditem?.images.map((el: string) => (
              <S.ImageFile
                key={el}
                src={`https://storage.googleapis.com/${el}`}
              />
            ))}
          </S.ImageDiv>
          <S.TopColumn>
            <S.NameWrapper>
              <S.NameTag>{props.data?.fetchUseditem?.name}</S.NameTag>
              <S.IconWrapper>
                <S.EditIcon>
                  <img
                    onClick={props.onClickMoveToEdit}
                    src="assets/edit.svg"
                  />
                </S.EditIcon>
                <img
                  onClick={props.onClickDelete}
                  style={{
                    width: "18px",
                    height: "18px",
                  }}
                  src="assets/delete.svg"
                />
              </S.IconWrapper>
            </S.NameWrapper>
            <S.PriceTag>{props.data?.fetchUseditem?.price}</S.PriceTag>
            <S.PriceLine />
            <S.RemarksTag>{props.data?.fetchUseditem?.remarks}</S.RemarksTag>
            <div>{props.data?.fetchUseditem?.tags}</div>
            <S.RemarksLine />
            <S.BoxWrapper>
              <S.SelectBox>
                <img src="assets/heart.svg" />찜
              </S.SelectBox>
              <S.BasketBox>장바구니</S.BasketBox>
              <S.DirectBuyingBox>바로구매</S.DirectBuyingBox>
            </S.BoxWrapper>
          </S.TopColumn>
        </S.TopWrapper>

        {/* left bottom */}
        <S.BottomWrapper>
          <S.BottomColumn>
            <S.ContentsTag>상품정보</S.ContentsTag>
            <S.ContentsLine />
            {typeof window !== "undefined" && (
              <S.ContentsBox
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(
                    props.data?.fetchUseditem?.contents
                  ),
                }}
              ></S.ContentsBox>
            )}
            <S.MapTag>
              <img
                style={{
                  width: "23px",
                  height: "29px",
                }}
                src="assets/mark.svg"
              />{" "}
              거래지역
            </S.MapTag>
            <KakaoDetailMap data={props.data} />
          </S.BottomColumn>

          <S.ColumnLine />

          {/* right bottom */}
          <S.BottomColumn>
            <S.RightBottomWrapper>
              <S.ShopTag>상점정보</S.ShopTag>
              <S.RightBottomLine />
              <S.ContentsBox>
                <img src="assets/comments.svg" />
                <S.UsernameTag>
                  {props.data?.fetchUseditem?.seller.name}
                </S.UsernameTag>
              </S.ContentsBox>
              <S.UsernameLine />
              <S.CommentsTag>댓글</S.CommentsTag>
              <S.RightBottomLine />
              <CreateUseditemQuestion />
              <ProductCommentList />
            </S.RightBottomWrapper>
          </S.BottomColumn>
        </S.BottomWrapper>
      </S.Wrapper>
    </>
  );
}