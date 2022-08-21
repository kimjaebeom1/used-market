import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import ProductDetailUI from "./productDetail.presenter";
import {
  CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING,
  DELETE_USED_ITEM,
  FETCH_USED_ITEM,
} from "./productDetail.queries";

export default function ProductDetail(props) {
  const router = useRouter();
  const [pick, setPick] = useState(0);
  const [deleteUseditem] = useMutation(DELETE_USED_ITEM);
  const [createPointTransactionOfBuyingAndSelling] = useMutation(
    CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING
  );

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

  // 결제
  const onClickPayment = async () => {
    const result = await createPointTransactionOfBuyingAndSelling({
      variables: {
        useritemId: router.query.id,
      },
    });
    router.push("/");
    console.log(result);
    setPick(result);
  };

  console.log(pick);

  return (
    <ProductDetailUI
      pick={pick}
      onClickMoveToEdit={onClickMoveToEdit}
      onClickDelete={onClickDelete}
      onClickPayment={onClickPayment}
      data={data}
    />
  );
}
