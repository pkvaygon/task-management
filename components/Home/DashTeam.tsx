import { testMembers } from "@/utils";
import Image from "next/image";

export default function DashTeam() {
  return (
      <section className="w-full flex flex-col gap-2 relative p-3 overflow-y-auto h-full bg-yellow-200  rounded-large dark:bg-darkbg">
          <div className="  select-none border-bottom border-dashed border-b-2 pb-2">
        <h2>Team</h2>
      </div>
      {testMembers.map((member) => (
        <div
          className="hover:w-36 hover:h-36 hover:fixed transition-all ease-in-out w-14 h-14 relative"
          key={member.memberId}>
          <Image
            className="object-cover rounded-full"
            fill
            priority
            src={member.avatar}
            alt={member.fullname}
          />
        </div>
      ))}
    </section>
  );
}
