export default function MemeForms(){
    return (
        <div className="MemeForms flex flex-col align-center my-8">
            <form className="flex flex-col align-middle" action="">
                <div className="flex flex-col">
                    <input className="appearance-none bg-white text-gray-700 border border-slate-500 rounded mx-3 py-2 px-3 mb-3 focus:outline-none focus:bg-white" type="text" id="input1"/>

                    <input className="appearance-none bg-white text-gray-700 border border-slate-500 rounded mx-3 py-2 px-3 mb-3 focus:outline-none focus:bg-white" type="text" id="input2"/>
                </div>
                <button className="text-white mx-5 px-3 py-3 rounded bg-gradient-to-r from-purple-900 to-purple-500" >Get a new meme image</button>
            </form>
        </div>
    )
}