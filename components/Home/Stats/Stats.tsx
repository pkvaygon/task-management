import { AssignedTasks, CompletedTasks, TotalProjects, TotalTasks } from "./StatsItems";



export default function Stats() {
    return (
        <div className="w-full divide-x-1 divide-dashed h-12 grid grid-cols-4 border-dashed rounded-large border-1 border-slate-400 items-center">
            <TotalProjects />
            <TotalTasks/>
            <AssignedTasks/>
            <CompletedTasks/>
    </div>
    
        )

}