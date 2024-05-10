export default function Eighth() {
  return (
    <div className="mx-5 my-10">
      <div className="flex flex-col mb-3">
        <span className="text-gray-600 text-2xl ">4도 이하의</span>
        <span className="text-gray-600 text-2xl ">필수 옷차림은</span>
        <span className="font-bold text-3xl">패딩이에요!</span>
      </div>
      <div className="flex flex-col mb-3">
        <span className="text-gray-400 text-sm">매우 추운 온도이니</span>
        <span className="text-gray-400 text-sm">
          따뜻한 겨울 옷차림을 하세요!
        </span>
      </div>
      <div className="flex gap-1 mb-20">
        <div className="text-blue-500 border-2 border-blue-500 border-solid">
          패딩
        </div>
        <div className="text-blue-500 border-2 border-blue-500 border-solid">
          두꺼운 코트
        </div>
        <div className="text-blue-500 border-2 border-blue-500 border-solid">
          히트텍/내복
        </div>
        <div className="text-blue-500 border-2 border-blue-500 border-solid">
          목도리, 장갑
        </div>
      </div>
      <div className="w-[200px] h-[200px] border-black border-2 border-solid">
        이미지
      </div>
    </div>
  );
}
