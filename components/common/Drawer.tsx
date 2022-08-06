import { useRouter } from "next/router";
import { Dispatch, SetStateAction } from "react";
import { useRecoilState } from "recoil";
import { globalNavAtom } from "states/common";

interface IDrawerProps {
  drawerOpen: boolean;
  setDrawerOpen: Dispatch<SetStateAction<boolean>>;
}

const Drawer = ({ drawerOpen, setDrawerOpen }: IDrawerProps) => {
  const navList = [
    { content: "홈", route: "/" },
    { content: "디벤져스", route: "/" },
    { content: "기술", route: "/tech" },
    { content: "디자인", route: "/design" },
    { content: "기타", route: "/etc" },
  ];
  const router = useRouter();
  const [globalNav, setGlobalNav] = useRecoilState(globalNavAtom);

  const drawerClass = () => {
    if (!drawerOpen) {
      return "hidden";
    } else {
      return "absolute top-0 left-0 z-[100] h-full w-[70%] bg-white pl-[51px] pt-[54px] pr-6 md:hidden";
    }
  };

  const navListClass = (item: string) => {
    const defaultClass =
      "px-[10px] py-[10px] text-lg leading-[42px] cursor-pointer ";
    if (item === globalNav) return defaultClass + "black60 font-bold";
    else return defaultClass + "black20 font-normal";
  };

  return (
    <div className={drawerClass()}>
      <div className="mb-8 flex justify-end">
        <img
          className="cursor-pointer"
          onClick={() => setDrawerOpen(false)}
          src="/images/drawer/close-button.svg"
          alt="close-button"
        />
      </div>

      {navList.map((item, i) => (
        <div
          onClick={() => {
            setGlobalNav(item.content);
            router.push(item.route);
            setDrawerOpen(false);
          }}
          key={i}
          className={navListClass(item.content)}
        >
          {item.content}
        </div>
      ))}
    </div>
  );
};

export default Drawer;
