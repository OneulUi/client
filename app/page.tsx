import Image from "next/image";
import Button from "@/components/button/Button";
import sun from "../assets/sun.png";
export default function Home() {
  return (
    <main className="">
      <div className="flex flex-col items-center justify-center overflow-hidden">
        <Image
          src="https://cdn.pixabay.com/photo/2024/02/28/14/01/woman-8602128_1280.png"
          className="w-[100vw] h-[100vh] "
          width={500}
          height={500}
          alt="girl"
          priority
        />

        <div className="absolute bottom-0 w-[500Px] 3xl:w-full h-1/3 bg-gradient-to-t from-gray-600"></div>
        <div className="absolute inset-x-0 bottom-20 flex justify-center">
          <Button text="시작하기" href="/signin" />
        </div>
      </div>
    </main>
  );
}
