import { atom } from "recoil";

export const sidebar = atom<boolean | undefined>({
  key: "showSidebar",
  default: false,
});
