import * as S from "./productList.styles";
import InfiniteScroll from "react-infinite-scroller";
import {
  getDate,
  getTime,
  thisTime,
  timeForToday,
} from "../../../../commons/libraries/utils";

export default function ProductListUI(props: any) {
  return (
    <S.Wrapper>
      <InfiniteScroll pageStart={0} loadMore={props.onLoadMore} hasMore={true}>
        {props.data?.fetchUseditems.map((el, index) => (
          <S.ListWrapper
            onClick={props.onClickMoveToProductDetail(el)}
            key={el._id}
            id={el._id}
          >
            <S.ImageFile
              key={el}
              src={
                el.images.length !== 0 && el.images[0] !== ""
                  ? `https://storage.googleapis.com/${el.images[0]}`
                  : "/assets/loading.png"
              }
            />

            <S.NameTag id={el._id}>{el.name}</S.NameTag>
            <S.Row>
              <S.PriceTag>{el.price?.toLocaleString()}원</S.PriceTag>
              <S.TimeTag>{timeForToday(el.createdAt)}</S.TimeTag>
            </S.Row>
          </S.ListWrapper>
        ))}
      </InfiniteScroll>
    </S.Wrapper>
  );
}
