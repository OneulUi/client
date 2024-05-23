import Image from "next/image";

export default function First() {
  return (
    <div className="flex w-full justify-around items-center">
      <div>
        <Image src="/assets/민소매.png" alt="옷" width={150} height={150} />
      </div>
      <div className="flex flex-col px-2">
        <span className="font-bold text-2xl">28°C~</span>
        <span className="font-semibold mb-3">더운 날씨에요!</span>
        <div className="flex gap-1">
          <div className="border-2 border-blue-500 border-solid rounded-full text-blue-500 px-2">
            민소매
          </div>
          <div className="border-2 border-blue-500 border-solid rounded-full text-blue-500 px-2">
            반바지
          </div>
        </div>
      </div>
    </div>
  );
}
