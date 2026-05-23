export default function Project(){
    return(
        <div className="bg-gradient-to-l from-blue-700 to-purple-700 flex flex-col h-full items-center"> 
            <div className="h-1/5 text-2xl place-content-center">
            <div className="bg-gray-950 rounded-md p-2">
                 <span className="font-semibold text-slate-50">My </span>
                <span className="font-extralight text-blue-500">Project</span>
            </div>
            </div>
            <div className="h-2/5"> {/*with aellas cosmetic*/}
                <div className="text-xl text-slate-50 font-semibold">
                    <h1>Project With Aella Cosmetic</h1>
                </div>
            </div>
            <div className="h-2/5"> {/*Personal*/}
                <div>
                    <h1>Personal Project</h1>
                </div>
            </div>
        </div>
    )
}