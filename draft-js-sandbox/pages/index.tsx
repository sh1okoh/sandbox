import dynamic from "next/dynamic";

const Editor = dynamic(import("../components/Editor/index"), { ssr: false });

export default function Home() {
  return (
    <div 
    className="shadow-sm border border-gray-300 rounded-md sm:text-sm overflow-scroll h-[500px] p-3 prose prose-stone"
    >
      <Editor />
    </div>
  );
}