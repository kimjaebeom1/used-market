import { useRouter } from "next/router";
import { useEffect } from "react";
import ProductDetail from "../../src/components/units/markets/detail/productDetail.container";

export default function BoardDetailPage() {
  const router = useRouter();

  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      alert("상품을 조회하려면 로그인이 필요합니다.");

      router.push("/login");
    }
  }, []);

  return (
    <>
      <ProductDetail />
    </>
  );
}
