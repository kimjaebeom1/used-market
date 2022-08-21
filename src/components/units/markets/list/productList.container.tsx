import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { getDate } from "../../../../commons/libraries/utils";
import { localStorageState } from "../../../../commons/store";
import { IBoard } from "../../../../commons/types/generated/types";
import ProductListUI from "./productList.presenter";
import { FETCH_USED_ITEMS } from "./productList.queries";

export default function ProductList() {
  const date = new Date();
  const [isActive, setIsActive] = useRecoilState(localStorageState);
  const [todays, setTodays] = useState([]);
  const router = useRouter();

  const { data, fetchMore, refetch } = useQuery(FETCH_USED_ITEMS, {
    variables: { useditemId: router.query.id },
    fetchPolicy: "network-only",
  });

  const onClickMoveToProductDetail = (data) => (event) => {
    const newDate = JSON.parse(localStorage.getItem(getDate(date)) || "[]");
    router.push(`/${event.currentTarget.id}`);

    const temp = newDate.filter((el: IBoard) => el._id === data._id);
    if (temp.length === 1) {
      return;
    }
    newDate.push(data);
    localStorage.setItem(getDate(date), JSON.stringify(newDate));

    setTodays(newDate);
    setIsActive((prev) => !prev);

    console.log(data);
  };

  const onLoadMore = () => {
    console.log(data);
    if (!data) return;

    fetchMore({
      variables: { page: Math.ceil(data?.fetchUseditems.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchUseditems)
          return { fetchUseditems: [...prev.fetchUseditems] };
        return {
          fetchUseditems: [
            ...prev.fetchUseditems,
            ...fetchMoreResult.fetchUseditems,
          ],
        };
      },
    });
  };
  console.log(data);

  return (
    <ProductListUI
      onClickMoveToProductDetail={onClickMoveToProductDetail}
      refetch={refetch}
      onLoadMore={onLoadMore}
      data={data}
    />
  );
}
