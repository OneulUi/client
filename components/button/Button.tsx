import { ButtonText } from "@/api/type";
import Link from "next/link";

export default function Button({ text, href }: ButtonText) {
  return (
    <Link href={href}>
      <button className="bottom-40 bg-gray-900 text-white w-[45vh] h-[8vh] flex items-center justify-center rounded-3xl transition-transform hover:scale-95">
        {text}
      </button>
    </Link>
  );
}
