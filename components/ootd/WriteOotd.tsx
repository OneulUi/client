export default function WriteOotd() {
  return (
    <section className="w-full flex flex-col items-center relative">
      <h1 className="absolute left-12 mb-4 font-semibold">
        OOTD 후기를 작성해주세요
      </h1>
      <textarea
        placeholder="글 작성하기"
        className="mt-8 font-thin border-2 rounded-2xl p-4 w-5/6 h-[160px] bg-gray-200 "
      />
    </section>
  );
}
