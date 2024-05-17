export default function Second() {
  return (
    <div className="ml-5 my-10">
      <div className="flex flex-col mb-3">
        <span className="text-gray-600 text-2xl ">23~27도 사이의</span>
        <span className="text-gray-600 text-2xl ">필수 옷차림은</span>
        <span className="font-bold text-3xl">반팔이에요!</span>
      </div>
      <div className="flex flex-col mb-3">
        <span className="text-gray-400 text-sm">더운 온도이니</span>
        <span className="text-gray-400 text-sm">
          얇고 가벼운 봄 옷차림을 하세요!
        </span>
      </div>
      <div className="flex gap-1 mb-20">
        <div className="text-blue-500 border rounded-full border-blue-500 border-solid px-2">
          티셔츠
        </div>
        <div className="text-blue-500 border rounded-full border-blue-500 border-solid px-2">
          반바지
        </div>
      </div>
      <div className="w-[200px] h-[200px] border-black border-2 border-solid">
        이미지
      </div>
    </div>
  );
}
