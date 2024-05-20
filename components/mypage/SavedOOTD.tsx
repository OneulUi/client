"use client";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { getSavedOotd } from "./api";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useRecoilState } from "recoil";
import { savedOotdState } from "./atom";
import { useEffect } from "react";
import { FiBookmark } from "react-icons/fi";
import { useRouter } from "next/navigation";

export default function SavedOOTD() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["savedOotd"],
    queryFn: getSavedOotd,
  });

  const [savedOotd, setSavedOotd] = useRecoilState(savedOotdState);
  const router = useRouter();
  const handleClick = (id: number) => {
    router.push(`/ootd/${id}`);
  };

  const backgroundImageUrl = (image: string) =>
    `${process.env.NEXT_PUBLIC_IP_API_KEY}/ootds/images/${image}`;

  const encodedFileName = (url: string) => encodeURIComponent(url);

  useEffect(() => {
    if (data) {
      setSavedOotd(data);
    }
  }, [data, setSavedOotd]);

  if (isError || !data || !data.data) {
    return <div>Error loading data</div>;
  }

  if (isLoading) <div>loading...</div>;

  return (
    <div className="px-5">
      <div className="flex justify-between mt-7 mb-2">
        <span className="font-bold">저장한 OOTD</span>
      </div>
      <div className="flex flex-col gap-2 items-center">
        {data.data.map((ootd: any) => (
          <div
            key={ootd.ootdId}
            className="w-full h-40 rounded-xl bg-gray-500 relative p-2 flex-shrink-0"
            style={{
              backgroundImage: `url('${backgroundImageUrl(
                encodedFileName(ootd.ootdImages[0].fileName)
              )}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            onClick={() => handleClick(ootd.ootdId)}
          >
            <span className="text-white absolute">{ootd.member.name}</span>
            <span className="text-white absolute right-3">
              <FiBookmark className="text-white" size={30} />
            </span>
            <span className="text-xs absolute left-3 bottom-3 text-white">
              {ootd.issueDate.split("-").join(".")}
            </span>
            <span className="absolute bottom-3 right-6 text-white text-2xl">
              {ootd.temperature}
              <span className="text-xs absolute top-1">°C</span>
            </span>
          </div>
        ))}

        <Link
          href="/mypage/savedootd"
          className="flex items-center border-solid border-gray-500 border-2 rounded-full py-1 px-2 text-sm"
        >
          Save OOTD 더보기 <MdKeyboardArrowRight />
        </Link>
      </div>
    </div>
  );
}
