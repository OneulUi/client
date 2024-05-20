"use client";
import { myOotdState } from "@/components/mypage/atom";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaChevronLeft } from "react-icons/fa";
import { useRecoilValue } from "recoil";

export default function Myootd() {
  const myOotd = useRecoilValue(myOotdState);
  const data = myOotd.data || [];
  console.log("myOotd", myOotd);
  const router = useRouter();
  const handleClick = (id: number) => {
    router.push(`/ootd/${id}`);
  };
  const backgroundImageUrl = (image: string) =>
    `${process.env.NEXT_PUBLIC_IP_API_KEY}/ootds/images/${image}`;

  const encodedFileName = (url: string) => encodeURIComponent(url);

  console.log(data);

  return (
    <div className="w-full">
      <div className="mt-12 flex justify-between items-center px-3">
        <Link href="/mypage">
          <FaChevronLeft />
        </Link>
        <div>나의 OOTD</div>
        <div className="w-4"></div>
      </div>
      <div className="mt-5 mb-3 px-3 text-xs">전체 {data.length}개</div>
      {data.length !== 0 ? (
        <div className="grid grid-cols-3 gap-1 mb-10">
          {data.map((ootd: any, index) => (
            <div
              key={index}
              className="relative h-40 w-32 bg-gray-500 p-2"
              style={{
                backgroundImage: `url('${backgroundImageUrl(
                  encodedFileName(ootd.ootdImages[0].fileName)
                )}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              //@ts-ignore
              onClick={() => handleClick(ootd.ootdId)}
            >
              <span className="absolute right-2 text-xs text-white">
                {" "}              {ootd.issueDate.split("-").join(".")}
              </span>
              <span className="absolute bottom-2 text-2xl text-white">
                {ootd.temperature}
                <span className="absolute top-1 text-xs">°C</span>
              </span>
            </div>
          ))}
        </div>
      ) : (
        <div className="p-3">No data</div>
      )}
    </div>
  );
}
