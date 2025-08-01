export default function Topbar() {
  return (
    <div className="w-full bg-[#ff6600] text-black px-2 py-1 flex items-center text-sm font-normal">
      <span className="font-bold mr-2">Y</span>
      <span className="font-bold mr-3">Hacker News</span>
      <span className="space-x-2">
        <a href="#" className="hover:underline">
          {" "}
          new
        </a>{" "}
        |
        <a href="#" className="hover:underline">
          {" "}
          past
        </a>{" "}
        |
        <a href="#" className="hover:underline">
          {" "}
          comments
        </a>{" "}
        |
        <a href="#" className="hover:underline">
          {" "}
          ask
        </a>{" "}
        |
        <a href="#" className="hover:underline">
          {" "}
          show
        </a>{" "}
        |
        <a href="#" className="hover:underline">
          {" "}
          jobs
        </a>{" "}
        |
        <a href="#" className="hover:underline">
          {" "}
          submit
        </a>
      </span>
      <div className="ml-auto">
        <a href="#" className="hover:underline">
          login
        </a>
      </div>
    </div>
  );
}
