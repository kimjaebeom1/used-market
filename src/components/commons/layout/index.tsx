import { useRouter } from "next/router";
import LayoutHeader from "./header/layoutHeader.container";
import LayoutSidebar from "./sidebar/layoutSidebar.container";

export default function LayOut(props) {
  const router = useRouter();
  const HIDDEN_HEADERS = ["/signup", "/login"];
  const HIDDEN_SIDEBARS = ["/login", "/signup"];

  const isHiddenHeader = HIDDEN_HEADERS.includes(router.asPath);
  const isHiddenSidebar = HIDDEN_SIDEBARS.includes(router.asPath);

  return (
    <>
      {!isHiddenHeader && <LayoutHeader />}
      {!isHiddenSidebar && <LayoutSidebar />}
      {props.children}
    </>
  );
}
