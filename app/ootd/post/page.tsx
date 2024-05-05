import Button from "@/components/button/Button";
import sun from "@/assets/sun.png";
import Image from "next/image";
export default function PostPage() {
  return (
    <main className="">
      <div className="flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute bottom-0 w-[500Px] 3xl:w-full h-1/3 bg-gradient-to-t from-gray-600"></div>
        <Image
          src={sun}
          className="w-[100vw] h-[100vh] "
          width={500}
          height={500}
          alt="girl"
          priority
        />
        <Button
          text="시작하기"
          href="http://localhost:8080/oauth2/authorization/google"
        />
      </div>
    </main>
  );
}
