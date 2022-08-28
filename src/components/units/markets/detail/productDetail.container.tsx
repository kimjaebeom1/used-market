import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
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

  console.log(data);

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
    console.log(result);

    router.push("/");
    location.reload();
  };

  // 장바구니
  const onClickBasket = (basket) => () => {
    const baskets = JSON.parse(localStorage.getItem("baskets") || "[]");

    // 2. 이미 담겼는지 확인하기
    const temp = baskets.filter((el) => el._id === basket._id);
    if (temp.length === 1) {
      alert("이미 담으신 물품입니다!!!");
      return;
    }
    // 3. 해당 장바구니에 담기
    const { ...newBasket } = basket;

    baskets.push(newBasket);

    localStorage.setItem("baskets", JSON.stringify(baskets)); // 문자열만 들어갈 수 있기 때문에 객체나 배열을 문자열로 바꿔주는 JSON.stringify를 쓴다
  };

  return (
    <ProductDetailUI
      pick={pick}
      onClickMoveToEdit={onClickMoveToEdit}
      onClickDelete={onClickDelete}
      onClickPayment={onClickPayment}
      onClickBasket={onClickBasket}
      data={data}
    />
  );
}
