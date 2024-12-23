import { useRecoilState } from "recoil";
import { ReturnTypesSidebar } from "./type";
import { sidebar } from "./store";

export const useSidebarToogle = (): ReturnTypesSidebar => {
  const [get, set] = useRecoilState<boolean | undefined>(sidebar);
  return {
    setToogle: (val) => set(val),
    getToogle: get,
  };
};
