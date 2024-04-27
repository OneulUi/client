export default function UserComponent() {
  return (
    <>
      {" "}
      <section className="flex flex-col border-2 rounded-2xl p-4 w-5/6 m-4 h-[300px] bg-gray-200">
        <div className="flex justify-between">
          <span className="font-thin">UserName</span>
          <div className="flex flex-col">
            <span>date</span>
            <div>
              <span>humidity</span>
              <span>Temperature</span>
            </div>
          </div>
        </div>
        <article>불라불라</article>
        <div>유저사진</div>
      </section>
    </>
  );
}
