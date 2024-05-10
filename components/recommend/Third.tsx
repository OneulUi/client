export default function Third() {
  return (
    <div className="mx-5 my-10">
      <div className="flex flex-col mb-3">
        <span className="text-gray-600 text-2xl ">20~22도 사이의</span>
        <span className="text-gray-600 text-2xl ">필수 옷차림은</span>
        <span className="font-bold text-3xl">얇은 긴팔이에요!</span>
      </div>
      <div className="flex flex-col mb-3">
        <span className="text-gray-400 text-sm">외출하기 좋은 날씨에요</span>
        <span className="text-gray-400 text-sm">
          얇고 가벼운 옷차림을 하세요!
        </span>
      </div>
      <div className="flex gap-1 mb-20">
        <div className="text-blue-500 border-2 border-blue-500 border-solid">
          셔츠
        </div>
        <div className="text-blue-500 border-2 border-blue-500 border-solid">
          7부바지
        </div>
        <div className="text-blue-500 border-2 border-blue-500 border-solid">
          면바지
        </div>
      </div>
      <div className="w-[200px] h-[200px] border-black border-2 border-solid">
        이미지
      </div>
    </div>
  );
}
