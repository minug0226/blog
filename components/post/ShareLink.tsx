import React from "react";

const ShareLink = () => {
  return (
    <div className="mb-[46px] flex justify-center space-x-4">
      <div className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-gray20">
        <img src="/images/share/kakao-share.svg" alt="kakao-share" />
      </div>
      <div className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-gray20">
        <img src="/images/share/link-share.svg" alt="link-share" />
      </div>
    </div>
  );
};

export default ShareLink;
