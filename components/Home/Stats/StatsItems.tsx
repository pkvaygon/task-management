
const card = `w-full h-full p-2 flex justify-between items-center`
const title = `text-sm`
const value = `text-lg`

export const TotalProjects = ()=>{
    return (
        <div className={card}>
            <h6 className={title}>Total Projects</h6>
            <span className={value}>1</span>
        </div>
        )
}
export const TotalTasks = ()=>{
    return (
        <div className={card}>
            <h6 className={title}>Total Tasks</h6>
            <span className={value}>3</span>
        </div>
        )
}
export const AssignedTasks = ()=>{
    return (
        <div className={card}>
            <h6 className={title}>Assigned Tasks</h6>
            <span className={value}>2</span>
        </div>
        )
}
export const CompletedTasks = ()=>{
    return (
        <div className={card}>
            <h6 className={title}>Completed Tasks</h6>
            <span className={value}>0</span>
        </div>
        )
}
