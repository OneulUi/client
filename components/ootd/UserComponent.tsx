export default function UserComponent() {
  return (
    <>
      {" "}
      <section className="flex flex-col justify-between border-2 rounded-2xl p-4 w-5/6 mt-4 h-[400px] bg-gray-200">
        <div className="flex justify-between items-center h-1/5">
          <span className="font-thin">UserName</span>
          <div className="flex items-center relative">
            <span className="text-[20px] mr-8 font-bold">
              20
              <span className="text-sm font-thin absolute top-1">{`\u00b0C`}</span>
            </span>
            <span className="text-[20px] mr-4 font-bold">
              70<span className="text-sm font-thin absolute top-1">%</span>
            </span>
          </div>
        </div>
        <span className="text-sm font-extralight">
          {new Date().toLocaleString()}
        </span>
        <article>TextTETETEXTXXTXTEXTEXTXEXTXETXTE</article>
        <div className="border border-gray-700 rounded-3xl h-full">
          유저사진
        </div>
      </section>
    </>
  );
}
