import InfiniteScroll from "react-infinite-scroller";
import ProductCommentListItemUI from "./commentList.presenteritem";

export default function ProductCommentListUI(props: any) {
  if (!props.data) return <div />;

  return (
    <InfiniteScroll pageStart={0} loadMore={props.onLoadMore} hasMore={true}>
      {props.data?.fetchUseditemQuestions.map((el) => (
        <ProductCommentListItemUI key={el._id} el={el} />
      ))}
    </InfiniteScroll>
  );
}
