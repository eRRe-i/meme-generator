import MemeForms from "./MemeForms"
import MemeContent from "./MemeContent"
import { useState } from "react"
import { memes } from "./data"


export interface ImageHandler {
    imageState: string
    setImageState: ()=>void
}


export default function MainContent() {

    const [imgSrc, setImgSrc] = useState(()=>{return "https://resizedimgs.vivareal.com/fit-in/870x653/named.images.sp/da8a435c9958b007dfbc0c6f72ef0c9f/%7Bdescription%7D.jpg"})

    const handler = () => {
        setImgSrc(()=>{
            return memes.data.memes[Math.floor(Math.random()*memes.data.memes.length)].url
        });
    }
    
    return (
        <main className="MainContent">
            <MemeForms imageState={imgSrc} setImageState={handler} />
            <MemeContent imageState={imgSrc} setImageState={handler} />
        </main>
    )
}