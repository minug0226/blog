const Drawer = () => {
  return (
    <div className="absolute top-0 left-0 h-full w-[70%] bg-white pl-[51px] pt-[54px] pr-6">
      <div className="mb-8 flex justify-end">
        <img src="/images/drawer/close-button.svg" alt="close-button" />
      </div>
      <div>
        <div className="px-[10px] py-[10px] text-lg font-normal leading-[42px] text-[#525252]">
          홈
        </div>
        <div className="px-[10px] py-[10px] text-lg font-normal leading-[42px] text-[#525252]">
          디벤져스
        </div>
        <div className="px-[10px] py-[10px] text-lg font-normal leading-[42px] text-[#525252]">
          기술
        </div>
        <div className="px-[10px] py-[10px] text-lg font-normal leading-[42px] text-[#525252]">
          디자인
        </div>
        <div className="px-[10px] py-[10px] text-lg font-normal leading-[42px] text-[#525252]">
          기타
        </div>
      </div>
    </div>
  );
};

export default Drawer;
