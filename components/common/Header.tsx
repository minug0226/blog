import Image from "next/image";
import { useRouter } from "next/router";
import { useState, useEffect, useRef } from "react";

let logoHeight = 0;

const Header = () => {
  const router = useRouter();
  const currentPath = router.pathname;
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const logoRef = useRef<HTMLDivElement>();

  useEffect(() => {
    const onScroll = () => {
      const currentScroll = window.scrollY;
      setIsScrolled(currentScroll >= logoHeight);
    };

    logoHeight = logoRef.current.getBoundingClientRect().height;
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="hidden md:contents">
        <div ref={logoRef} className="pt-4 text-center">
          <Image
            src="/images/header/team-logo.svg"
            alt="main-logo"
            width={157}
            height={56}
          />
        </div>

        <div className="sticky top-0 mx-auto h-[60px] max-w-[1080px] bg-white bg-opacity-50 px-4">
          <div className="flex justify-between">
            {isScrolled ? (
              <>
                <Image
                  src="/images/header/team-logo.svg"
                  alt="main-logo"
                  width={118}
                  height={42}
                />
              </>
            ) : (
              <div className="h-[52px] w-[52px]"></div>
            )}

            <div className="flex flex-1">
              <div className="flex flex-1 items-center justify-center">홈</div>
              <div className="flex flex-1 items-center justify-center">
                디벤져스
              </div>
              <div className="flex flex-1 items-center justify-center">
                기술
              </div>
              <div className="flex flex-1 items-center justify-center">
                디자인
              </div>
              <div className="flex flex-1 items-center justify-center">
                기타
              </div>
            </div>

            <div className="flex items-center">
              <Image
                src="/images/header/search-icon.svg"
                alt="search-icon"
                width={52}
                height={52}
              />
            </div>
          </div>
        </div>

        {currentPath === "/" ? (
          <div className="mt-5 h-[1px]"></div>
        ) : !isScrolled ? (
          <div className="mt-5 h-[1px] w-full bg-[#D9D9D9]"></div>
        ) : (
          <div className="mt-5 h-[1px]"></div>
        )}
      </div>

      {/* 768px break-points*/}
      <div className="contents md:hidden">
        <div className="sticky top-0 mx-auto h-[60px] max-w-[1080px] bg-white bg-opacity-50">
          <div className="flex h-full items-center justify-between px-4">
            <img src="/images/header/nav-icon.svg" alt="nav" />
            <img src="/images/header/sm-logo.png" alt="sm-logo" />
            <img src="/images/header/sm-search-icon.svg" alt="search-icon" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
