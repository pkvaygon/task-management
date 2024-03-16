import { staticStats } from "@/utils";

export default function Stats() {
  return (
    <div className="w-full divide-x-1 divide-dashed h-12 grid grid-cols-4 border-dashed rounded-large border-1 border-slate-400 items-center">
      {staticStats.map((stat) => (
        <div
          key={stat.key}
          className="w-full h-full p-2 flex justify-between items-center">
          <h6 className="text-sm">{stat.title}</h6>
          <span className="text-lg">{stat.value}</span>
        </div>
      ))}
    </div>
  );
}
