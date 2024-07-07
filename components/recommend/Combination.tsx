"use client";

import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { getAllOotd } from "../mypage/api";
import Image from "next/image";

export default function Combination() {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["allOotd"],
    queryFn: getAllOotd,
  });
  const router = useRouter();
  console.log(data);

  const handleClick = (id: number) => {
    router.push(`/ootd/${id}`);
  };
  const backgroundImageUrl = (image: string) =>
    `${process.env.NEXT_PUBLIC_IP_API_KEY}/ootds/images/${image}`;

  const encodedFileName = (url: string) => encodeURIComponent(url);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div className="mt-10">로그인이 필요한 서비스입니다..</div>;
  }

  return (
    <div className="flex gap-2 items-center overflow-x-scroll scrollbar-hide mt-2">
      {data.data.map((ootd: any) => (
        <div
          key={ootd.ootdId}
          className="w-52 h-60 rounded-xl bg-gray-500 relative p-2 flex-shrink-0"
          style={{
            backgroundImage: `url('${backgroundImageUrl(
              encodedFileName(ootd.ootdImages[0].fileName)
            )}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          onClick={() => handleClick(ootd.ootdId)}
        >
          <span className="text-xs absolute left-2 text-white">
            <div className="flex items-center justify-center gap-1">
              <Image
                className="w-6 h-6 rounded-full"
                src={data.data.picture}
                alt="Image"
              />
              {ootd.member.name}
            </div>
          </span>
          <span className="absolute bottom-2 right-6 text-white text-3xl">
            {ootd.temperature}
            <span className="text-xs absolute top-1">°C</span>
          </span>
        </div>
      ))}
    </div>
  );
}
