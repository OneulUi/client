import { ButtonText } from "@/api/type";

export default function Button({ text }: ButtonText) {
  return (
    <div className="bg-gray-700 text-white w-[400px] h-[60px] flex items-center justify-center rounded-3xl">
      {text}
    </div>
  );
}
