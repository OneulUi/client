import Header from "@/components/ootd/write/HeaderWrite";
import UserComponent from "@/components/ootd/UserComponent";
import Weather2 from "@/components/ootd/Weather2";

import Input from "@/components/input/Input";
import HeaderOotd from "@/components/ootd/HeaderOotd";
export default function Ootd() {
  return (
    <main className="w-full flex flex-col items-center">
      <HeaderOotd />
      <Input />
      <section className="bg-blue-200 w-full flex flex-col items-center">
        <UserComponent />
        <UserComponent />
        <UserComponent />
      </section>
    </main>
  );
}
