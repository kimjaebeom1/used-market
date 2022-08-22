import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { getDate } from "../../../../commons/libraries/utils";
import { localStorageState } from "../../../../commons/store";
import { useMoveToPage } from "../../hooks/useMoveToPage";
import LayoutSidebarUI from "./layoutSidebar.presenter";

export default function LayoutSidebar() {
  const [todays, setTodays] = useState([]);
  const date = new Date();
  const router = useRouter();
  const { onClickMoveToPage } = useMoveToPage();
  const [isActive, setIsActive] = useRecoilState(localStorageState);

  const onClickMoveToStorage = (data) => () => {
    router.push(`/${data._id}`);
  };

  useEffect(() => {
    const result = JSON.parse(localStorage.getItem(`${getDate(date)}`) || "[]");
    setTodays(result);
  }, [isActive]);

  return (
    <LayoutSidebarUI
      onClickMoveToPage={onClickMoveToPage}
      onClickMoveToStorage={onClickMoveToStorage}
      todays={todays}
    />
  );
}
