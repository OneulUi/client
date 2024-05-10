export default function Seventh() {
  return (
    <div className="mx-5 my-10">
      <div className="flex flex-col mb-3">
        <span className="text-gray-600 text-2xl ">5~8도 사이의</span>
        <span className="text-gray-600 text-2xl ">필수 옷차림은</span>
        <span className="font-bold text-3xl">두꺼운 겉옷이에요!</span>
      </div>
      <div className="flex flex-col mb-3">
        <span className="text-gray-400 text-sm">추운 온도이니</span>
        <span className="text-gray-400 text-sm">따뜻한 옷차림을 하세요!</span>
      </div>
      <div className="flex gap-1 mb-20">
        <div className="text-blue-500 border-2 border-blue-500 border-solid">
          코트
        </div>
        <div className="text-blue-500 border-2 border-blue-500 border-solid">
          가죽자켓
        </div>
        <div className="text-blue-500 border-2 border-blue-500 border-solid">
          니트+플러스
        </div>
      </div>
      <div className="w-[200px] h-[200px] border-black border-2 border-solid">
        이미지
      </div>
    </div>
  );
}
