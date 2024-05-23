import Image from "next/image";

export default function Sixth() {
    return (
      <div className="flex w-full justify-around items-center">
        <div>
        <Image src="/assets/겉옷.png" alt="옷" width={150} height={150} />
        </div>
        <div className="flex flex-col px-2">
          <span className="font-bold text-2xl">9~11°C</span>
          <span className="font-semibold mb-3">겉옷을 챙겨 주세요!</span>
          <div className="flex gap-1">
            <div className="border-2 border-blue-500 border-solid rounded-full text-blue-500 px-2">
              트렌치코트
            </div>
            <div className="border-2 border-blue-500 border-solid rounded-full text-blue-500 px-2">
              야상
            </div>
          </div>
          <div className="flex mt-1">
            <div className="border-2 border-blue-500 border-solid rounded-full text-blue-500 px-2">
              자켓
            </div>
          </div>
        </div>
      </div>
    );
  }
  