import SearchComponent from "@/components/ootd/search/SearchComponent";
import HeaderSearch from "../../../components/ootd/search/HeaderSearch";
import Input from "@/components/input/Input";

export default function OotdSearch() {
  return (
    <main className="w-full">
      <HeaderSearch />
      <Input />
      <section className="grid grid-cols-3 gap-1">
        <SearchComponent />
      </section>
    </main>
  );
}
