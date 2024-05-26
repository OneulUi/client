"use client";
import Button from "@/components/button/Button";
import sun from "@/assets/mongolian.png";
import Image from "next/image";
import HeaderPost from "@/components/ootd/post/HeaderSearch";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";
import { useEffect, useState } from "react";
import { Axios } from "@/api/axios";
import { OotdData } from "@/api/type";
import { FaUserCircle } from "react-icons/fa";
import { getDate } from "@/utils/getDate";
import { CiFaceFrown } from "react-icons/ci";
import { CiFaceSmile } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa6";
import { IoBookmarkOutline } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { IoBookmark } from "react-icons/io5";
import { usePathname } from "next/navigation";
export default function PostPage() {
  const [ootdData, setOotdData] = useState<OotdData | null>(null);
  const [heart, setHeart] = useState<boolean>(false);
  const [mark, setMark] = useState<boolean>(false);

  const pathname = usePathname();

  const id = pathname.replace("/ootd/", "");
  console.log(id);
  const handleHeartClick = () => {
    setHeart(!heart);
  };

  const handleBookMarkClick = () => {
    setMark(!mark);
  };

  const dateNow = getDate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await Axios.get(`/ootds/${id}`);
        const postData = res.data.data;
        setOotdData(postData);
      } catch (error) {
        console.error("Error fetching ootd data:", error);
      }
    };

    fetchData();
  }, [id]);
  console.log("ootdData", ootdData);
  return (
    <main className="relative">
      <div className="flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute top-5 left-0">
          {" "}
          <Link href="/ootd" className="absolute left-4">
            <IoIosArrowBack />
          </Link>
        </div>
        <div
          onClick={handleHeartClick}
          className="absolute top-5 flex right-12"
        >
          {heart ? (
            <FaHeart size={29} className="text-red-400 mr-4" />
          ) : (
            <FaRegHeart size={29} className="text-red-400 mr-4" />
          )}
        </div>
        <div
          onClick={handleBookMarkClick}
          className="absolute top-5 flex right-5"
        >
          {mark ? (
            <IoBookmark size={29} className="text-green-900" />
          ) : (
            <IoBookmarkOutline size={29} className="text-green-900" />
          )}
        </div>

        <div className="absolute bottom-0 w-[500Px] 3xl:w-full h-1/3 bg-gradient-to-t from-gray-700 "></div>
        {/* <HeaderPost /> */}
        <Image
          loader={() =>
            `${process.env.NEXT_PUBLIC_IP_API_KEY}/ootds/images/${ootdData?.ootdImages[0].fileName}`
          }
          src={`${process.env.NEXT_PUBLIC_IP_API_KEY}/ootds/images/${ootdData?.ootdImages[0].fileName}`}
          className="h-[92vh]"
          width={500}
          height={300}
          alt="사진"
          priority
        />
        <div className="absolute bottom-40 right-10 display flex justify-center items-center">
          <h5 className="text-[35px] font-middle flex text-[rgba(251,251,251)] mr-2 mt-8">
            {ootdData?.humidity}
            <p className="text-[17px]">%</p>
          </h5>

          <h1 className="text-[80px] flex font-middle text-[rgba(251,251,251)] ml-2">
            {ootdData?.temperature}
            <p className="text-[33px]">°C</p>
          </h1>
        </div>
        <div className="absolute bottom-40 left-6 flex">
          <FaUserCircle size={26} className="text-[rgba(251,251,251)] mr-2" />
          <p className="text-lg font-thin text-[rgba(251,251,251)]">
            {ootdData?.member.name}
          </p>
        </div>
        <div className="absolute bottom-28 left-6 flex text-[rgba(251,251,251)]">
          {dateNow}
        </div>
        <div className="absolute bottom-20 font-thin left-6 flex text-[rgba(251,251,251)]">
          {ootdData?.review}
        </div>
        <div className="absolute bottom-10 font-thin right-6 flex text-[rgba(251,251,251)]">
          {ootdData?.satisfaction === "Y" ? (
            <button className="flex items-center text-xl p-3 w-full rounded-3xl mr-0.5 bg-gray-400 opacity-80">
              <CiFaceSmile className="mr-2" size={26} />
              좋았어요!
            </button>
          ) : (
            <button className="flex items-center text-xl p-3 w-full rounded-3xl mr-0.5  bg-gray-400 opacity-80 ">
              <CiFaceFrown className="mr-2" size={26} />
              별로였어요!
            </button>
          )}
        </div>
      </div>
    </main>
  );
}
