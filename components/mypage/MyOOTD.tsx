"use client";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useEffect } from "react";
import { FaChevronRight } from "react-icons/fa";
import { useRecoilState } from "recoil";
import { getMyOotd } from "./api";
import { myOotdState } from "./atom";
import { useRouter } from "next/navigation";

export default function MyOOTD() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["myOotd"],
    queryFn: getMyOotd,
  });

  const [myOotd, setMyOotd] = useRecoilState(myOotdState);
  const router = useRouter();
  const handleClick = (id: number) => {
    router.push(`/ootd/${id}`);
  };

  const backgroundImageUrl = (image: string) =>
    `${process.env.NEXT_PUBLIC_IP_API_KEY}/ootds/images/${image}`;

  const encodedFileName = (url: string) => encodeURIComponent(url);

  useEffect(() => {
    if (data) {
      setMyOotd(data);
    }
  }, [data, setMyOotd]);

  if (isError || !data || !data.data) {
    // alert("로그인이 필요합니다.");
    // window.location.href = "/signin";
    return <div>Error loading data</div>;
  }

  if (isLoading) <div>loading...</div>;

  console.log("data", data);
  console.log("myOotd", myOotd);

  return (
    <div className="h-48">
      <div className="flex justify-between mt-7 mb-2 px-5">
        <span className="font-bold">나의 OOTD</span>
        <Link href="/mypage/myootd">
          <FaChevronRight />
        </Link>
      </div>
      <div className="flex gap-2 items-center overflow-x-scroll pl-5 scrollbar-hide ">
        {data.data.map((ootd: any) => (
          <div
            key={ootd.ootdId}
            className={`w-36 h-40 rounded-xl bg-gray-500 relative p-2 flex-shrink-0`}
            style={{
              backgroundImage: `url('${backgroundImageUrl(
                encodedFileName(ootd.ootdImages[0].fileName)
              )}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            onClick={() => handleClick(ootd.ootdId)}
          >
            <span className="text-xs absolute right-2 text-white">
              {ootd.issueDate.split("-").join(".")}
            </span>
            <span className="absolute bottom-2 text-white text-2xl">
              {ootd.temperature}
              <span className="text-xs absolute top-1">°C</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
