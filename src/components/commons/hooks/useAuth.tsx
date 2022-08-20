import { useEffect } from "react";
import { useRouter } from "next/router";

export function useAuth() {
  const router = useRouter();

  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      alert("상품을 등록하려면 로그인이 필요합니다.");

      router.push("/quiz/23-01-login-check-hoc");
    }
  }, []);
}
