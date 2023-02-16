import { useState } from "react"
import { ImageHandler } from "./MainContent"
import { memes } from "./data"

export default function MemeForms({imageState, setImageState}:ImageHandler){


    return (
        <div className="MemeForms flex flex-col align-center my-8">
            <form className="flex flex-col align-middle" action="">
                <div className="flex flex-col">
                    <input className="appearance-none bg-white text-gray-700 border border-slate-500 rounded mx-3 py-2 px-3 mb-3 focus:outline-none focus:bg-white" type="text" id="input1"/>

                    <input className="appearance-none bg-white text-gray-700 border border-slate-500 rounded mx-3 py-2 px-3 mb-3 focus:outline-none focus:bg-white" type="text" id="input2"/>
                </div>
                <button onClick={(event)=>{
                    setImageState()
                    event.preventDefault();

                }} className="text-white font-bold tracking-tight mx-5 px-3 py-3 rounded bg-gradient-to-r from-[#672280] to-[#A626D3]" ><p>Get a new meme image 🖼️</p>
                </button>
            </form>
        </div>
    )
}
 