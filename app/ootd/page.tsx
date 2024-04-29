import Header from "@/components/ootd/write/WriteHeader";
import UserComponent from "@/components/ootd/UserComponent";
import Weather2 from "@/components/ootd/Weather2";

import Input from "@/components/input/Input";
import OotdHeader from "@/components/ootd/OotdHeader";
export default function Ootd() {
  return (
    <main className="w-full flex flex-col items-center">
      <OotdHeader />
      <Input />
      <UserComponent />
      <UserComponent />
      <UserComponent />
    </main>
  );
}
