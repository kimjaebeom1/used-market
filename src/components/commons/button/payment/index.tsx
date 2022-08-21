import { gql, useMutation, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { useRouter } from "next/router";

const DirectBuyingBox = styled.button`
  display: flex;
  flex-direction: column;
  margin-left: 22px;
  margin-top: 35px;
  background-color: black;
  width: 312px;
  height: 100px;
  border: none;
  color: white;
  font-weight: 700;
  font-size: 30px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const FETCH_USED_ITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      remarks
      contents
      price
      tags
      images
      seller {
        name
      }
      useditemAddress {
        zipcode
        address
        addressDetail
      }
    }
  }
`;

const FETCH_USER_LOGGEN_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      name
      userPoint {
        _id
        amount
      }
    }
  }
`;

const CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING = gql`
  mutation createPointTransactionOfBuyingAndSelling($useritemId: ID!) {
    createPointTransactionOfBuyingAndSelling(useritemId: $useritemId) {
      _id
      name
      price
    }
  }
`;

export default function PaymentButton() {
  const router = useRouter();
  const [createPointTransactionOfBuyingAndSelling] = useMutation(
    CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING
  );

  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: { useditemId: String(router.query.id) },
  });

  const onClickPayment = async () => {
    const result = await createPointTransactionOfBuyingAndSelling({
      variables: {
        _id: data.fetchUseditem._id,
        name: data.fetchUseditem.name,
        price: data.fetchUseditem.price,
      },
    });
    router.push("/");
    console.log(result);
  };

  return <DirectBuyingBox onClick={onClickPayment}>바로구매</DirectBuyingBox>;
}
