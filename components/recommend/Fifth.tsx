export default function Fifth() {
  return (
    <div className="mx-5 my-10">
      <div className="flex flex-col mb-3">
        <span className="text-gray-600 text-2xl ">12~16도 사이의</span>
        <span className="text-gray-600 text-2xl ">필수 옷차림은</span>
        <span className="font-bold text-3xl">두꺼운 상의에요!</span>
      </div>
      <div className="flex flex-col mb-3">
        <span className="text-gray-400 text-sm">쌀쌀한 온도이니</span>
        <span className="text-gray-400 text-sm">얇은 겉옷을 챙겨 주세요!</span>
      </div>
      <div className="flex gap-1 mb-20">
        <div className="text-blue-500 border-2 border-blue-500 border-solid">
          기모후드티
        </div>
        <div className="text-blue-500 border-2 border-blue-500 border-solid">
          가디건
        </div>
        <div className="text-blue-500 border-2 border-blue-500 border-solid">
          니트/맨투맨
        </div>
      </div>
      <div className="w-[200px] h-[200px] border-black border-2 border-solid">
        이미지
      </div>
    </div>
  );
}
