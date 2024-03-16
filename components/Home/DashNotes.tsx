import { testNotes } from "@/utils";

export default function DashNotes() {
  const notes = testNotes();
  return (
    <form action="" className="dark:bg-darkbg bg-zinc-600 rounded-large p-3">
      <label
        htmlFor="notes"
        className="block text-sm font-medium text-white dark:text-gray-300">
        Notes
      </label>
      <textarea
        defaultValue={notes}
        id="notes"
        className="min-w-full outline-none  text-white min-h-full  resize-none text-sm bg-transparent"></textarea>
    </form>
  );
}
