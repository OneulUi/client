import Image from "next/image";
import sun from "@/assets/sun.png";

export default function SearchComponent() {
  return (
    <div className="border-2 w-full">
      <Image
        src={sun}
        className="h-full"
        width={500}
        height={500}
        alt="girl"
        priority
      />
    </div>
  );
}
