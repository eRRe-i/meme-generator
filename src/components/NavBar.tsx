import "./../assets/styles/index.css"

export default function NavBar() {
    return (
        <div className="bg-gradient-to-r from-purple-900 to-purple-500  flex gap-2 px-2 py-3">
            <img className="w-14 h-fit" src="./TrollFace.png" alt="troll face" />
            <h1 className="text-white text-3xl my-auto">Meme Generator</h1>
        </div>
    )
}