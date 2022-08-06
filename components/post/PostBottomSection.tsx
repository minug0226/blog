import ShareLink from "./ShareLink";

const PostBottomSection = () => {
  return (
    <>
      <ShareLink />
      <div className="relative flex h-[110px] justify-center bg-gray20">
        <div className="absolute top-[-21px] flex w-full max-w-[1080px] justify-end px-4 md:px-0">
          <div className="itmes-end mr-4 flex flex-col justify-end">
            <div className="ml-auto font-bold leading-[26px] text-black60">
              Hulk
            </div>
            <div className="text-sm leading-6 text-black20">
              Developer / Engineers
            </div>
          </div>
          <div className="h-[100px] w-[100px] bg-black">img</div>
        </div>
      </div>
    </>
  );
};

export default PostBottomSection;
