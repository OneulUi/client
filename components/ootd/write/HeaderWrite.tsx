import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";
import { uploadImageToServer } from "@/components/hook/uplodImg";

interface HeaderProps {
  uploadFile: File | null;
}
export default function Header({ uploadFile }: HeaderProps) {
  const handleClick = () => {
    if (uploadFile) {
      uploadImageToServer(uploadFile);
    }
    console.log("파일값이 Null입니다.");
  };
  return (
    <section className="flex items-center justify-between p-6 w-full backdrop-blur-[1px]">
      <Link href="/ootd">
        <IoIosArrowBack />
      </Link>
      <span className="text-gray-600 text-[20px] font-thin">OOTD 업로드</span>

      <button onClick={handleClick}>Post</button>
    </section>
  );
}
