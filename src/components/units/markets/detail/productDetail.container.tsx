import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import ProductDetailUI from "./productDetail.presenter";
import {
  CREATE_USED_ITEM_QUESTION,
  DELETE_USED_ITEM,
  FETCH_USED_ITEM,
  UPDATE_USED_ITEM_QUESTION,
} from "./productDetail.queries";

export default function ProductDetail(props) {
  const router = useRouter();
  const [deleteUseditem] = useMutation(DELETE_USED_ITEM);

  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: { useditemId: String(router.query.id) },
  });

  // 게시글 삭제하기
  const onClickDelete = async () => {
    await deleteUseditem({
      variables: { useditemId: router.query.id },
    });
    router.push("/");
    alert("삭제되었습니다.");
  };

  // 게시글 수정하기
  const onClickMoveToEdit = () => {
    router.push(`/${router.query.id}/edit`);
  };

  return (
    <ProductDetailUI
      onClickMoveToEdit={onClickMoveToEdit}
      onClickDelete={onClickDelete}
      data={data}
    />
  );
}
