import { ButtonText } from "@/api/type";
import Link from "next/link";

export default function Button({ text, href }: ButtonText) {
  return (
    <Link href={href}>
      <button className="bottom-40 bg-gray-900 text-white w-[400px] h-[60px] flex items-center justify-center rounded-3xl">
        {text}
      </button>
    </Link>
  );
}
