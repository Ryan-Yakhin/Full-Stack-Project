import tato from "../assets/tato.jpeg";

export default function Player(){
    
    const manager = [
        {
            name: "Sir Yanto Ferguson",
            role: "Manager",
            image: tato
        }
    ]

    const Penyerang = [
        {
            name: "Kylian Bimo",
            role: "Striker",
            image: tato
        },
        {
            name: "Erling Sito ",
            role: "Striker",
            image: tato
        },
    ]

    return(
        <div className="bg-slate-50 font-mono min-h-screen flex flex-col gap-10 p-4">
            <h1 className="text-3xl font-bold">Our Team</h1>
            <div className="flex flex-col gap-2">
                <h2 className="font-light text-2xl">{manager[0].role}</h2>
                <div className="h-48 w-48">
                    <img src={manager[0].image} alt="Logo" className="rounded-lg h-full w-full object-cover" />
                </div>
                <p className="">{manager[0].name}</p>
            </div>

            <div className="flex flex-row gap-2">
                <div className="flex flex-row gap-5">
                    {Penyerang.map((player, index) => (
                        <div key={index} className="flex flex-col gap-2">
                            <h2 className="font-light text-2xl">{player.role}</h2>
                            <div className="h-48 w-48">
                                <img src={player.image} alt="Logo" className="rounded-lg h-full w-full object-cover" />
                            </div>
                            <p className="">{player.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}