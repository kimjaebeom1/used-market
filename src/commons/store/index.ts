import { atom } from "recoil";

export const accessTokenState = atom({
  key: "accessToken",
  default: "",
});

export const userInfoState = atom({
  key: "userInfoState",
  default: {
    email: "",
    name: "",
  },
});

export const localStorageState = atom({
  key: "localStorageState",
  default: false,
});

export const visitedPageState = atom({
  key: "visitedPageState",
  default: "/",
});
