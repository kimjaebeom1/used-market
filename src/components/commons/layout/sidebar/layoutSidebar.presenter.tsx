import * as S from "./layoutSidebar.styles";

export default function LayoutSidebarUI(props) {
  return (
    <S.Wrapper>
      <div>최근 본 상품</div>
      {props.todays.map((el) => (
        <S.TodayWrapper onClick={props.onClickMoveToStorage(el)} key={el._id}>
          <S.ImageDiv
            key={el}
            src={
              el.images?.[0] || el.images?.[1]
                ? `https://storage.googleapis.com/${el.images?.[0]}`
                : "/images/loading.png"
            }
          ></S.ImageDiv>
        </S.TodayWrapper>
      ))}
    </S.Wrapper>
  );
}
