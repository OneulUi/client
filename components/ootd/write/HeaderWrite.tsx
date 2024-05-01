import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";
import Uploady, { useUploady } from "@rpldy/uploady";
export default function Header() {
  const uploady = useUploady();
  const handleClick = () => {
    uploady.showFileUpload();
  };

  return (
    <section className="flex items-center justify-between p-6 w-full backdrop-blur-[1px]">
      <Link href="/ootd">
        <IoIosArrowBack />
      </Link>
      <span className="text-gray-600 text-[20px] font-thin">OOTD 업로드</span>
      <Uploady>
        <span onClick={handleClick}>Post</span>
      </Uploady>
    </section>
  );
}
