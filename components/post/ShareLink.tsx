import { IPost } from "@type/posts";
import { useRouter } from "next/router";
import Script from "next/script";
import React from "react";

declare global {
  // Kakao 함수를 전역에서 사용할 수 있도록 선언
  interface Window {
    Kakao: any;
  }
}
interface IPostTopSectionProps {
  data: IPost;
}

const ShareLink = ({ data }: IPostTopSectionProps) => {
  const router = useRouter();

  const shareWithKakao = () => {
    window.Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: data.title,
        description: data.content,
        imageUrl: data.thumbnail,
        link: {
          mobileWebUrl: `http://localhost:3000${router.asPath}`,
          webUrl: `http://localhost:3000${router.asPath}`,
        },
      },
      buttons: [
        {
          title: "해당 글로 이동",
          link: {
            mobileWebUrl: `http://localhost:3000${router.asPath}`,
            webUrl: `http://localhost:3000${router.asPath}`,
          },
        },
      ],
    });
  };

  const shareWithLink = () => {
    navigator.clipboard
      .writeText(`http://localhost:3000${router.asPath}`)
      .then(() => alert("링크가 복사되었습니다."));
  };

  return (
    <>
      <Script
        src="https://developers.kakao.com/sdk/js/kakao.js"
        onLoad={() => {
          window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_JAVASCRIPT_KEY);
          window.Kakao.isInitialized();
        }}
      />
      <div className="mb-[46px] flex justify-center space-x-4">
        <div
          onClick={shareWithKakao}
          className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-gray20"
        >
          <img src="/images/share/kakao-share.svg" alt="kakao-share" />
        </div>
        <div
          onClick={shareWithLink}
          className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-gray20"
        >
          <img src="/images/share/link-share.svg" alt="link-share" />
        </div>
      </div>
    </>
  );
};

export default ShareLink;
