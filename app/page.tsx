import Image from "next/image";
import Button from "@/components/button/Button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      오늘의
      <Button text="시작하기" />
    </main>
  );
}
