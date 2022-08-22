import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import ProductWrite from "../../../src/components/units/markets/write/productWrite.container";

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
      useditemAddress {
        zipcode
        address
        addressDetail
      }
    }
  }
`;

export default function ProductEditPage() {
  const router = useRouter();
  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: { useditemId: String(router.query.id) },
  });

  console.log(data);

  return <ProductWrite isEdit={true} data={data} />;
}
