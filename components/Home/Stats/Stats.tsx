import { AssignedTasks, CompletedTasks, TotalProjects, TotalTasks } from "./StatsItems";



export default function Stats() {
    return (
        <div className="w-full grid grid-cols-4 border-dashed rounded-large divide-x divide-dashed border-1 border-slate-400">
            <TotalProjects />
            <TotalTasks/>
            <AssignedTasks/>
            <CompletedTasks/>
    </div>
    
        )

}