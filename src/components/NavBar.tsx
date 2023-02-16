import "./../assets/styles/index.css"

export default function NavBar() {
    return (
        <div className="bg-gradient-to-r from-[#672280] to-[#A626D3] flex gap-2 px-2 py-3">
            <img className="w-12 h-fit" src="./TrollFace.png" alt="troll face" />
            <h1 className="text-white font-bold tracking-tight text-3xl my-auto">Meme Generator</h1>
        </div>
    )
}