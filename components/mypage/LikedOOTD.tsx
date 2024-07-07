"use client";
import Link from "next/link";
import { FaChevronRight, FaHeart } from "react-icons/fa";
import { getLikedOotd } from "./api";
import { useQuery } from "@tanstack/react-query";
import { useRecoilState } from "recoil";
import { likedOotdState } from "./atom";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LikedOOTD() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["likedOotd"],
    queryFn: getLikedOotd,
  });

  const [likedOotd, setLikedOotd] = useRecoilState(likedOotdState);
  const router = useRouter();
  const handleClick = (id: number) => {
    router.push(`/ootd/${id}`);
  };

  const backgroundImageUrl = (image: string) =>
    `${process.env.NEXT_PUBLIC_IP_API_KEY}/ootds/images/${image}`;

  const encodedFileName = (url: string) => encodeURIComponent(url);

  useEffect(() => {
    if (data) {
      setLikedOotd(data);
    }
  }, [data, setLikedOotd]);

  if (isError || !data || !data.data) {
    // alert("로그인이 필요합니다.");
    // window.location.href = "/signin";
    return <div>Error loading data</div>;
  }

  if (isLoading) <div>loading...</div>;

  return (
    <div className="mb-32 h-48">
      <div className="flex justify-between mt-7 mb-2 px-5">
        <span className="font-bold">좋아한 OOTD</span>
        <Link href="/mypage/likedootd">
          <FaChevronRight />
        </Link>
      </div>
      <div className="flex gap-2 items-center overflow-x-scroll pl-5 scrollbar-hide">
        {data.data.map((ootd: any) => (
          <div
            key={ootd.ootdId}
            className="w-36 h-40 rounded-xl bg-gray-500 relative p-2 flex-shrink-0"
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
              <FaHeart className="text-red-500" size={20} />
            </span>
            <span className="text-xs absolute bottom-9 text-white">
              2024.04.02
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
